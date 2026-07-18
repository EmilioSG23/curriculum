// URL base del sitio, inyectada por Astro en tiempo de build.
// Útil para construir rutas absolutas de assets (imágenes, fuentes, etc.).
export const BASE_URL = import.meta.env.BASE_URL ?? "/";
export const FORM_ACCESS_KEY =
	import.meta.env.FORM_ACCESS_KEY ?? "14db6a36-b762-49a2-9e32-ea49bb740ec0";
