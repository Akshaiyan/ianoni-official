"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Loader2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ui/ProductCard";
import { products, getPadelRackets, type Product } from "@/data/products";

const categoryInfo: Record<string, { title: string; description: string; intro: string; emoji: string; filter: (p: Product) => boolean; seoTitle: string; seoDescription: string }> = {
  padel: {
    title: "Padel Rackets",
    description: "Premium carbon fibre padel rackets designed for players of all skill levels",
    intro: "Every IANONI padel racket is built with 3-layer carbon fibre construction and an EVA foam core — the same materials found in rackets costing 2–3× more. Whether you're picking up a racket for the first time or looking for a reliable club racket, you'll find it here from £39.99 with free UK shipping.",
    emoji: "🎾",
    filter: (p) => p.category === "padel" && !p.isStarterKit,
    seoTitle: "Buy Carbon Fibre Padel Rackets UK | From £39.99 – IANONI",
    seoDescription: "Shop IANONI carbon fibre padel rackets from £39.99. 3-layer carbon fibre, EVA foam core, 1-year warranty & free UK shipping.",
  },
  accessories: {
    title: "Starter Kits & Accessories",
    description: "Complete starter kits, premium balls, and everything you need to play",
    intro: "New to padel and not sure what you need? Our starter kits include a carbon fibre racket, 3 premium padel balls, and a carry bag — everything to get court-ready in one purchase. Or shop individual balls and accessories separately.",
    emoji: "🎾",
    filter: (p) => p.isStarterKit || p.isBallType || false,
    seoTitle: "Padel Starter Kits & Accessories UK | IANONI",
    seoDescription: "Shop IANONI padel starter kits, balls and accessories. Complete starter kits from £44.99. Free UK shipping.",
  },
};

