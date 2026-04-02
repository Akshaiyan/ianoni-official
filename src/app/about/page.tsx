import type { Metadata } from "next";
import AboutPageComponent from "@/pages/AboutPage";

export const metadata: Metadata = {
  title: "About IANONI | Our Story & Mission",
  description:
    "IANONI was built to make premium padel accessible to everyone.",
  alternates: { canonical: "https://www.ianoni.co.uk/about" },
};

export default function AboutPage() {
  return <AboutPageComponent />;
}
