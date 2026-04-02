"use client";
import { Layout } from "@/components/layout/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About IANONI</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            IANONI was built to make premium padel accessible to everyone. We believe that performance equipment shouldn't come with a premium brand markup — so we set out to create carbon fibre padel rackets that deliver real playability at an honest price.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Based in the UK, we design rackets specifically for the growing British padel community — beginner to intermediate players who want to enjoy the game without overspending.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every IANONI racket comes with free UK-wide shipping, a 1-year warranty, and a 30-day return policy — because we stand behind what we make.
          </p>
        </div>
      </section>
    </Layout>
  );
}
