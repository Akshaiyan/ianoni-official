import type { Metadata } from "next";
import BlogPageComponent from "@/pages/BlogPage";

export const metadata: Metadata = {
  title: "Padel Blog | Guides, Tips & Buying Advice",
  description:
    "Expert padel guides, racket buying advice, and tips to help you improve your game.",
  alternates: { canonical: "https://www.ianoni.co.uk/blog" },
};

export default function BlogPage() {
  return <BlogPageComponent />;
}
