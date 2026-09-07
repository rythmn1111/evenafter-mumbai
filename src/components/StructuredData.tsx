import { SITE_URL } from "@/app/layout";

/**
 * JSON-LD for Google. The Event schema is what makes the date, venue and name
 * eligible for event rich results; Organization ties the brand name to this
 * domain and its social profiles.
 */
export default function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "EVENAFTER",
        alternateName: ["EVENAFTER MUMBAI", "Evenafter Events"],
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/og.jpg`,
          width: 1200,
          height: 630,
        },
        description:
          "EVENAFTER runs Ethereum-focused conferences and hackathons in Mumbai, India.",
        sameAs: ["https://x.com/ethmumbai", "https://t.me/ethmumbai"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "EVENAFTER MUMBAI",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-IN",
      },
      {
        "@type": "Event",
        "@id": `${SITE_URL}/#event`,
        name: "EVENAFTER MUMBAI 2026",
        alternateName: "EVENAFTER Conference & Mini Hackathon",
        description:
          "An Ethereum-focused conference and mini hackathon in Mumbai. Talks, panels, sponsor activations, mentorship and nonstop hacking across DeFi, Privacy and AI.",
        startDate: "2026-09-08T09:00:00+05:30",
        endDate: "2026-09-09T20:00:00+05:30",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        url: SITE_URL,
        image: [`${SITE_URL}/og.jpg`],
        isAccessibleForFree: false,
        inLanguage: "en-IN",
        organizer: { "@id": `${SITE_URL}/#organization` },
        // Google recommends `offers` on every Event. Registrations are closed,
        // so this advertises the event as sold out rather than inventing a price.
        // `performer` is deliberately omitted: Google expects a Person or
        // PerformingGroup there, which doesn't describe a conference.
        offers: {
          "@type": "Offer",
          url: SITE_URL,
          availability: "https://schema.org/SoldOut",
          validFrom: "2026-01-01T00:00:00+05:30",
          category: "Registration",
        },
        location: {
          "@type": "Place",
          name: "Yashwantrao Chavan Centre",
          address: {
            "@type": "PostalAddress",
            streetAddress: "General Jagannath Bhosle Road, Nariman Point",
            addressLocality: "Mumbai",
            postalCode: "400021",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 18.9273,
            longitude: 72.8236,
          },
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: no user input, and </script> cannot appear
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
