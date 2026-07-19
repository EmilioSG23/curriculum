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
pnpm install
pnpm dev
```

Open `http://localhost:4321/` (or the port shown by Astro) to preview locally.

## Build & Preview (production)

```bash
pnpm build
pnpm preview
```

The project uses the Astro Vercel adapter in server mode because the contact form is exposed as an API route. Vercel detects the build automatically from `package.json` and runs `pnpm build`.

## Vercel deployment

1. Import this repository into Vercel and select the `curriculum` directory as the project root if the repository contains multiple projects.
2. Keep the build command as `pnpm build` and the output setting as the framework default.
3. Add these environment variables in the Vercel project settings for every environment that should send contact messages:
   - `RESEND_API_KEY`: API key from Resend.
   - `CONTACT_EMAIL`: inbox that receives contact messages.
   - `PUBLIC_SITE_URL`: public URL used for canonical SEO URLs, for example `https://emiliosg23.vercel.app`.

The default canonical URL is `https://emiliosg23.vercel.app`. Set `PUBLIC_SITE_URL` to the actual Vercel URL if the project receives a different name or a custom domain. The contact endpoint is available at `/api/send-contact-me` after deployment.

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
