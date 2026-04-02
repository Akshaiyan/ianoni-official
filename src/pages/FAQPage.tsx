"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "Is this a good padel racket for beginners?",
    a: "Yes. The Ianoni racket is widely praised for being beginner-friendly while still offering performance that supports progression. Its forgiving sweet spot and balanced feel help reduce mishits, making it ideal for players new to padel. If you're searching for the best padel racket for beginners under £50, this model delivers strong performance without the premium price tag.",
  },
  {
    q: "Is it suitable for intermediate players?",
    a: "Absolutely. While it's positioned as accessible for beginners, many improving players choose Ianoni as a step-up racket that offers better control and power than entry-level models. It's particularly suited to club and social players who want reliable performance without spending £100–£200 on premium brands.",
  },
  {
    q: "How heavy is the Ianoni racket?",
    a: "The racket sits in a lightweight, manoeuvrable range, making it easy to handle at the net while still feeling stable on volleys and smashes. Players frequently describe it as light but solid, which makes it comfortable for longer matches and less fatiguing for newer players.",
  },
  {
    q: "Does it generate good power?",
    a: "Yes — especially for its price category. Many players highlight how easy it is to generate power on overhead shots and smashes. The balanced design allows players to produce pace without excessive effort, making it ideal for those developing their attacking game. For a racket around £40, the power-to-price ratio is one of its strongest advantages.",
  },
  {
    q: "Does it offer good control?",
    a: "Yes. The racket's balance and surface design help provide reliable control at the net and during defensive play. It's particularly well suited to players who want a balanced combination of power and control rather than an extreme of either.",
  },
  {
    q: "Does it have a large sweet spot?",
    a: "Yes. One of the most frequently mentioned benefits is the forgiving sweet spot. This makes it easier to return shots cleanly and reduces mishits — a major advantage for beginners and improving players.",
  },
  {
    q: "Is it durable?",
    a: "The Ianoni racket is designed for recreational and club-level durability. Customer feedback consistently notes strong build quality relative to its price range. For regular social and league play, it offers reliable performance and structural integrity without the premium price tag.",
  },
  {
    q: "Is this racket good value compared to premium brands?",
    a: "This is where Ianoni stands out. Many players describe it as performing like rackets twice the price. At approximately £40, it competes strongly with rackets typically priced significantly higher. If you're looking for an affordable padel racket or a high-quality padel racket under £50, Ianoni offers one of the best value options in the UK market.",
  },
  {
    q: "Who is this racket best suited for?",
    a: "This model is ideal for first-time padel players, beginner to intermediate players, social and club players, and anyone wanting maximum performance for budget. It may not be designed for advanced tournament professionals seeking highly specialised performance characteristics, but for the vast majority of players, it provides excellent balance and value.",
  },
  {
    q: "Is this a good first padel racket?",
    a: "Yes — it's one of the most popular use cases. Many customers purchase it as their first racket due to its accessible price point and forgiving design. It allows new players to learn technique, develop consistency, and grow into their game without overspending.",
  },
  {
    q: "Why choose Ianoni over other affordable brands?",
    a: "Ianoni focuses on performance-to-price ratio, balanced power and control, comfortable handling, and reliable build quality. Rather than paying for brand premiums, you're investing in performance and playability.",
  },
];

export default function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEO
        title="Padel Racket FAQs | Common Questions Answered – IANONI"
        description="Got questions about IANONI padel rackets? Find answers about racket specs, which model suits your level, pricing, shipping, warranty and more."
      />
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">FAQ</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-[10px] tracking-[0.4em] uppercase text-primary font-medium mb-4">
              Frequently Asked Questions
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Ianoni Padel Racket <span className="text-primary">FAQ</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              If you're looking for one of the best value padel rackets in the UK, especially for beginner to intermediate players, this guide answers the most common questions about the Ianoni racket range.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                >
                  <AccordionItem
                    value={`faq-${index}`}
                    className="border rounded-xl px-6 bg-card"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* What Players Say */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">What Players Say</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Feels like a racket twice the price.",
                "Perfect first padel racket.",
                "Great balance between power and control.",
                "Light but solid feel.",
                "Amazing value for money.",
              ].map((quote, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="p-5 rounded-xl bg-card border text-center"
                >
                  <p className="text-muted-foreground italic">"{quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Positioning CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center text-primary-foreground"
          >
            <h2 className="text-3xl font-bold mb-4">Best Value Padel Racket in the UK</h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              At around £40, Ianoni delivers the feel, balance, and playability most players need — without the premium brand markup.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Link href="/padel">
                Shop Rackets
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </Layout>
  );
}
