import SeoHead from "@/components/SeoHead";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us | The Career Pathway (CPS) Shimla",
  description:
    "Contact The Career Pathway (CPS) Shimla for HPAS & HAS coaching, study material, job alerts and admission queries.",
  alternates: {
    canonical: "https://www.thecareerspathway.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <SeoHead
        title="Contact Us | CPS Shimla"
        description="Contact CPS Shimla for HPAS/HAS coaching admission, study material, job alerts and student support."
        canonical="https://www.thecareerspathway.com/contact"
      />

      <ContactForm />
    </>
  );
}
