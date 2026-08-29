"use client";

import { useState, type FormEvent } from "react";

const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "ae425060-9d68-442b-a10c-8209a831d280";

type BookingFormProps = {
  heading: string;
  subtext: string;
  showDecorTheme?: boolean;
  requestLabel: string;
  requestPlaceholder: string;
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function BookingForm({
  heading,
  subtext,
  showDecorTheme = false,
  requestLabel,
  requestPlaceholder,
}: BookingFormProps) {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New staycation inquiry");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-cream-card border-y border-ink/10">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl text-ink mb-3">{heading}</h2>
          <p className="text-ink-soft max-w-xl mx-auto">{subtext}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-sand-light border border-ink/10 rounded-2xl p-8"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="bf-name" className="text-sm text-ink-soft">Your name</label>
              <input
                id="bf-name"
                type="text"
                name="name"
                required
                className="mt-1 w-full rounded-lg bg-cream-card border border-ink/20 px-4 py-3 text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-clay-deep"
                placeholder="Juan Dela Cruz"
              />
            </div>
            <div>
              <label htmlFor="bf-phone" className="text-sm text-ink-soft">Contact number</label>
              <input
                id="bf-phone"
                type="tel"
                name="phone"
                required
                className="mt-1 w-full rounded-lg bg-cream-card border border-ink/20 px-4 py-3 text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-clay-deep"
                placeholder="09XX XXX XXXX"
              />
            </div>
          </div>

          <div>
            <label htmlFor="bf-email" className="text-sm text-ink-soft">Email address</label>
            <input
              id="bf-email"
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-lg bg-cream-card border border-ink/20 px-4 py-3 text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-clay-deep"
              placeholder="you@email.com"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="bf-date" className="text-sm text-ink-soft">Preferred date</label>
              <input
                id="bf-date"
                type="text"
                name="preferred_date"
                required
                inputMode="numeric"
                placeholder="mm/dd/yyyy"
                className="mt-1 w-full rounded-lg bg-cream-card border border-ink/20 px-4 py-3 text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-clay-deep"
              />
            </div>
            <div>
              <label htmlFor="bf-guests" className="text-sm text-ink-soft">Number of guests</label>
              <select
                id="bf-guests"
                name="guests"
                className="mt-1 w-full rounded-lg bg-cream-card border border-ink/20 px-4 py-3 text-ink focus:outline-none focus:border-clay-deep"
              >
                <option>1-2 guests</option>
                <option>3 guests</option>
                <option>4 guests</option>
              </select>
            </div>
          </div>

          {showDecorTheme && (
            <div>
              <label htmlFor="bf-decor" className="text-sm text-ink-soft">Decoration theme</label>
              <select
                id="bf-decor"
                name="decoration_theme"
                className="mt-1 w-full rounded-lg bg-cream-card border border-ink/20 px-4 py-3 text-ink focus:outline-none focus:border-clay-deep"
              >
                <option>Staycation + 1 area with decorations</option>
                <option>Full room decorations / themed set up</option>
                <option>Will you be my girlfriend set up</option>
                <option>Bridal shower set up</option>
                <option>Pregnancy announcement / gender reveal</option>
                <option>Not sure yet</option>
              </select>
            </div>
          )}

          <div>
            <label htmlFor="bf-message" className="text-sm text-ink-soft">{requestLabel}</label>
            <textarea
              id="bf-message"
              name="message"
              rows={4}
              className="mt-1 w-full rounded-lg bg-cream-card border border-ink/20 px-4 py-3 text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-clay-deep"
              placeholder={requestPlaceholder}
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-full bg-clay-deep text-sand-light font-semibold px-6 py-3 hover:bg-ink transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending..." : "Send inquiry"}
          </button>

          {status === "success" && (
            <p className="text-sm text-center text-green-700">
              Thanks! Your inquiry has been sent — we&apos;ll get back to you
              shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-center text-red-700">
              Something went wrong sending your inquiry. Please try again or
              message us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
