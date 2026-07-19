// URL base del sitio, inyectada por Astro en tiempo de build.
// Útil para construir rutas absolutas de assets (imágenes, fuentes, etc.).
export const BASE_URL = import.meta.env.BASE_URL ?? "/";
export const RESEND_API_KEY = import.meta.env.RESEND_API_KEY ?? "";
export const CONTACT_EMAIL = import.meta.env.CONTACT_EMAIL ?? "emiliosaenz2001@gmail.com";
