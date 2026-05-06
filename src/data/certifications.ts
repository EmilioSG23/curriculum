import { BASE_URL } from "@/config";
import type { Certification } from "@/features/skills/types";

// Lista de certificados y cursos obtenidos.
// El campo `image` usa BASE_URL para ser compatible con el path base de GitHub Pages.
export const CERTIFICATIONS: Certification[] = [
	{
		image: `${BASE_URL}certificates/certificate-claude-code.png`,
		title: "Claude Code in Action",
		issuer: "Anthropic Education",
		date: "2026",
		verifyUrl: "https://verify.skilljar.com/c/h7e58t7yjd24",
	},
];
