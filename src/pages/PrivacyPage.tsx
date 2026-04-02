"use client";
import { Layout } from "@/components/layout/Layout";

export default function PrivacyPage() {
  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl prose prose-gray">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-8">Last updated: April 2025</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We collect information you provide directly, such as your name and email address when you contact us or subscribe to our newsletter. When you make a purchase, your payment and order details are processed by Shopify and we only receive order confirmation data.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We use the information we collect to fulfil orders, respond to enquiries, and improve our services. We do not sell your personal data to third parties.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cookies</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We use essential cookies to maintain your cart session and analytics cookies to understand how visitors use our site. You can disable cookies in your browser settings.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            For any privacy-related enquiries, please contact us at{" "}
            <a href="mailto:ianoni@tidytrade.ai" className="text-primary hover:underline">
              ianoni@tidytrade.ai
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
