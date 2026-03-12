"use client";

import { useState, useTransition } from "react";

import { grantAccess, validateSharedPassword } from "@/lib/auth";
import type { Locale } from "@/lib/i18n";

type AccessFormProps = {
  locale: Locale;
  onSuccess: () => void;
};

type MessageState = {
  tone: "idle" | "error" | "success";
  text: string;
};

export function AccessForm({ locale, onSuccess }: AccessFormProps) {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<MessageState>({ tone: "idle", text: "" });
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    startTransition(() => {
      void (async () => {
        try {
          const isValid = await validateSharedPassword(password);

          if (!isValid) {
            setMessage({
              tone: "error",
              text:
                locale === "es"
                  ? "Contrase\u00f1a inv\u00e1lida. Intenta de nuevo."
                  : "Invalid password. Please try again.",
            });
            return;
          }

          grantAccess();
          setPassword("");
          setMessage({
            tone: "success",
            text:
              locale === "es"
                ? "Acceso desbloqueado para esta sesi\u00f3n."
                : "Access unlocked for this session.",
          });
          onSuccess();
        } catch {
          setMessage({
            tone: "error",
            text:
              locale === "es"
                ? "No pudimos validar el acceso en este momento."
                : "We could not validate access right now.",
          });
        }
      })();
    });
  };

  return (
    <form className="access-form" onSubmit={handleSubmit}>
      <label className="field">
        <span>{locale === "es" ? "Contrase\u00f1a compartida" : "Shared password"}</span>
        <input
          aria-describedby="access-status"
          autoComplete="current-password"
          name="password"
          onChange={(event) => {
            setPassword(event.target.value);
            setMessage({ tone: "idle", text: "" });
          }}
          required
          type="password"
          value={password}
        />
      </label>
      <button className="cta-button primary" disabled={isPending} type="submit">
        {isPending ? (locale === "es" ? "Validando..." : "Checking...") : locale === "es" ? "Desbloquear" : "Unlock"}
      </button>
      <p
        aria-live="polite"
        className={`form-message${message.text ? ` ${message.tone}` : ""}`}
        id="access-status"
        role="status"
      >
        {message.text || "\u00A0"}
      </p>
    </form>
  );
}
