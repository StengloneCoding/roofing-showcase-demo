"use client";

import { useState, useTransition } from "react";

type InquiryFormProps = {
  interestOptions: string[];
  sourcePage: string;
  submitLabel: string;
  title: string;
};

type StatusState = {
  kind: "error" | "idle" | "success";
  message?: string;
};

export function InquiryForm({
  interestOptions,
  sourcePage,
  submitLabel,
  title,
}: InquiryFormProps) {
  const [status, setStatus] = useState<StatusState>({ kind: "idle" });
  const [isPending, startTransition] = useTransition();

  return (
    <section id={sourcePage} className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-[2rem] border border-black/8 bg-white/88 px-6 py-10 shadow-[0_20px_55px_rgba(40,26,18,0.08)] lg:grid-cols-[0.75fr_1.25fr] sm:px-10">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-brand)]">
            Anfrageformular
          </p>
          <h2 className="font-display text-4xl uppercase leading-none tracking-[0.06em] text-[color:var(--color-ink)] sm:text-5xl">
            {title}
          </h2>
          <p className="text-base leading-8 text-[color:var(--color-muted)]">
            Das Formular legt neue Eintraege direkt in der Payload-Collection `inquiries` an.
          </p>
        </div>

        <form
          className="grid gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            const form = event.currentTarget;
            const formData = new FormData(form);

            startTransition(async () => {
              const response = await fetch("/api/inquiries", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  consentAccepted: formData.get("consentAccepted") === "on",
                  email: formData.get("email"),
                  honeypot: formData.get("website"),
                  interest: formData.get("interest"),
                  message: formData.get("message"),
                  name: formData.get("name"),
                  phone: formData.get("phone"),
                  sourcePage,
                }),
              });

              const payload = (await response.json()) as { message?: string; success?: boolean };

              if (!response.ok || !payload.success) {
                setStatus({
                  kind: "error",
                  message: payload.message || "Die Anfrage konnte gerade nicht gespeichert werden.",
                });
                return;
              }

              form.reset();
              setStatus({
                kind: "success",
                message: "Vielen Dank. Ihre Anfrage wurde erfolgreich uebermittelt.",
              });
            });
          }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="name"
              placeholder="Name"
              required
              className="rounded-2xl border border-black/10 bg-[color:var(--color-background-soft)] px-4 py-3 text-sm outline-none transition focus:border-[color:var(--color-brand)]"
            />
            <input
              name="email"
              type="email"
              placeholder="E-Mail"
              required
              className="rounded-2xl border border-black/10 bg-[color:var(--color-background-soft)] px-4 py-3 text-sm outline-none transition focus:border-[color:var(--color-brand)]"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="phone"
              placeholder="Telefon"
              className="rounded-2xl border border-black/10 bg-[color:var(--color-background-soft)] px-4 py-3 text-sm outline-none transition focus:border-[color:var(--color-brand)]"
            />
            <select
              name="interest"
              defaultValue={interestOptions[0]}
              className="rounded-2xl border border-black/10 bg-[color:var(--color-background-soft)] px-4 py-3 text-sm outline-none transition focus:border-[color:var(--color-brand)]"
            >
              {interestOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Worum geht es?"
            rows={6}
            required
            className="rounded-[1.5rem] border border-black/10 bg-[color:var(--color-background-soft)] px-4 py-3 text-sm outline-none transition focus:border-[color:var(--color-brand)]"
          />
          <input name="website" tabIndex={-1} autoComplete="off" className="hidden" />
          <label className="flex items-start gap-3 rounded-2xl bg-[color:var(--color-background-soft)] px-4 py-3 text-sm text-[color:var(--color-muted)]">
            <input
              type="checkbox"
              name="consentAccepted"
              className="mt-1 h-4 w-4 rounded border-black/20 text-[color:var(--color-brand)]"
            />
            <span>
              Ich stimme zu, dass meine Angaben zur Bearbeitung der Anfrage gespeichert werden.
            </span>
          </label>
          <button
            type="submit"
            disabled={isPending}
            className="rounded-full bg-[color:var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-brand-dark)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isPending ? "Wird gesendet..." : submitLabel}
          </button>
          {status.kind !== "idle" ? (
            <p
              className={`text-sm ${
                status.kind === "success"
                  ? "text-[color:var(--color-brand)]"
                  : "text-[#9f2f24]"
              }`}
            >
              {status.message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
