import type { Experience, Recognition } from "@/features/experience/types";

/* eslint-disable */
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

export const RECOGNITIONS: Recognition[] = [
	{
		image: `${BASE_URL}titles/Finalista-5min-Pitch-Emilio-Saenz.webp`,
		titleKey: "experience.rec-1.title",
		issuerKey: "experience.rec-1.issuer",
		dateKey: "experience.rec-1.date",
	},
	{
		image: `${BASE_URL}titles/ReconocimientoPracticasComunitarias-Emilio-Saenz.webp`,
		titleKey: "experience.rec-2.title",
		issuerKey: "experience.rec-2.issuer",
		dateKey: "experience.rec-2.date",
	},
];
