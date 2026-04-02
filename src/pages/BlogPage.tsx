"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Clock, Tag } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { blogPosts } from "@/data/blog";


export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <Layout>
      <section className="pt-28 pb-16 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">Blog</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Padel Blog</h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              Guides, buying advice, rules and tips to help you play better padel.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Featured post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <Link
              to={`/blog/${featured.slug}`}
              className="group grid md:grid-cols-2 gap-8 bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/40 transition-colors"
            >
              <div className="aspect-[16/9] md:aspect-auto bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center min-h-[240px]">
                <span className="text-7xl">🎾</span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Tag className="h-3 w-3" /> {featured.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {featured.readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                <span className="text-primary font-medium text-sm group-hover:underline">
                  Read article →
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Grid of remaining posts */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-colors"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <span className="text-5xl">🎾</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Tag className="h-3 w-3" /> {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <span className="text-primary text-sm font-medium mt-4 group-hover:underline">
                      Read more →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
