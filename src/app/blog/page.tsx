import type { Metadata } from "next";
import BlogPageComponent from "@/views/BlogPage";

export const metadata: Metadata = {
  title: "Padel Blog UK | Guides, Racket Reviews & Tips (2026)",
  description:
    "Expert padel guides for UK players — racket buying advice, rules explained, tactics, and tips to improve your game. Updated for 2026.",
  alternates: { canonical: "https://www.ianoni.co.uk/blog" },
  openGraph: {
    title: "Padel Blog UK | Guides, Reviews & Tips",
    description: "Expert padel guides, racket buying advice and tactics for UK club players.",
    url: "https://www.ianoni.co.uk/blog",
  },
};

export default function BlogPage() {
  return <BlogPageComponent />;
}
