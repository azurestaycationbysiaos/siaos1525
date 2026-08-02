type BookingFormProps = {
  heading: string;
  subtext: string;
  showDecorTheme?: boolean;
  requestLabel: string;
  requestPlaceholder: string;
};

export default function BookingForm({
  heading,
  subtext,
  showDecorTheme = false,
  requestLabel,
  requestPlaceholder,
}: BookingFormProps) {
  return (
    <section className="bg-cream-card border-y border-ink/10">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl text-ink mb-3">{heading}</h2>
          <p className="text-ink-soft max-w-xl mx-auto">{subtext}</p>
        </div>

        <form className="space-y-4 bg-sand-light border border-ink/10 rounded-2xl p-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-ink-soft">Your name</label>
              <input
                type="text"
                required
                className="mt-1 w-full rounded-lg bg-cream-card border border-ink/20 px-4 py-3 text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-clay-deep"
                placeholder="Juan Dela Cruz"
              />
            </div>
            <div>
              <label className="text-sm text-ink-soft">Contact number</label>
              <input
                type="tel"
                required
                className="mt-1 w-full rounded-lg bg-cream-card border border-ink/20 px-4 py-3 text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-clay-deep"
                placeholder="09XX XXX XXXX"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-ink-soft">Email address</label>
            <input
              type="email"
              required
              className="mt-1 w-full rounded-lg bg-cream-card border border-ink/20 px-4 py-3 text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-clay-deep"
              placeholder="you@email.com"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-ink-soft">Preferred date</label>
              <input
                type="date"
                required
                className="mt-1 w-full rounded-lg bg-cream-card border border-ink/20 px-4 py-3 text-ink focus:outline-none focus:border-clay-deep"
              />
            </div>
            <div>
              <label className="text-sm text-ink-soft">Number of guests</label>
              <select className="mt-1 w-full rounded-lg bg-cream-card border border-ink/20 px-4 py-3 text-ink focus:outline-none focus:border-clay-deep">
                <option>1-2 guests</option>
                <option>3 guests</option>
                <option>4 guests</option>
              </select>
            </div>
          </div>

          {showDecorTheme && (
            <div>
              <label className="text-sm text-ink-soft">Decoration theme</label>
              <select className="mt-1 w-full rounded-lg bg-cream-card border border-ink/20 px-4 py-3 text-ink focus:outline-none focus:border-clay-deep">
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
            <label className="text-sm text-ink-soft">{requestLabel}</label>
            <textarea
              rows={4}
              className="mt-1 w-full rounded-lg bg-cream-card border border-ink/20 px-4 py-3 text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-clay-deep"
              placeholder={requestPlaceholder}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-clay-deep text-sand-light font-semibold px-6 py-3 hover:bg-ink transition-colors"
          >
            Send inquiry
          </button>
          <p className="text-xs text-ink-soft/60 text-center">
            This form still needs to be connected to an email service before
            it goes live.
          </p>
        </form>
      </div>
    </section>
  );
}
