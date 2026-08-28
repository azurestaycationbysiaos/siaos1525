"use client";

import { useState } from "react";

// Matches the same key used across the rest of the site (see BookingForm.tsx)
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "ae425060-9d68-442b-a10c-8209a831d280";

type Status = "idle" | "submitting" | "success" | "error";

export default function ProposalInquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Proposal Inquiry — Azure Staycation by Siaos");
    formData.append("from_name", "Azure Staycation by Siaos — Proposal Inquiry Form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

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

  if (status === "success") {
    return (
      <div className="bg-cream-card border border-ink/10 rounded-2xl p-8 text-center">
        <h3 className="font-display text-xl text-ink mb-2">Inquiry sent!</h3>
        <p className="text-ink-soft">
          Thank you for reaching out. We&rsquo;ll get back to you within a
          few hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-cream-card border border-ink/10 rounded-2xl p-5 sm:p-8"
    >
      <h3 className="font-display text-xl text-ink mb-2">Send an inquiry</h3>
      <div>
        <label htmlFor="name" className="text-sm text-ink-soft">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg bg-sand-light border border-ink/20 px-4 py-3 text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-clay-deep"
          placeholder="Juan Dela Cruz"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="text-sm text-ink-soft">
            Contact number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1 w-full rounded-lg bg-sand-light border border-ink/20 px-4 py-3 text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-clay-deep"
            placeholder="09XX XXX XXXX"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-ink-soft">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg bg-sand-light border border-ink/20 px-4 py-3 text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-clay-deep"
            placeholder="you@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="date" className="text-sm text-ink-soft">
          Preferred date
        </label>
        <input
          id="date"
          name="date"
          type="text"
          required
          inputMode="numeric"
          placeholder="mm/dd/yyyy"
          className="mt-1 w-full rounded-lg bg-sand-light border border-ink/20 px-4 py-3 text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-clay-deep"
        />
      </div>
      <div>
        <label htmlFor="package" className="text-sm text-ink-soft">
          Package
        </label>
        <select
          id="package"
          name="package"
          className="mt-1 w-full rounded-lg bg-sand-light border border-ink/20 pl-3 pr-8 py-3 text-sm sm:text-base text-ink focus:outline-none focus:border-clay-deep"
        >
          <option>Signature Proposal Set Up — ₱10,999</option>
          <option>Happily Ever After Set Up — ₱14,999</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm text-ink-soft">
          Personalize your proposal setup
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg bg-sand-light border border-ink/20 px-4 py-3 text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-clay-deep"
          placeholder="How you met, what she loves, anything we should know"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-clay-deep text-sand-light font-semibold px-6 py-3 hover:bg-ink transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send inquiry"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong sending your inquiry. Please message us
          directly on Facebook or call/text us instead.
        </p>
      )}
    </form>
  );
}
