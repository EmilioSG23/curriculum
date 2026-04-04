export const SITE_URL = "https://emiliosg23.github.io";
export const SITE_BASE_PATH = "/curriculum/";
export const SITE_NAME = "Portafolio de Emilio Saenz";

export const DEFAULT_SEO = {
	title: SITE_NAME,
	description:
		"Portafolio de Emilio Saenz, desarrollador full stack enfocado en aplicaciones web, moviles y de escritorio con experiencia en frontend, backend y despliegue.",
	image: `${SITE_BASE_PATH}perfil.webp`,
	type: "website",
} as const;

export const PERSON_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Emilio Ignacio Saenz Gomez",
	alternateName: "Emilio Saenz",
	jobTitle: "Desarrollador Full Stack",
	url: `${SITE_URL}${SITE_BASE_PATH}`,
	image: `${SITE_URL}${SITE_BASE_PATH}perfil.webp`,
	sameAs: [
		"https://github.com/EmilioSG23",
		"https://gitlab.com/EmilioSG23",
		"https://www.linkedin.com/in/emilio-s%C3%A1enz-g%C3%B3mez-4205b02b9/",
	],
} as const;

export const WEBSITE_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: SITE_NAME,
	url: `${SITE_URL}${SITE_BASE_PATH}`,
	inLanguage: "es",
	description: DEFAULT_SEO.description,
} as const;

export function getCanonicalUrl(pathname: string) {
	return new URL(pathname, SITE_URL).toString();
}

export function getAbsoluteUrl(pathname: string) {
	return new URL(pathname, SITE_URL).toString();
}
