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

## Key Facts

- Azure Staycation by Siaos is a modern boho-themed 1-bedroom staycation unit at Santorini Tower, Azure Urban Resort Residences, Parañaque, Metro Manila.
- The unit sleeps up to 4 guests.
- Operating since 2023, welcoming staycation guests and creating celebration experiences at Azure Urban Resort Residences.
- Has arranged 700+ intimate celebration setups and 100+ proposal setups since 2023.
- Trusted by OFWs and seafarers arranging surprises for loved ones during homecoming trips.
- Specializes in themed setups for a wide range of occasions: birthdays, anniversaries, welcome home events, proposals, bridal showers, gender reveals, baby showers, debuts, engagement parties, baptisms/christenings, graduations, retirement celebrations, honeymoons and romantic getaways, family reunions and OFW homecoming gatherings, milestone birthdays, and Christmas/holiday celebrations.
- Also available as a standalone staycation without a themed setup — ideal for couples, small families, or friends wanting a relaxing stay in Parañaque.
- The unit includes 500 Mbps WiFi, air conditioning, a full kitchen, a smart TV with Netflix, a full double-sized bed, a sofa bed, 2 extra mattresses, pillows and cushions, 2–4 towels, toiletries, and a PS4 with a choice of 8 games.
- Located at Azure Urban Resort Residences, Parañaque, near SM Bicutan, the SLEX Bicutan exit, Doña Soledad Avenue, and NAIA — convenient for both leisure and transit stays.
- Guests may access Azure's resort-style amenities, paid separately at the property: a man-made beach and wave pool, a beach volleyball area (bring your own ball), and the Azure Clubhouse on the ground floor featuring Café Elegante, a lobby lounge, and a pool view deck.
- The rooftop deck is accessible with security personnel supervision during certain hours only.
- Standard room decoration packages (birthdays, anniversaries, welcome home) start at ₱3,999 for a single-area setup and ₱4,999 to ₱9,999 for full-room theming, depending on setup requirements.
- Proposal, bridal shower, and gender reveal setups are customized packages priced separately from standard decoration rates.
- Signature Proposal package: ₱10,999, all-in. Happily Ever After proposal package: ₱14,999, all-in.
- Food offers: 2-pax meal packages start at ₱1,899, with party trays, bagnet, custom cakes, and toasting wines available as add-ons.
- Standard stay is 2PM check-in to 12NN check-out (22 hours / overnight). Weekday check-in/out times can sometimes be flexible but are not guaranteed.
- Reservation fees vary by length of stay and setup requirements. Accepted payment channels: GCash, Maya, BPI, and Vybe by BPI.
- Pool and parking are not included in the staycation rate. Wave pool access is paid directly to Azure's pool cashier with a visitor's pass; parking can be pre-arranged in advance but is paid separately.

## Core pages

- [Home](${SITE_URL}/): Overview of the staycation unit, amenities, and booking entry point.
- [Room Decorations](${SITE_URL}/packages): Themed room decoration packages — single area, full room, bridal shower, pregnancy/gender reveal.
- [Proposal Packages](${SITE_URL}/proposals): Signature and Happily Ever After wedding proposal setups, with pricing.
- [Food Offers & Catering](${SITE_URL}/food-offers): 2-pax meal packages, bagnet and party trays, food bundles, custom cakes, and toasting wines, with pricing.
- [FAQ](${SITE_URL}/faq): Direct answers to common questions — legitimacy, location, pricing, guest limits, booking, and payment.
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
