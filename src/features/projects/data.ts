import type { Project } from "@/features/projects/types";

/*eslint-disable */

// Lista de proyectos del portafolio ordenados de más a menos reciente.
// Los campos `name` y `description` son claves i18n resueltas en runtime.
// El campo `technologies` contiene IDs que coinciden con los de SKILLS (para mostrar iconos).
export const PROJECTS: Project[] = [
	{
		id: "laberinto_encantado",
		name: "projects.project-laberinto_encantado.name",
		link: "https://emiliosg23.github.io/laberinto_encantado",
		github: "https://github.com/EmilioSG23/laberinto_encantado",
		description: "projects.project-laberinto_encantado.description",
		technologies: ["c_sharp", "unity", "socketio", "typescript", "render"],
		uses: "Unity Engine, SocketIO, WebGL",
	},
	{
		id: "minecraft-api",
		name: "projects.project-minecraft-api.name",
		link: "https://minecraft-api-dusky.vercel.app/",
		github: "https://github.com/EmilioSG23/MinecraftAPI",
		description: "projects.project-minecraft-api.description",
		technologies: ["nextjs", "react", "tailwind", "typescript", "vercel"],
		uses: "React, Express",
	},
	{
		id: "dashboard",
		name: "projects.project-dashboard.name",
		link: "https://emiliosg23.github.io/dashboard/",
		github: "https://github.com/EmilioSG23/dashboard",
		description: "projects.project-dashboard.description",
		technologies: ["javascript", "html", "css"],
		uses: "Uso de CORS para extracción de información de manera didáctica, JavaScript para la funcionalidad interna del sitio web, HTML para la estructuración, CSS junto a Bootstrap para la estilización de la página web",
	},
	{
		id: "landing",
		name: "projects.project-landing.name",
		link: "https://emiliosg23.github.io/landing/",
		github: "https://github.com/EmilioSG23/landing",
		description: "projects.project-landing.description",
		technologies: ["html", "css"],
		uses: "Uso de HTML para la estructuración de la página, CSS para el estilo",
	},
	{
		id: "fileviewer",
		name: "projects.project-fileviewer.name",
		download: "https://mega.nz/file/f0gRWTJD#rffDZopXxuu_LIRHAd_jEzNoMTEV1XPgBNAQhFGP8ZI",
		github: "https://github.com/EmilioSG23/FileViewer",
		description: "projects.project-fileviewer.description",
		technologies: ["java", "javafx", "scene-builder"],
		uses: "JavaFX, Archivos serializados",
	},
	{
		id: "catalogo",
		name: "projects.project-catalogo.name",
		github: "https://github.com/PaulaPeraltaA/Proyecto-P1-Estructuras-G6",
		description: "projects.project-catalogo.description",
		technologies: ["java", "javafx", "scene-builder"],
		uses: "Estructura de Datos (listas enlazadas), JavaFX, Archivos serializados",
	},
];
