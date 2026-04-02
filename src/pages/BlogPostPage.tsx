"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, Clock, Tag, ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { getBlogPostBySlug, blogPosts, type BlogBlock } from "@/data/blog";

function renderBlock(block: BlogBlock, i: number) {
  const key = i;

  if (block.type === "h2") {
    return (
      <h2 key={key} className="text-2xl font-bold mt-10 mb-4 text-foreground">
        {block.content as string}
      </h2>
    );
  }

  if (block.type === "h3") {
    return (
      <h3 key={key} className="text-xl font-semibold mt-8 mb-3 text-foreground">
        {block.content as string}
      </h3>
    );
  }

  if (block.type === "p") {
    return (
      <p key={key} className="text-muted-foreground leading-relaxed mb-4">
        {block.content as string}
      </p>
    );
  }

  if (block.type === "ul") {
    return (
      <ul key={key} className="space-y-3 mb-4 ml-1">
        {(block.content as string[]).map((item, j) => (
          <li key={j} className="flex gap-3 text-muted-foreground leading-relaxed">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "ol") {
    return (
      <ol key={key} className="space-y-3 mb-4 ml-1">
        {(block.content as string[]).map((item, j) => (
          <li key={j} className="flex gap-3 text-muted-foreground leading-relaxed">
            <span className="mt-0.5 shrink-0 font-bold text-primary">{j + 1}.</span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "callout") {
    return (
      <div key={key} className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-4 text-muted-foreground leading-relaxed">
        {block.content as string}
      </div>
    );
  }

  return null;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string | undefined;
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) { notFound(); return null; }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    author: { "@type": "Organization", name: "IANONI" },
    publisher: {
      "@type": "Organization",
      name: "IANONI",
      url: "https://www.ianoni.co.uk",
      logo: { "@type": "ImageObject", url: "https://www.ianoni.co.uk/favicon.png" },
    },
    url: `https://www.ianoni.co.uk/blog/${post.slug}`,
    mainEntityOfPage: `https://www.ianoni.co.uk/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ianoni.co.uk/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.ianoni.co.uk/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.ianoni.co.uk/blog/${post.slug}` },
    ],
  };

  return (
    <Layout>
      <article className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Header */}
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
              <span className="flex items-center gap-1.5">
                <Tag className="h-3.5 w-3.5" />
                {post.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
              <time dateTime={post.publishDate}>
                {new Date(post.publishDate).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{post.title}</h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 border-l-4 border-primary pl-4">
              {post.excerpt}
            </p>
          </motion.header>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="prose-content"
          >
            {post.body.map((block, i) => renderBlock(block, i))}
          </motion.div>

          {/* CTA */}
          <div className="mt-16 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold mb-2">Ready to Start Playing?</h2>
            <p className="text-muted-foreground mb-6">
              Browse IANONI carbon fibre padel rackets from £39.99 — free UK shipping, 1-year warranty, 30-day returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/padel"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Shop Padel Rackets
              </Link>
              <Link
                href="/accessories"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border font-medium hover:bg-muted transition-colors"
              >
                View Starter Kits
              </Link>
            </div>
          </div>

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 mt-12 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 border-t bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">More Articles</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Tag className="h-3 w-3" />
                    {p.category}
                  </div>
                  <h3 className="font-semibold leading-snug group-hover:text-primary transition-colors mb-2">
                    {p.title}
                  </h3>
                  <span className="text-xs text-primary group-hover:underline">Read →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
