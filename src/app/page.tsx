import type { Metadata } from "next";
import IndexPage from "@/pages/Index";

export const metadata: Metadata = {
  title: "IANONI | Premium Carbon Fibre Padel Rackets – UK",
  description:
    "Shop IANONI carbon fibre padel rackets from £39.99. Free UK shipping, 1-year warranty & 30-day returns.",
  alternates: { canonical: "https://www.ianoni.co.uk/" },
};

export default function Home() {
  return <IndexPage />;
}
