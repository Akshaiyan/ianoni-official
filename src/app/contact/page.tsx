import type { Metadata } from "next";
import ContactPageComponent from "@/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact IANONI | Get in Touch",
  description:
    "Have a question about IANONI padel rackets? Get in touch with our team.",
  alternates: { canonical: "https://www.ianoni.co.uk/contact" },
};

export default function ContactPage() {
  return <ContactPageComponent />;
}
