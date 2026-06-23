"use client";
import { Layout } from "@/components/layout/Layout";
import Link from "next/link";

export default function ReturnsPage() {
  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Returns Policy</span>
          </nav>

          <h1 className="text-4xl font-bold mb-2">Returns Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: June 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Our Returns Policy</h2>
              <p>
                We want you to be completely satisfied with your IANONI purchase. If something
                isn't right, we're here to help. Please read our policy carefully before
                requesting a return.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">30-Day Return Window</h2>
              <p>
                You have <strong className="text-foreground">30 days</strong> from the date of
                delivery to request a return. Returns are accepted under the following
                conditions only:
              </p>
              <ul className="mt-4 space-y-3 list-disc list-inside">
                <li>
                  <strong className="text-foreground">Unopened &amp; unused</strong> — the item
                  is in its original, undamaged packaging and has not been used.
                </li>
                <li>
                  <strong className="text-foreground">Faulty or defective</strong> — the item
                  arrived damaged or developed a manufacturing defect within the return window.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Non-Returnable Items</h2>
              <p>
                We are unable to accept returns for items that have been opened, assembled,
                or used — unless they are faulty. This applies even if the item is returned
                in its original box.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">How to Request a Return</h2>
              <p>
                To start a return, email us at{" "}
                <a href="mailto:ianoni@tidytrade.ai" className="text-primary underline">
                  ianoni@tidytrade.ai
                </a>{" "}
                with your order number and the reason for your return. We will respond
                within 2 business days with instructions.
              </p>
              <p className="mt-3">
                Please do not send items back without first contacting us — returns sent
                without prior authorisation may not be processed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Refunds</h2>
              <p>
                Once we receive and inspect your return, we will notify you of the outcome.
                Approved refunds are issued to your original payment method within
                5–10 business days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Return Shipping</h2>
              <p>
                For faulty or incorrect items, we will cover the cost of return shipping.
                For change-of-mind returns (unopened items), return postage costs are the
                responsibility of the customer.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Questions?</h2>
              <p>
                If you have any questions about your return, please contact us at{" "}
                <a href="mailto:ianoni@tidytrade.ai" className="text-primary underline">
                  ianoni@tidytrade.ai
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
