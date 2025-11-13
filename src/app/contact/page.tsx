import SeoHead from "@/components/SeoHead";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact CPS Shimla | HPAS HAS Coaching Admissions & Support | The Career Pathway",
  description: "Get in touch with The Career Pathway (CPS) Shimla for HPAS, HAS coaching admissions, study material, job alerts, and student support. Visit our center or contact online.",
  keywords: "contact CPS Shimla, HPAS coaching contact, HAS admission, CPS Shimla address, career pathway contact, government exam coaching",
  alternates: {
    canonical: "https://www.thecareerspathway.com/contact",
  },
  openGraph: {
    title: "Contact CPS Shimla | HPAS HAS Coaching Admissions & Support",
    description: "Get in touch with The Career Pathway (CPS) Shimla for HPAS, HAS coaching admissions, study material, and student support.",
    url: "https://www.thecareerspathway.com/contact",
    siteName: "The Career Pathway",
    images: [
      {
        url: '/contact-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact The Career Pathway - HPAS HAS Coaching Shimla',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <SeoHead
        title="Contact CPS Shimla | HPAS HAS Coaching Admissions & Support | The Career Pathway"
        description="Get in touch with The Career Pathway (CPS) Shimla for HPAS, HAS coaching admissions, study material, job alerts, and student support. Visit our center or contact online."
        canonical="https://www.thecareerspathway.com/contact"
        // REMOVED: keywords prop since SeoHead component doesn't accept it
      />

      <ContactForm />
    </>
  );
}
