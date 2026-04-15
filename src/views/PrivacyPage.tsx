"use client";
import { Layout } from "@/components/layout/Layout";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Privacy Policy</span>
          </nav>

          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: April 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p>
                We collect information you provide when placing an order, contacting us,
                or signing up for our mailing list. This may include your name, email address,
                shipping address, and payment information (processed securely via our payment provider).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>
                We use your information to process orders, communicate about your purchase,
                and improve our service. We do not sell your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Cookies</h2>
              <p>
                We use cookies to improve your browsing experience and analyse site traffic.
                You can control cookie settings through your browser.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Your Rights</h2>
              <p>
                Under UK GDPR, you have the right to access, correct, or delete your personal data.
                To exercise these rights, contact us at{" "}
                <a href="mailto:ianoni@tidytrade.ai" className="text-primary underline">
                  ianoni@tidytrade.ai
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Contact</h2>
              <p>
                For any privacy-related queries, please email{" "}
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
