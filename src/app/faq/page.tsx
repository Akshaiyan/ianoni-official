import type { Metadata } from "next";
import FAQPageComponent from "@/views/FAQPage";

export const metadata: Metadata = {
  title: "Padel Racket FAQs | Shipping, Warranty & Specs Answered",
  description:
    "Common questions about IANONI padel rackets answered — shipping times, warranty, returns, racket materials, sizing, and which racket is right for you.",
  alternates: { canonical: "https://www.ianoni.co.uk/faq" },
};

export default function FAQPage() {
  return <FAQPageComponent />;
}
