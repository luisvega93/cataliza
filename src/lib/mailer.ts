import nodemailer from "nodemailer";

import type { ApplicationPayload } from "@/lib/validation";

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderHtml(payload: ApplicationPayload) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 720px; margin: 0 auto; color: #161311;">
      <h1 style="font-size: 28px;">Nueva aplicación de Cataliza Capital</h1>
      <p><strong>Nombre:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Ubicación:</strong> ${escapeHtml(payload.location)}</p>
      <p><strong>Proyecto:</strong> ${escapeHtml(payload.projectName)}</p>
      <p><strong>Oficio:</strong> ${escapeHtml(payload.craft)}</p>
      <p><strong>Sitio:</strong> ${escapeHtml(payload.website || "N/A")}</p>
      <h2>Resumen</h2>
      <p>${escapeHtml(payload.summary)}</p>
      <h2>Tracción</h2>
      <p>${escapeHtml(payload.traction)}</p>
      <h2>Economía</h2>
      <p>${escapeHtml(payload.economics)}</p>
      <h2>Misión e impacto</h2>
      <p>${escapeHtml(payload.mission)}</p>
      <h2>Referencias</h2>
      <p>${escapeHtml(payload.references)}</p>
    </div>
  `;
}

function renderText(payload: ApplicationPayload) {
  return [
    "Nueva aplicación de Cataliza Capital",
    "",
    `Nombre: ${payload.name}`,
    `Email: ${payload.email}`,
    `Ubicación: ${payload.location}`,
    `Proyecto: ${payload.projectName}`,
    `Oficio: ${payload.craft}`,
    `Sitio: ${payload.website || "N/A"}`,
    "",
    "Resumen",
    payload.summary,
    "",
    "Tracción",
    payload.traction,
    "",
    "Economía",
    payload.economics,
    "",
    "Misión e impacto",
    payload.mission,
    "",
    "Referencias",
    payload.references,
  ].join("\n");
}

export async function sendApplicationEmail(payload: ApplicationPayload) {
  const transporter = getTransporter();
  const to = process.env.CATALIZA_INBOX_TO;
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER;

  if (!transporter || !to || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info("Cataliza application email simulation", payload);
      return { mode: "simulated" as const };
    }

    throw new Error("SMTP transport is not configured.");
  }

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject: `Cataliza application: ${payload.projectName}`,
    text: renderText(payload),
    html: renderHtml(payload),
  });

  return { mode: "sent" as const };
}
