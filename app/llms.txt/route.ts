import { SITE_URL, SITE_NAME } from "../../lib/site";
import { CONTACT } from "../../lib/links";

// llms.txt — a proposed (not yet formally standardized) convention that
// gives AI assistants a short, curated map of the site's key pages, so
// they don't have to infer everything by crawling raw HTML. No major AI
// provider has committed to fetching this on a fixed schedule as of 2026,
// so treat this as low-cost hygiene rather than a guaranteed visibility
// lever — the actual page content and structured data still do the heavy
// lifting.
export async function GET() {
  const body = `# ${SITE_NAME}

> A modern boho 1-bedroom staycation at Azure Urban Resort Residences, Parañaque, Philippines. Offers themed room decorations for birthdays, anniversaries, gender reveals, bridal showers, and wedding proposals. Good for up to 4 guests.

Contact: ${CONTACT.email} | ${CONTACT.phone} | ${CONTACT.addressFull}

## Core pages

- [Home](${SITE_URL}/): Overview of the staycation unit, amenities, and booking entry point.
- [Room Decorations](${SITE_URL}/packages): Themed room decoration packages — single area, full room, bridal shower, pregnancy/gender reveal.
- [Proposal Packages](${SITE_URL}/proposals): Signature and Happily Ever After wedding proposal setups, with pricing.
- [Room Inclusions](${SITE_URL}/inclusions): What's included in every stay.
- [Exclusions](${SITE_URL}/exclusions): What is not included (parking, pool access fees).
- [Booking Process](${SITE_URL}/booking-process): How reservations, guest registration, and check-in work.
- [Payment Channels](${SITE_URL}/payment-channels): Accepted payment methods.
- [House Rules](${SITE_URL}/house-rules): Guest rules for the unit.
- [Guest Reviews](${SITE_URL}/reviews): Real guest reviews.
- [Blog](${SITE_URL}/blog): Proposal planning tips and ideas.

## Portfolio galleries (real client photos)

- [Staycation + 1 Area with Decorations](${SITE_URL}/packages/one-area-portfolio)
- [Full Room Decorations / Themed Set Ups](${SITE_URL}/packages/full-room-portfolio)
- [Bridal Shower Set Ups](${SITE_URL}/packages/bridal-shower-portfolio)
- [Pregnancy Announcement & Gender Reveals](${SITE_URL}/packages/pregnancy-gender-portfolio)
- [Signature Proposal Set Up](${SITE_URL}/proposals/signature-proposal-portfolio)
- [Happily Ever After Set Up](${SITE_URL}/proposals/happy-ever-after-portfolio)
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
