import { BASE_URL } from "@/config";
import type { Certification } from "@/features/skills/types";

// Lista de certificados y cursos obtenidos.
// El campo `image` usa BASE_URL para ser compatible con el path base de GitHub Pages.
export const CERTIFICATIONS: Certification[] = [
	{
		image: `${BASE_URL}certificates/certificate-claude-code.webp`,
		title: "Claude Code in Action",
		issuer: "Anthropic Education",
		date: "2026",
		verifyUrl: "https://verify.skilljar.com/c/h7e58t7yjd24",
	},
	{
		image: `${BASE_URL}certificates/certificate-claude-skills.webp`,
		title: "Introduction to Agent Skills",
		issuer: "Anthropic Education",
		date: "2026",
		verifyUrl: "https://verify.skilljar.com/c/zretkmbx9cxp",
	},
	{
		image: `${BASE_URL}certificates/certificate-claude-subagents.webp`,
		title: "Introduction to Subagents",
		issuer: "Anthropic Education",
		date: "2026",
		verifyUrl: "https://verify.skilljar.com/c/9ovhw4e4ajf2",
	},
	{
		image: `${BASE_URL}certificates/certificate-claude-mcp.webp`,
		title: "Introduction to Model Context Protocol",
		issuer: "Anthropic Education",
		date: "2026",
		verifyUrl: "https://verify.skilljar.com/c/75vsu4n7fcif",
	},
	{
		image: `${BASE_URL}certificates/certificate-software-arquitecture.webp`,
		title: "Mordern Software Architecture: DDD, Events, Microservices and more",
		issuer: "Udemy (Instructor: Daniel Blanco Calviño)",
		date: "2026",
		verifyUrl: "https://www.udemy.com/certificate/UC-df097b35-32d6-46d7-b265-e3ca4afe3c1d/",
	},
];
