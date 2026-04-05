# Sitio Personal — Currículum

Este repositorio contiene mi sitio web personal (currículum) construido con Astro y Tailwind CSS. Está pensado para mostrar experiencia, proyectos, habilidades e información de contacto, con soporte i18n (inglés/español).

## Resumen

- **Framework:** Astro
- **Estilos:** Tailwind CSS
- **Archivos de localización:** `public/languages`

## Estructura principal

- `src/pages` — páginas del sitio (p. ej. `index.astro`)
- `src/components` — componentes reutilizables (Header, Footer, secciones)
- `src/features` — módulos de contenido (projects, skills, experience)
- `public` — activos públicos (imágenes, fuentes, archivos de idioma)

## Requisitos

- Node.js 18+ (recomendado)
- npm o pnpm

## Instalación y desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:4321/curriculum` para ver el sitio en modo desarrollo.

## Construcción y vista previa

```bash
npm run build
npm run preview
```

El resultado de producción se genera en `dist/`.

## Edición de contenido

- Traducciones: `public/languages/en.json` y `public/languages/es.json`.
- Proyectos, experiencia y habilidades: editar `src/features/*/data.ts`.
- Componentes visuales: `src/components` y `src/components/sections`.

## Idioma (README)

Este `README.es.md` es la versión en español. The English version is available in `README.md`.

## Redes sociales

- GitHub: https://github.com/EmilioSG23
- GitLab: https://gitlab.com/EmilioSG23
- LinkedIn: https://www.linkedin.com/in/emilio-s%C3%A1enz-g%C3%B3mez-4205b02b9/

## Contribuir

Si quieres sugerir cambios o mejoras, abre un issue o haz un pull request. Si quieres que añada secciones (p. ej. blog, descarga del CV), dímelo y lo añado.

---
