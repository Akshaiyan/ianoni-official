import type { Metadata } from "next";
import Padel101PageComponent from "@/pages/Padel101Page";

export const metadata: Metadata = {
  title: "Padel 101: Complete Beginner's Guide to Padel",
  description:
    "Learn the basics of padel — rules, scoring, court dimensions, equipment and tips for beginners.",
  alternates: { canonical: "https://www.ianoni.co.uk/guide/padel-101" },
};

export default function Padel101Page() {
  return <Padel101PageComponent />;
}
