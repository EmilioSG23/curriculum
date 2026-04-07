/* eslint-disable */
import enContent from "@/languages/en.json";
import esContent from "@/languages/es.json";

// Mapa de idiomas disponibles: clave ISO 639-1 → nombre legible.
export const languages = {
	en: "English",
	es: "Español",
};

// Idioma que se usa como fallback cuando no se detecta uno válido.
export const defaultLang = "es";

// Mapa principal de traducciones; cada clave es un código de idioma
// y su valor es el JSON completo de cadenas para ese idioma.
export const ui = {
	es: esContent,
	en: enContent,
};
