import en from "@/languages/en.json";
import es from "@/languages/es.json";
import type { APIRoute, GetStaticPaths } from "astro";

const languages: Record<string, object> = { es, en };

export const getStaticPaths: GetStaticPaths = () =>
	Object.keys(languages).map((lang) => ({ params: { lang } }));

export const GET: APIRoute = ({ params }) => {
	const data = languages[params.lang as string];
	if (!data) {
		return new Response(JSON.stringify({ error: "Language not found" }), {
			status: 404,
			headers: { "Content-Type": "application/json" },
		});
	}
	return new Response(JSON.stringify(data), {
		status: 200,
		headers: { "Content-Type": "application/json; charset=utf-8" },
	});
};
