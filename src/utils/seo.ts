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

export function getCanonicalUrl(pathname: string) {
	return new URL(pathname, SITE_URL).toString();
}

export function getAbsoluteUrl(pathname: string) {
	return new URL(pathname, SITE_URL).toString();
}
