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
	return function t(
		key: keyof (typeof ui)[typeof defaultLang],
		vars?: Record<string, string | number>
	): string {
		let text = ui[lang][key] || ui[defaultLang][key];

		if (vars) {
			for (const [k, v] of Object.entries(vars)) {
				text = text.replaceAll(`{{${k}}}`, String(v));
			}
		}

		return text;
	};
}

export function useT() {
	if (typeof document !== "undefined") {
		const lang = document.documentElement.lang || defaultLang;
		const t = useTranslations(lang as keyof typeof ui);
		return t;
	}

	const t = useTranslations(defaultLang);
	return t;
}

export function getAge() {
	const timestamp = 1003813200;
	const myBirthday = new Date(timestamp * 1000);

	let age = new Date().getFullYear() - myBirthday.getFullYear();
	age = myBirthday.getMonth() > new Date().getMonth() ? age - 1 : age;

	return age;
}
