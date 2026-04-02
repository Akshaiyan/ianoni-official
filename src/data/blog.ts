export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  publishDate: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
