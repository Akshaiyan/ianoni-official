import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

export default function TermsPage() {
  return (
    <Layout>
      <SEO
        title="Terms & Conditions – IANONI"
        description="Read the IANONI terms and conditions for purchases, returns, and use of our website."
      />
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Terms & Conditions</span>
          </nav>

          <h1 className="text-4xl font-bold mb-2">Terms &amp; Conditions</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: April 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Orders</h2>
              <p>
                By placing an order with IANONI, you confirm that you are at least 18 years old
                and that all information provided is accurate. We reserve the right to refuse or
                cancel any order at our discretion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Shipping</h2>
              <p>
                We offer free shipping across the UK. Orders are typically dispatched within
                1–3 business days. Delivery times may vary.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Returns</h2>
              <p>
                We offer a 30-day returns policy. Items must be returned in their original
                condition and packaging. Contact us at{" "}
                <a href="mailto:ianoni@tidytrade.ai" className="text-primary underline">
                  ianoni@tidytrade.ai
                </a>{" "}
                to initiate a return.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Warranty</h2>
              <p>
                All IANONI rackets come with a 1-year warranty against manufacturing defects.
                This does not cover damage from misuse, accidents, or normal wear and tear.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Intellectual Property</h2>
              <p>
                All content on this website, including images, text and branding, is the property
                of IANONI and may not be reproduced without permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Contact</h2>
              <p>
                For any questions, contact us at{" "}
                <a href="mailto:ianoni@tidytrade.ai" className="text-primary underline">
                  ianoni@tidytrade.ai
                </a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
