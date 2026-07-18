import { BASE_URL } from "@/config";
import type { Experience } from "@/features/experience/types";

// Lista de experiencias laborales/académicas ordenadas de más reciente a más antigua.
// Los campos `position`, `time` y `description` son claves i18n resueltas en runtime.
export const EXPERIENCE: Experience[] = [
	{
		place: "Escuela Superior Politécnica del Litoral (ESPOL)",
		logo: `${BASE_URL}experiences/espol.webp`,
		position: "experience.exp-5.rol",
		time: "experience.exp-5.time",
		description: "experience.exp-5.description",
	},
	{
		place: "PackVip S.A.S.",
		logo: `${BASE_URL}experiences/packvip.webp`,
		position: "experience.exp-4.rol",
		time: "experience.exp-4.time",
		description: "experience.exp-4.description",
	},
	{
		place: "Solinal",
		logo: `${BASE_URL}experiences/solinal.webp`,
		position: "experience.exp-3.rol",
		time: "experience.exp-3.time",
		description: "experience.exp-3.description",
	},
	{
		place: "Espol (MIDI)",
		logo: `${BASE_URL}experiences/espol.webp`,
		position: "experience.exp-2.rol",
		time: "experience.exp-2.time",
		description: "experience.exp-2.description",
	},
	{
		place: "Riviera",
		position: "experience.exp-1.rol",
		time: "experience.exp-1.time",
		description: "experience.exp-1.description",
		show: false,
	},
];
