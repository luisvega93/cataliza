# Cataliza Capital Webapp

Next.js App Router project for the Cataliza Capital public site, internal playbook, and 10-year financial model.

## What is included

- Bilingual `es` / `en` routing with a persistent language toggle
- Public investor-facing landing page
- Protected internal playbook and financial model routes
- Shared-password gate with cookie-based access
- Native application form with validation, honeypot spam protection, and SMTP email delivery
- Interactive client-side financial model with base and downside scenarios

## Environment

Copy `.env.example` to `.env.local` and configure:

- `CATALIZA_SHARED_PASSWORD`
- `CATALIZA_INBOX_TO`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`

In local non-production mode, if SMTP is missing the application form will simulate delivery and log the payload to the server console.

## Run

```bash
npm install
npm run dev
```

## Structure

- `src/app/[locale]` contains the main routes
- `src/content` contains bilingual copy and finance assumptions
- `src/components` contains the UI building blocks
- `src/lib` contains auth, validation, mail, and finance calculation logic

## Notes

- The source Word document remains in the workspace as the original content reference.
- The financial model uses local client state in v1; there is no persistence layer.
