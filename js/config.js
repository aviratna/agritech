/*
 * ============================================================
 *  SITE SETTINGS — edit this file to personalise the website.
 * ============================================================
 *  1. Replace CALENDLY_URL with your own Calendly link
 *     (Calendly → Event Types → Copy link).
 *  2. Optionally give each service its own Calendly event type.
 *     If a service link is left empty, the main link is used.
 *  3. Update your name, email, phone and WhatsApp number.
 */
window.SITE_CONFIG = {
  brandName: "AgriVista Consulting",
  consultantName: "Aviprit Vinod Ubarhande",

  // Main Calendly booking link
  CALENDLY_URL: "https://calendly.com/your-calendly-username",

  // Optional: one Calendly event type per service
  serviceLinks: {
    "india":      "",  // e.g. "https://calendly.com/your-username/india-farm-consultation"
    "global":     "",  // e.g. "https://calendly.com/your-username/global-agri-advisory"
    "ecotourism": "",  // e.g. "https://calendly.com/your-username/agro-eco-tourism"
    "medicinal":  "",  // e.g. "https://calendly.com/your-username/medicinal-plants"
    "discovery":  ""   // e.g. "https://calendly.com/your-username/30min"
  },

  email: "hello@example.com",
  phone: "+91 00000 00000",
  whatsapp: "910000000000", // digits only, with country code
  location: "India · Serving clients worldwide"
};
