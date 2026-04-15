import type { Metadata } from "next";
import AboutPageComponent from "@/views/AboutPage";

export const metadata: Metadata = {
  title: "About IANONI | Premium Padel Rackets Made Accessible",
  description:
    "IANONI was built to make high-performance carbon fibre padel rackets accessible to every player. Learn about our mission, our products, and why thousands of UK players trust IANONI.",
  alternates: { canonical: "https://www.ianoni.co.uk/about" },
};

export default function AboutPage() {
  return <AboutPageComponent />;
}
