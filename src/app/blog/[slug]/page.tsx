import type { Metadata } from "next";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import BlogPostPageComponent from "@/views/BlogPostPage";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `https://www.ianoni.co.uk/blog/${slug}` },
    openGraph: { title: post.title, description: post.metaDescription, type: "article", publishedTime: post.publishDate },
  };
}

export default function BlogPostPage() {
  return <BlogPostPageComponent />;
}
