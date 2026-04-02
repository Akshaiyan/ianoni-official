import type { Metadata } from "next";
import CollectionPage from "@/pages/CollectionPage";

export const metadata: Metadata = {
  title: "Padel Starter Kits & Accessories",
  description:
    "Shop IANONI padel starter kits, balls and accessories. Everything you need to start playing padel. From £6.99 with free UK-wide shipping.",
  alternates: { canonical: "https://www.ianoni.co.uk/accessories" },
};

export default function AccessoriesPage() {
  return <CollectionPage />;
}
