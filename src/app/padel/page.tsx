import type { Metadata } from "next";
import CollectionPage from "@/pages/CollectionPage";

export const metadata: Metadata = {
  title: "Padel Rackets | Carbon Fibre Rackets from £39.99",
  description:
    "Browse IANONI carbon fibre padel rackets. Lightweight, durable and designed for all skill levels. From £39.99 with free UK-wide shipping.",
  alternates: { canonical: "https://www.ianoni.co.uk/padel" },
};

export default function PadelPage() {
  return <CollectionPage />;
}
