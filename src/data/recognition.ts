import { BASE_URL } from "@/config";
import type { Recognition } from "@/features/experience/types";

// Lista de reconocimientos y certificados obtenidos.
// El campo `image` usa BASE_URL para ser compatible con el path base de GitHub Pages.
export const RECOGNITIONS: Recognition[] = [
	{
		image: `${BASE_URL}titles/Finalista-5min-Pitch-Emilio-Saenz.webp`,
		title: "experience.rec-1.title",
		issuer: "ESPOL",
		date: "2026",
	},
	{
		image: `${BASE_URL}titles/ReconocimientoPracticasComunitarias-Emilio-Saenz.webp`,
		title: "experience.rec-2.title",
		issuer: "ESPOL",
		date: "2025",
	},
];
