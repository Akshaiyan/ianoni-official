"use client";
import { Layout } from "@/components/layout/Layout";

export default function TermsPage() {
  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl prose prose-gray">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <p className="text-muted-foreground text-sm mb-8">Last updated: April 2025</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            By accessing and using this website, you accept and agree to be bound by these terms and conditions. If you do not agree, please do not use our site.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Products & Pricing</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            All prices are listed in GBP and include VAT where applicable. We reserve the right to change prices at any time without notice. Product descriptions are provided in good faith and we aim to ensure accuracy.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Returns & Refunds</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We offer a 30-day return policy on all unused products in their original condition. To initiate a return, please contact us at{" "}
            <a href="mailto:ianoni@tidytrade.ai" className="text-primary hover:underline">
              ianoni@tidytrade.ai
            </a>
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Warranty</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            All IANONI rackets come with a 1-year manufacturer warranty against defects in materials and workmanship. This does not cover normal wear and tear or damage caused by misuse.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            For any queries regarding these terms, please contact us at{" "}
            <a href="mailto:ianoni@tidytrade.ai" className="text-primary hover:underline">
              ianoni@tidytrade.ai
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
