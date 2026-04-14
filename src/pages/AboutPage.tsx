"use client";
import { Layout } from "@/components/layout/Layout";
import Link from "next/link";
import { Shield, Truck, RotateCcw, Star } from "lucide-react";

const guarantees = [
  { icon: Shield, title: "1-Year Warranty", description: "Every IANONI racket is backed by a full 12-month warranty against manufacturing defects." },
  { icon: Truck, title: "Free UK Shipping", description: "Free standard shipping on all orders across the UK. No minimum spend, no hidden costs." },
  { icon: RotateCcw, title: "30-Day Returns", description: "Not happy? Return your racket within 30 days for a full refund — no questions asked." },
  { icon: Star, title: "Carbon Fibre Quality", description: "3-layer carbon fibre construction on every racket. The same material used in rackets costing 2–3× the price." },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IANONI",
  url: "https://www.ianoni.co.uk",
  logo: "https://www.ianoni.co.uk/favicon.png",
  description: "IANONI makes premium carbon fibre padel rackets accessible to every player in the UK. Rackets from £39.99 with free UK shipping, 1-year warranty and 30-day returns.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "ianoni@tidytrade.ai",
    contactType: "customer support",
    areaServed: "GB",
    availableLanguage: "English",
  },
  sameAs: [],
};

export default function AboutPage() {
  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">About</span>
          </nav>

          <h1 className="text-4xl font-bold mb-6">About IANONI</h1>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              IANONI was founded with a single goal: to make high-performance padel equipment accessible to every player — without the £150+ price tag that most brands charge.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10">Why We Built IANONI</h2>
            <p>
              Padel is the fastest-growing racket sport in the UK. But when we looked at the equipment market, we saw the same problem: good padel rackets started at £80–£100, and anything with genuine carbon fibre construction was over £120. For a sport that's supposed to be accessible and social, the entry cost was too high.
            </p>
            <p>
              We spent over a year working with players across the UK — from complete beginners to competitive club players — to develop a carbon fibre racket that delivers the performance of a £100+ racket at a price that makes padel genuinely accessible. The result is the IANONI PR8100: 3-layer carbon fibre construction, EVA foam core, 360g weight, for £39.99.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10">What Makes IANONI Different</h2>
            <p>
              Most budget padel rackets cut corners in two places: the face material (fibreglass instead of carbon fibre) and the core (cheap foam that degrades quickly). IANONI doesn't do either. Every racket in the range uses genuine multi-layer carbon fibre faces and EVA foam cores — the same construction principles used in rackets costing twice the price.
            </p>
            <p>
              We also don't hide behind vague specs. Every IANONI racket listing gives you the exact weight, shape, material, balance point, and core type — because we think you deserve to know what you're buying.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10">Who IANONI Is For</h2>
            <p>
              IANONI rackets are designed for beginners picking up their first racket and intermediate players who want reliable performance without overpaying. If you're playing padel once or twice a week at a UK club, our rackets give you everything you need to improve and compete — at a price that makes it easy to stay in the game.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10">Our Guarantee</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {guarantees.map((g) => (
              <div key={g.title} className="flex gap-4 p-5 rounded-xl border border-border bg-card">
                <g.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">{g.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{g.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/padel"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Shop Padel Rackets
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 rounded-full border border-border font-medium hover:bg-muted transition-colors"
            >
              Read Our Padel Guides
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full border border-border font-medium hover:bg-muted transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