export default function CollectionPage() {
  const params = useParams();
  const paramCategory = params?.category as string | undefined;
  const pathname = usePathname();
  const category = paramCategory ?? (pathname === "/padel" ? "padel" : pathname === "/accessories" ? "accessories" : null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);
  
  const info = category ? categoryInfo[category] : null;

  const displayProducts = useMemo(() => {
    if (!info) return [];
    
    const filtered = products.filter(info.filter);

    if (category === "padel") {
      // Shuffle rackets, then append starter kits
      const rackets = [...filtered];
      for (let i = rackets.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [rackets[i], rackets[j]] = [rackets[j], rackets[i]];
      }
      const starterKits = products.filter(p => p.isStarterKit);
      return [...rackets, ...starterKits];
    }
    
    if (category === "accessories") {
      // Balls first, then starter kits
      return [...filtered].sort((a, b) => {
        const aIsBall = a.isBallType ? 0 : 1;
        const bIsBall = b.isBallType ? 0 : 1;
        return aIsBall - bIsBall;
      });
    }
    
    return filtered;
  }, [info, category]);

  if (!info) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <p>Category not found</p>
        </div>
      </Layout>
    );
  }

  const BASE = "https://www.ianoni.co.uk";
  const pageUrl = `${BASE}/${category}`;

  const padelFaqSchema = category === "padel" ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best padel racket for beginners in the UK?",
        acceptedAnswer: { "@type": "Answer", text: "The IANONI PR8100 is widely considered the best padel racket for beginners in the UK. It features 3-layer carbon fibre construction, an EVA foam core, and a forgiving hybrid shape — all at £39.99 with free UK shipping and a 1-year warranty." },
      },
      {
        "@type": "Question",
        name: "How much does a good padel racket cost in the UK?",
        acceptedAnswer: { "@type": "Answer", text: "A quality padel racket in the UK costs between £40–£150. IANONI carbon fibre padel rackets start at £39.99, offering genuine carbon fibre construction at a price most beginner and intermediate players can justify." },
      },
      {
        "@type": "Question",
        name: "What is the difference between the PR8100 and PR8200?",
        acceptedAnswer: { "@type": "Answer", text: "Both are carbon fibre padel rackets priced at £39.99. The PR8100 has an extended impact zone optimised for beginners developing consistency. The PR8200 has an optimised hole pattern designed for players who want more shot control and responsiveness as they progress." },
      },
      {
        "@type": "Question",
        name: "Do IANONI padel rackets come with free UK shipping?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. All IANONI padel rackets and accessories include free standard UK shipping. Orders are typically dispatched within 1–2 business days." },
      },
    ],
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: info.title, item: pageUrl },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: info.title,
    url: pageUrl,
    numberOfItems: displayProducts.length,
    itemListElement: displayProducts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${BASE}/product/${p.slug}`,
      name: `IANONI ${p.name}${p.colorVariant ? ` ${p.colorVariant}` : ""}`,
    })),
  };

  const schemas = [breadcrumbSchema, itemListSchema, ...(padelFaqSchema ? [padelFaqSchema] : [])];

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <section className="pt-28 pb-12 bg-gradient-to-br from-surface to-background">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{info.title}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-center gap-6"
          >
            <div className="text-6xl">{info.emoji}</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{info.title}</h1>
              <p className="text-muted-foreground text-lg">{info.description}</p>
            </div>
          </motion.div>

          {info.intro && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-6 text-muted-foreground leading-relaxed max-w-3xl"
            >
              {info.intro}
            </motion.p>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-medium text-foreground">{displayProducts.length}</span> products
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {displayProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {displayProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Which racket is right for you? — comparison section */}
      {category === "padel" && (
        <section className="py-14 border-t">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Which racket is right for you?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl">
                All IANONI rackets share the same 3-layer carbon fibre construction and EVA foam core. The difference is in shape and sweet spot — here&apos;s how to choose.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
              {/* PR8100 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">Best for beginners</span>
                  <h3 className="text-xl font-bold mt-1">PR8100</h3>
                  <p className="text-sm text-muted-foreground mt-1">Extended impact zone — more forgiving on off-centre hits, helping you build consistency from your first session.</p>
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>✓ Larger sweet spot</li>
                  <li>✓ Hybrid shape for power & control</li>
                  <li>✓ Ideal if you&apos;re brand new to padel</li>
                </ul>
                <Link href="/product/pr8100-red-black" className="mt-auto text-sm font-medium text-primary hover:underline">
                  Shop PR8100 →
                </Link>
              </motion.div>

              {/* PR8200 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">Best for improving players</span>
                  <h3 className="text-xl font-bold mt-1">PR8200</h3>
                  <p className="text-sm text-muted-foreground mt-1">Optimised hole pattern for improved airflow and shot feel — gives more feedback as your technique develops.</p>
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>✓ Enhanced shot control</li>
                  <li>✓ Better spin and touch</li>
                  <li>✓ Ideal if you&apos;ve played 5+ sessions</li>
                </ul>
                <Link href="/product/pr8200-blue-stripe" className="mt-auto text-sm font-medium text-primary hover:underline">
                  Shop PR8200 →
                </Link>
              </motion.div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Not sure? <Link href="/blog/pr8100-vs-pr8200" className="text-primary hover:underline">Read our full PR8100 vs PR8200 comparison →</Link>
            </p>
          </div>
        </section>
      )}

      {/* Related reading — internal links for SEO */}
      {category === "padel" && (
        <section className="py-12 border-t bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-6">Padel Buying Guides</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Best Padel Racket for Beginners UK", href: "/blog/best-padel-racket-beginners-uk" },
                { title: "How to Choose a Padel Racket", href: "/blog/how-to-choose-padel-racket" },
                { title: "Best Padel Racket Under £50", href: "/blog/best-padel-racket-under-50" },
                { title: "Carbon Fibre Padel Rackets Explained", href: "/blog/carbon-fibre-padel-rackets" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors group"
                >
                  <p className="text-sm font-medium group-hover:text-primary transition-colors leading-snug">{article.title}</p>
                  <span className="text-xs text-primary mt-2 block group-hover:underline">Read guide →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {category === "accessories" && (
        <section className="py-12 border-t bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-6">Getting Started with Padel</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "How to Play Padel: Rules & Tips for Beginners", href: "/blog/how-to-play-padel-beginners-guide" },
                { title: "Padel Rules UK: The Complete Guide", href: "/blog/padel-rules-uk" },
                { title: "Padel Courts Near Me: How to Find and Book", href: "/blog/padel-courts-near-me-uk" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors group"
                >
                  <p className="text-sm font-medium group-hover:text-primary transition-colors leading-snug">{article.title}</p>
                  <span className="text-xs text-primary mt-2 block group-hover:underline">Read guide →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
