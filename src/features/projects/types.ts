/** Representa un proyecto del portafolio con sus metadatos y tecnologías usadas. */
export interface Project {
	/** Identificador único del proyecto; se usa como clave y en rutas de assets. */
	id: string;
	/** Clave i18n con el nombre legible del proyecto. */
	name: string;
	/** URL pública donde se puede ver el proyecto en funcionamiento (opcional). */
	link?: string;
	/** URL de descarga del ejecutable o instalador del proyecto (opcional). */
	download?: string;
	/** URL del repositorio en GitHub. */
	github: string;
	/** Clave i18n con la descripción breve del proyecto. */
	description: string;
	/** Lista de IDs de tecnologías usadas; sirven para resoler los iconos de skills. */
	technologies: string[];
	/** Texto libre que describe herramientas o patrones técnicos destacados del proyecto. */
	uses: string;
}
