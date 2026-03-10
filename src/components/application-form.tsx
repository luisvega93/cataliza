"use client";

import { useRef, useState, useTransition } from "react";

import type { FormCopy } from "@/content/public-site";
import type { Locale } from "@/lib/i18n";

type ApplicationFormProps = {
  copy: FormCopy;
  locale: Locale;
};

type SubmitState = "idle" | "success" | "error";

export function ApplicationForm({ copy, locale }: ApplicationFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const startedAtRef = useRef(Date.now());
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("startedAt", String(startedAtRef.current));

    startTransition(() => {
      void (async () => {
        try {
          const response = await fetch("/api/apply", {
            method: "POST",
            body: formData,
          });

        const payload = (await response.json()) as { ok: boolean; message?: string };

        if (!response.ok || !payload.ok) {
          setSubmitState("error");
          setMessage(payload.message ?? copy.error);
          return;
        }

        setSubmitState("success");
        setMessage(copy.success);
        formRef.current?.reset();
        startedAtRef.current = Date.now();
      } catch {
        setSubmitState("error");
        setMessage(copy.error);
      }
      })();
    });
  };

  return (
    <form className="application-form" onSubmit={handleSubmit} ref={formRef}>
      <div className="form-grid">
        <label className="field">
          <span>{copy.fields.name}</span>
          <input name="name" required type="text" autoComplete="name" />
        </label>
        <label className="field">
          <span>{copy.fields.email}</span>
          <input name="email" required type="email" autoComplete="email" />
        </label>
        <label className="field">
          <span>{copy.fields.location}</span>
          <input name="location" required type="text" autoComplete="address-level2" />
        </label>
        <label className="field">
          <span>{copy.fields.projectName}</span>
          <input name="projectName" required type="text" />
        </label>
        <label className="field">
          <span>{copy.fields.craft}</span>
          <input name="craft" required type="text" />
        </label>
        <label className="field">
          <span>{copy.fields.website}</span>
          <input name="website" type="url" placeholder={locale === "es" ? "https://..." : "https://..."} />
        </label>
      </div>

      <label className="field">
        <span>{copy.fields.summary}</span>
        <textarea name="summary" required rows={5} />
      </label>

      <div className="form-grid">
        <label className="field">
          <span>{copy.fields.traction}</span>
          <textarea name="traction" required rows={4} />
        </label>
        <label className="field">
          <span>{copy.fields.economics}</span>
          <textarea name="economics" required rows={4} />
        </label>
      </div>

      <div className="form-grid">
        <label className="field">
          <span>{copy.fields.mission}</span>
          <textarea name="mission" required rows={4} />
        </label>
        <label className="field">
          <span>{copy.fields.references}</span>
          <textarea name="references" required rows={4} />
        </label>
      </div>

      <label className="field hp-field" aria-hidden="true">
        <span>{copy.honeypot}</span>
        <input name="trap" tabIndex={-1} type="text" autoComplete="off" />
      </label>

      <button className="cta-button primary" type="submit" disabled={isPending}>
        {isPending ? (locale === "es" ? "Enviando..." : "Sending...") : copy.submit}
      </button>

      {submitState !== "idle" ? (
        <p className={`form-message ${submitState}`} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
