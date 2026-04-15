import type { Metadata } from "next";
import CollectionPage from "@/views/CollectionPage";

export function generateStaticParams() {
  return [{ category: "padel" }, { category: "accessories" }];
}

export const metadata: Metadata = {
  title: "Shop – IANONI",
};

export default function CategoryPage() {
  return <CollectionPage />;
}
