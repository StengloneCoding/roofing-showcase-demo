"use client";

import { useState, useTransition } from "react";

type InquiryFormProps = {
  id: string;
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
  id,
  interestOptions,
  sourcePage,
  submitLabel,
  title,
}: InquiryFormProps) {
  const [status, setStatus] = useState<StatusState>({ kind: "idle" });
  const [isPending, startTransition] = useTransition();
  const nameId = `${id}-name`;
  const emailId = `${id}-email`;
  const phoneId = `${id}-phone`;
  const interestId = `${id}-interest`;
  const messageId = `${id}-message`;

  return (
    <section id={id} className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-[36px] bg-white px-6 py-10 shadow-[0_20px_55px_rgba(23,23,23,0.08)] lg:grid-cols-[0.75fr_1.25fr] sm:px-10">
        <div className="space-y-5">
          <p className="text-sm font-medium text-[color:var(--color-primary)]">
            Anfrageformular
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--color-foreground)] sm:text-4xl">
            {title}
          </h2>
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
                message: "Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt.",
              });
            });
          }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor={nameId} className="sr-only">
                Name
              </label>
              <input
                id={nameId}
                name="name"
                placeholder="Name"
                required
                className="w-full rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)] px-4 py-3 text-sm outline-none focus:border-[color:var(--color-primary)]"
              />
            </div>
            <div>
              <label htmlFor={emailId} className="sr-only">
                E-Mail
              </label>
              <input
                id={emailId}
                name="email"
                type="email"
                placeholder="E-Mail"
                required
                className="w-full rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)] px-4 py-3 text-sm outline-none focus:border-[color:var(--color-primary)]"
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor={phoneId} className="sr-only">
                Telefon
              </label>
              <input
                id={phoneId}
                name="phone"
                placeholder="Telefon"
                className="w-full rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)] px-4 py-3 text-sm outline-none focus:border-[color:var(--color-primary)]"
              />
            </div>
            <div>
              <label htmlFor={interestId} className="sr-only">
                Anliegen
              </label>
              <select
                id={interestId}
                name="interest"
                defaultValue={interestOptions[0]}
                className="w-full rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)] px-4 py-3 text-sm outline-none focus:border-[color:var(--color-primary)]"
              >
                {interestOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor={messageId} className="sr-only">
              Nachricht
            </label>
            <textarea
              id={messageId}
              name="message"
              placeholder="Worum geht es?"
              rows={6}
              required
              className="w-full rounded-[24px] border border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)] px-4 py-3 text-sm outline-none focus:border-[color:var(--color-primary)]"
            />
          </div>
          <input name="website" tabIndex={-1} autoComplete="off" className="hidden" />
          <label className="flex items-start gap-3 rounded-2xl bg-[color:var(--color-surface-muted)] px-4 py-3 text-sm text-[color:var(--color-muted)]">
            <input
              type="checkbox"
              name="consentAccepted"
              className="mt-1 h-4 w-4 rounded border-black/20 text-[color:var(--color-primary)]"
            />
            <span>
              Ich stimme zu, dass meine Angaben zur Bearbeitung der Anfrage gespeichert werden.
            </span>
          </label>
          <button
            type="submit"
            disabled={isPending}
            className="rounded-full bg-[color:var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-primary-dark)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isPending ? "Wird gesendet..." : submitLabel}
          </button>
          {status.kind !== "idle" ? (
            <p
              className={`text-sm ${status.kind === "success"
                ? "text-[color:var(--color-primary)]"
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
