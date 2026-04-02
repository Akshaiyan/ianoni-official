"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { Layout } from "@/components/layout/Layout";
import { getBlogPostBySlug } from "@/data/blog";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <article className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{post.title}</span>
          </nav>
          <p className="text-sm text-muted-foreground mb-4">{post.publishDate}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">{post.title}</h1>
          <div
            className="prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </Layout>
  );
}
