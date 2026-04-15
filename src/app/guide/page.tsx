import type { Metadata } from "next";
import GuidePageComponent from "@/views/GuidePage";

export const metadata: Metadata = {
  title: "Padel Beginner's Guide UK | How to Start Playing & Choose a Racket",
  description:
    "New to padel in the UK? Our complete beginner's guide covers how to choose the right padel racket, court rules, scoring, and tips to improve fast. Everything in one place.",
  alternates: { canonical: "https://www.ianoni.co.uk/guide" },
};

export default function GuidePage() {
  return <GuidePageComponent />;
}
