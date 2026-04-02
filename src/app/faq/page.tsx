import type { Metadata } from "next";
import FAQPageComponent from "@/pages/FAQPage";

export const metadata: Metadata = {
  title: "Padel Racket FAQs | Common Questions Answered",
  description:
    "Got questions about IANONI padel rackets? Find answers about racket specs, shipping, warranty and more.",
  alternates: { canonical: "https://www.ianoni.co.uk/faq" },
};

export default function FAQPage() {
  return <FAQPageComponent />;
}
