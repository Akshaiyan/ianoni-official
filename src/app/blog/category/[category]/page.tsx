import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { Clock, Tag, ChevronRight } from "lucide-react";

const CATEGORY_META: Record<string, { label: string; description: string }> = {
  "buying-guides": {
    label: "Buying Guides",
    description: "Expert buying guides to help you choose the right padel racket, shoes and equipment for your level and budget.",
  },
  "padel-101": {
    label: "Padel 101",
    description: "Everything you need to know about padel — rules, scoring, court layout, and how to get started playing in the UK.",
  },
  "training-tactics": {
    label: "Training & Tactics",
    description: "Tactical guides and training tips to help you improve your padel game — from net positioning to doubles strategy.",
  },
};

const SLUG_TO_KEY: Record<string, string> = {
  "buying-guides": "Buying Guides",
  "padel-101": "Padel 101",
  "training-tactics": "Training & Tactics",
};

export function generateStaticParams() {
  return Object.keys(CATEGORY_META).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const meta = CATEGORY_META[category];
  if (!meta) return { title: "Category Not Found" };
  return {
    title: `${meta.label} | Padel Blog – IANONI`,
    description: meta.description,
    alternates: { canonical: `https://www.ianoni.co.uk/blog/category/${category}` },
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = CATEGORY_META[category];
  if (!meta) notFound();

  const categoryName = SLUG_TO_KEY[category];
  const posts = blogPosts.filter((p) => p.category === categoryName);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ianoni.co.uk/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.ianoni.co.uk/blog" },
      { "@type": "ListItem", position: 3, name: meta.label, item: `https://www.ianoni.co.uk/blog/category/${category}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{meta.label}</span>
          </nav>

          <div className="mb-10">
            <span className="text-xs font-medium text-primary tracking-widest uppercase">{posts.length} articles</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-3">{meta.label}</h1>
            <p className="text-muted-foreground text-lg">{meta.description}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-colors"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Tag className="h-3 w-3" />{post.category}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                  </div>
                  <h2 className="font-semibold leading-snug group-hover:text-primary transition-colors mb-2 flex-1">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                  <span className="text-xs text-primary font-medium group-hover:underline">Read article →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              ← All articles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
