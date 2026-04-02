import type { Metadata } from "next";
import GuidePageComponent from "@/pages/GuidePage";

export const metadata: Metadata = {
  title: "Padel Beginner's Guide | How to Choose a Padel Racket",
  description:
    "New to padel? Our beginner's guide covers how to choose the right racket, court rules, and tips to improve fast.",
  alternates: { canonical: "https://www.ianoni.co.uk/guide" },
};

export default function GuidePage() {
  return <GuidePageComponent />;
}
