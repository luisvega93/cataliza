# Cataliza Capital Webapp

Static-export `Next.js` project for the Cataliza Capital public site, internal playbook, and 10-year financial model, deployed to GitHub Pages.

## What is included

- Bilingual `es` / `en` routing with a persistent language toggle
- Public investor-facing landing page
- Client-side gated internal playbook and financial model routes
- Interactive client-side financial model with base and downside scenarios
- Google Forms-based application flow prepared for static hosting, with a CTA-first experience and lazy inline preview
- Repo-owned GitHub Pages workflow that deploys the static export from `main`
- Remembered locale behavior on `/`, with browser-language fallback to Spanish

## Run

```bash
npm install
npm run dev
```

For the exported Pages build, use:

```bash
npm run build
```

## Structure

- `src/app/(root)` contains the locale chooser on `/`
- `src/app/(site)/[locale]` contains the localized static routes
- `src/content` contains bilingual copy and finance assumptions
- `src/components` contains the UI building blocks
- `src/lib/site-config.ts` contains GitHub Pages base-path config, locale persistence, the client access gate hash, and Google Form/contact URLs

## Notes

- The deployed URL is `https://luisvega93.github.io/cataliza/`
- The internal areas are obscured only in the browser; GitHub Pages cannot provide real server-side protection
- Add the real Google Form `openUrl` and `embedUrl` in `src/lib/site-config.ts` to enable the application flow
- Optionally add `contactUrl` in `src/lib/site-config.ts` if you want a direct inquiry CTA while the form is closed
- The source Word document remains in the workspace as the original content reference
