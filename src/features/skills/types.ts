/** Representa un elemento individual dentro de una categoría de habilidades. */
export interface SkillValue {
	/** Identificador único que coincide con el nombre del archivo de icono en /public/skills/. */
	id: string;
	/** Nombre legible de la tecnología o herramienta. */
	name: string;
	/** Color de fondo de la tarjeta de skill en formato CSS (hex, nombre, etc.). */
	color: string;
	/** Color del texto sobre el fondo, para garantizar contraste legible. */
	text: string;
	/** Si es false, el skill se oculta en la interfaz (conocimiento secundario). */
	display: boolean;
}

/** Agrupa varias habilidades relacionadas bajo una categoría (ej. "Frontend"). */
export interface Skill {
	/** Identificador único de la categoría. */
	id: string;
	/** Clave i18n del nombre completo de la categoría (se muestra en pantallas grandes). */
	name: string;
	/** Clave i18n del nombre abreviado de la categoría (se muestra en pantallas pequeñas). */
	shortName: string;
	/** Lista de habilidades que pertenecen a esta categoría. */
	values: SkillValue[];
}
