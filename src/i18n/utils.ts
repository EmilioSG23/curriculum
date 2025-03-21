import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
	const [lang] = url.pathname.split("/");
	if (lang in ui) return lang as keyof typeof ui;
	return defaultLang;
}

export function getLangFromDocument(): keyof typeof ui {
	const lang = document.documentElement.lang;
	if (lang in ui) return lang as keyof typeof ui;
	return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] || ui[defaultLang][key];
	};
}

export function useT() {
	if (typeof document !== "undefined") {
		const lang = document.documentElement.lang || defaultLang;
		const t = useTranslations(lang);
		return t;
	} else {
		// Si estamos en el servidor (Astro SSR), usa el idioma por defecto
		const t = useTranslations(defaultLang);
		return t;
	}
}
