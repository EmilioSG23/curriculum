# Personal Website — Curriculum

This repository contains my personal website (curriculum) built with Astro and Tailwind CSS. It is designed to showcase experience, projects, skills and contact information, with built-in i18n support (English/Spanish).

## Highlights

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Localization data:** `public/languages`

## Key structure

- `src/pages` — site pages (e.g. `index.astro`)
- `src/components` — reusable components (Header, Footer, sections)
- `src/features` — content modules (projects, skills, experience)
- `public` — public assets (images, fonts, language files)

## Requirements

- Node.js 18+ (recommended)
- npm or pnpm

## Install & Run (development)

```bash
npm install
npm run dev
```

Open `http://localhost:4321/curriculum` (or the port shown by Astro) to preview locally.

## Build & Preview (production)

```bash
npm run build
npm run preview
```

Production output is generated in `dist/` and can be deployed to Vercel, Netlify or any static host.

## Content editing

- Translations: `public/languages/en.json` and `public/languages/es.json`.
- Projects, experience and skills: edit `src/features/*/data.ts`.
- Visual components: `src/components` and `src/components/sections`.

## Language (README)

This `README.md` is the English version. A Spanish version is available in `README.es.md`.

## Socials

- GitHub: https://github.com/EmilioSG23
- GitLab: https://gitlab.com/EmilioSG23
- LinkedIn: https://www.linkedin.com/in/emilio-s%C3%A1enz-g%C3%B3mez-4205b02b9/

## Contributing

If you want to suggest changes or improvements, open an issue or send a pull request. If you'd like me to add sections (e.g., blog, CV download), tell me and I'll add them.

---
