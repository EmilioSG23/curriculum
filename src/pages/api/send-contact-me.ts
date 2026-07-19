import { BASE_URL, CONTACT_EMAIL, RESEND_API_KEY } from "@/config";
import { validateEmail } from "@/validator/validateEmail";
import type { APIContext, APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(RESEND_API_KEY);

/**
 * Error messages for contact form submission failures.
 */
const errorMessages = {
	"missing-fields": "Required contact fields are missing.",
	"invalid-email": "The provided email address is invalid.",
	"field-too-long": "One or more contact fields exceed the allowed length.",
	"email-service": "The email service rejected the contact message.",
	unexpected: "An unexpected error occurred while processing the contact message.",
} as const;

type ContactError = keyof typeof errorMessages;

/**
 * Handles redirection in case of contact form submission errors.
 * @param reason - The reason for the error.
 * @param redirect - The redirect function from the API context.
 * @returns A redirection response to the contact form with an error query parameter.
 */
const errorRedirect = (reason: ContactError, redirect: APIContext["redirect"]) => {
	console.error(`Contact form error: ${errorMessages[reason]}`);
	return redirect(`${BASE_URL}?contact=error&reason=${reason}`, 303);
};

/**
 * Handles the POST request for the contact form submission.
 * @param request - The incoming request object.
 * @param redirect - The redirect function from the API context.
 * @returns A redirection response based on the success or failure of the contact form submission.
 */
export const POST: APIRoute = async ({ request, redirect }) => {
	try {
		const form = await request.formData();

		const name = form.get("name")?.toString().trim() ?? "";
		const email = form.get("_replyto")?.toString().trim() ?? "";
		const subject = form.get("subject")?.toString().trim() ?? "";
		const message = form.get("message")?.toString().trim() ?? "";

		if (!name || !email || !subject || !message) {
			return errorRedirect("missing-fields", redirect);
		}

		if (!validateEmail(email)) {
			return errorRedirect("invalid-email", redirect);
		}

		if (name.length > 100 || subject.length > 150 || message.length > 2000) {
			return errorRedirect("field-too-long", redirect);
		}

		const escapeHtml = (value: string) =>
			value.replace(
				/[&<>'"]/g,
				(character) =>
					({
						"&": "&amp;",
						"<": "&lt;",
						">": "&gt;",
						"'": "&#39;",
						'"': "&quot;",
					})[character] ?? character,
			);

		const { error } = await resend.emails.send({
			from: "Portfolio <onboarding@resend.dev>",
			to: CONTACT_EMAIL,
			replyTo: email,
			subject: `[Portfolio] ${escapeHtml(subject)} - ${escapeHtml(name)}`,
			html: `
				<h2>¡Se ha recibido un mensaje desde el portfolio!</h2>

				<p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
				<p><strong>Email:</strong> ${escapeHtml(email)}</p>
				<p><strong>Asunto:</strong> ${escapeHtml(subject)}</p>

				<hr>

				<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
			`,
		});
		if (error) {
			console.error("Resend contact email error:", error);
			return errorRedirect("email-service", redirect);
		}

		// Redirige nuevamente a la página principal
		return redirect(`${BASE_URL}?contact=success`, 303);
	} catch (error) {
		console.error(error);

		return errorRedirect("unexpected", redirect);
	}
};
