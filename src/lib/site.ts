export const SITE = {
  name: "Fortux",
  tagline: "Expertos en reparación, mantenimiento y soluciones para golfistas",
  whatsapp: "34635112656",
  phone: "+34 635 112 656",
  // The van and academia.tsx also list 689 731 369 (Gerard Rubio); 635 112 656
  // is Marc Fortuny's and is the one used for every WhatsApp CTA on the site.
  email: "info@fortux.com",
  circuitUrl: "https://fortux.fairwaystudio.ai/",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
};

export const waLink = (msg = "Hola, me gustaría más información.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
