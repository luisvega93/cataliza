# Cataliza Capital Webapp

Static-export `Next.js` project for the Cataliza Capital public site, internal playbook, and 10-year financial model, deployed to GitHub Pages.

## What is included

- Bilingual `es` / `en` routing with a persistent language toggle
- Public investor-facing landing page
- Client-side gated internal playbook and financial model routes
- Interactive client-side financial model with base and downside scenarios
- Google Forms-based application flow prepared for static hosting
- Repo-owned GitHub Pages workflow that deploys the static export from `main`

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

- `src/app/[locale]` contains the main routes
- `src/content` contains bilingual copy and finance assumptions
- `src/components` contains the UI building blocks
- `src/lib/site-config.ts` contains GitHub Pages base-path config, the client access gate hash, and Google Form URLs

## Notes

- The deployed URL is `https://luisvega93.github.io/cataliza/`
- The internal areas are obscured only in the browser; GitHub Pages cannot provide real server-side protection
- Add the real Google Form `openUrl` and `embedUrl` in `src/lib/site-config.ts` before the public application flow is fully live
- The source Word document remains in the workspace as the original content reference
