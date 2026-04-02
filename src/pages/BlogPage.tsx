"use client";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Padel Blog</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Expert guides, buying advice, and tips to help you improve your padel game.
          </p>

          {blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-4">Blog posts coming soon.</p>
              <Link href="/guide" className="text-primary hover:underline">
                Visit our Beginner's Guide in the meantime
              </Link>
            </div>
          ) : (
            <div className="grid gap-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <div className="p-6 rounded-2xl border bg-card hover:border-primary hover:shadow-md transition-all">
                    <p className="text-sm text-muted-foreground mb-2">{post.publishDate}</p>
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
