"use client";
import { Layout } from "@/components/layout/Layout";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">About</span>
          </nav>

          <h1 className="text-4xl font-bold mb-6">About IANONI</h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              IANONI was founded with a single goal: to make high-performance padel equipment
              accessible to players at every level — without the premium price tag.
            </p>
            <p>
              We believe that a great racket shouldn't cost £150. Our carbon fibre padel
              rackets are engineered with input from over 50 players and deliver performance
              that rivals rackets twice the price — from just £39.99.
            </p>
            <p>
              Every IANONI racket is backed by a 1-year warranty, 30-day returns, and
              free UK-wide shipping. We stand behind what we make.
            </p>
            <p>
              Whether you're picking up a padel racket for the first time or moving up from
              beginner level, IANONI is built for you.
            </p>
          </div>

          <div className="mt-10 flex gap-4">
            <Link
              href="/padel"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Shop Rackets
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
