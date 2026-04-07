import type { Experience, Recognition } from "@/features/experience/types";

/* eslint-disable */

// Lista de experiencias laborales/académicas ordenadas de más reciente a más antigua.
// Los campos `position`, `time` y `description` son claves i18n resueltas en runtime.
export const EXPERIENCE: Experience[] = [
	{
		place: "PackVip S.A.S.",
		position: "experience.exp-4.rol",
		time: "experience.exp-4.time",
		description: "experience.exp-4.description",
	},
	{
		place: "Solinal",
		position: "experience.exp-3.rol",
		time: "experience.exp-3.time",
		description: "experience.exp-3.description",
	},
	{
		place: "Espol (MIDI)",
		position: "experience.exp-2.rol",
		time: "experience.exp-2.time",
		description: "experience.exp-2.description",
	},
	{
		place: "Riviera",
		position: "experience.exp-1.rol",
		time: "experience.exp-1.time",
		description: "experience.exp-1.description",
	},
];

import { BASE_URL } from "@/config";

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
