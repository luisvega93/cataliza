"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { grantAccess, validateSharedPassword } from "@/lib/auth";
import type { Locale } from "@/lib/i18n";

type AccessFormProps = {
  locale: Locale;
  nextPath: string;
};

export function AccessForm({ locale, nextPath }: AccessFormProps) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    startTransition(() => {
      void (async () => {
        try {
          const isValid = await validateSharedPassword(password);

          if (!isValid) {
            setMessage(locale === "es" ? "Contrasena invalida." : "Invalid password.");
            return;
          }

          grantAccess();
          setMessage("");
          router.replace(nextPath);
          router.refresh();
        } catch {
          setMessage(locale === "es" ? "No pudimos validar el acceso." : "We could not validate access.");
        }
      })();
    });
  };

  return (
    <form className="access-form" onSubmit={handleSubmit}>
      <label className="field">
        <span>{locale === "es" ? "Contrasena compartida" : "Shared password"}</span>
        <input
          autoComplete="current-password"
          name="password"
          onChange={(event) => {
            setPassword(event.target.value);
            setMessage("");
          }}
          required
          type="password"
          value={password}
        />
      </label>
      <button className="cta-button primary" type="submit" disabled={isPending}>
        {isPending ? (locale === "es" ? "Validando..." : "Checking...") : locale === "es" ? "Entrar" : "Enter"}
      </button>
      {message ? (
        <p className="form-message error" role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
