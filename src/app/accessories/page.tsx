import type { Metadata } from "next";
import CollectionPage from "@/pages/CollectionPage";

export const metadata: Metadata = {
  title: "Padel Starter Kits & Accessories UK | IANONI",
  description:
    "Shop IANONI padel starter kits, balls and accessories. Complete starter kits from £44.99 — racket, balls & bag. Pro padel balls from £6.99. Free UK shipping.",
  alternates: { canonical: "https://www.ianoni.co.uk/accessories" },
  openGraph: {
    title: "Padel Starter Kits & Accessories | IANONI UK",
    description: "Everything you need to start playing padel. Complete starter kits, pro balls, and accessories with free UK shipping.",
    url: "https://www.ianoni.co.uk/accessories",
  },
};

export default function AccessoriesPage() {
  return <CollectionPage />;
}
