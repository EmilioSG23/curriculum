/** Representa una entrada de experiencia laboral o académica en el timeline. */
export interface Experience {
	/** Nombre de la empresa u organización. */
	place: string;
	/** Clave i18n que resuelve el cargo o rol desempeñado. */
	position: string;
	/** Clave i18n que resuelve el periodo de tiempo (ej. "2022 - 2023"). */
	time: string;
	/** Clave i18n que resuelve la descripción de las tareas realizadas. */
	description: string;
}

/** Representa un reconocimiento, certificado o título obtenido. */
export interface Recognition {
	/** Ruta relativa a la imagen del reconocimiento (webp recomendado). */
	image: string;
	/** Clave i18n del nombre del reconocimiento. */
	title: string;
	/** Emisor/institución que lo otorgó. */
	issuer: string;
	/** Fecha de obtención. */
	date: string;
}
