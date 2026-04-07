import { defaultLang, ui } from "@/i18n/ui";

/**
 * Extrae el idioma activo a partir de la URL de la petición actual (SSR/SSG).
 * Toma el primer segmento del pathname y lo valida contra los idiomas disponibles.
 * Si no coincide con ninguno, devuelve el idioma por defecto.
 */
export function getLangFromUrl(url: URL) {
	const [lang] = url.pathname.split("/");
	if (lang in ui) return lang as keyof typeof ui;
	return defaultLang;
}

/**
 * Extrae el idioma activo leyendo el atributo `lang` del elemento `<html>`.
 * Pensado para usarse en el lado cliente (browser), donde `document` está disponible.
 */
export function getLangFromDocument(): keyof typeof ui {
	const lang = document.documentElement.lang;
	if (lang in ui) return lang as keyof typeof ui;
	return defaultLang;
}

/**
 * Devuelve una función traductora `t` para el idioma indicado.
 * La función `t` acepta una clave de traducción y un mapa opcional de
 * variables que se interpolan en el texto con la sintaxis `{{variable}}`.
 * Si la clave no existe en el idioma solicitado, hace fallback al idioma por defecto.
 */
export function useTranslations(lang: keyof typeof ui) {
	return function t(
		key: keyof (typeof ui)[typeof defaultLang],
		vars?: Record<string, string | number>,
	): string {
		let text = ui[lang][key] || ui[defaultLang][key];

		// Reemplaza cada placeholder {{key}} por su valor correspondiente.
		if (vars) {
			for (const [k, v] of Object.entries(vars)) {
				text = text.replaceAll(`{{${k}}}`, String(v));
			}
		}

		return text;
	};
}

/**
 * Atajo que devuelve directamente la función `t` para el idioma activo.
 * En el servidor usa el idioma por defecto; en el cliente lee `document.documentElement.lang`.
 */
export function useT() {
	if (typeof document !== "undefined") {
		// Entorno cliente: obtiene el idioma actual del atributo lang del HTML.
		const lang = document.documentElement.lang || defaultLang;
		const t = useTranslations(lang as keyof typeof ui);
		return t;
	}

	// Entorno servidor (SSG): fallback al idioma por defecto.
	const t = useTranslations(defaultLang);
	return t;
}

/**
 * Calcula la edad actual a partir del timestamp Unix del cumpleaños.
 * Resta un año cuando el cumpleaños del año en curso aún no ha pasado.
 */
export function getAge() {
	// Timestamp Unix (segundos) correspondiente a la fecha de nacimiento.
	const timestamp = 1003813200;
	const birthday = new Date(timestamp * 1000);
	const today = new Date();

	let age = today.getFullYear() - birthday.getFullYear();

	// Verifica si el cumpleaños ya ocurrió este año.
	const hasBirthdayPassed =
		today.getMonth() > birthday.getMonth() ||
		(today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());

	// Si el cumpleaños es posterior a hoy, todavía no se ha cumplido ese año.
	if (!hasBirthdayPassed) age--;

	return age;
}
