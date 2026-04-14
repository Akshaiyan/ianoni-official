import type { Metadata } from "next";
import Padel101PageComponent from "@/pages/Padel101Page";

export const metadata: Metadata = {
  title: "Padel 101: Complete Guide to Padel Rules, Scoring & Equipment UK",
  description:
    "Learn everything about padel — rules, scoring, court dimensions, serving, wall play, and equipment guide. The complete Padel 101 for UK beginners.",
  alternates: { canonical: "https://www.ianoni.co.uk/guide/padel-101" },
};

export default function Padel101Page() {
  return <Padel101PageComponent />;
}
