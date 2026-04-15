import type { Metadata } from "next";
import CollectionPage from "@/views/CollectionPage";

export const metadata: Metadata = {
  title: "Buy Carbon Fibre Padel Rackets UK | From £39.99 – IANONI",
  description:
    "Shop IANONI carbon fibre padel rackets from £39.99. 3-layer carbon fibre construction, EVA foam core, 1-year warranty & free UK shipping. Perfect for beginners to intermediate players.",
  alternates: { canonical: "https://www.ianoni.co.uk/padel" },
  openGraph: {
    title: "Carbon Fibre Padel Rackets from £39.99 | IANONI UK",
    description: "Premium carbon fibre padel rackets designed for UK players. Free shipping, 1-year warranty, 30-day returns.",
    url: "https://www.ianoni.co.uk/padel",
  },
};

export default function PadelPage() {
  return <CollectionPage />;
}
