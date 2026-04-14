"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog";

const featured = blogPosts.slice(0, 3);

export function BlogSection() {
  return (
    <section className="py-16 md:py-24 border-t">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3 block">
              From the Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Padel Guides & Advice
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:underline shrink-0"
          >
            All articles <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-colors"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <span className="text-5xl">🎾</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Tag className="h-3 w-3" />{post.category}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                  </div>
                  <h3 className="font-semibold leading-snug group-hover:text-primary transition-colors mb-2 flex-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                  <span className="text-xs text-primary font-medium group-hover:underline">Read article →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
