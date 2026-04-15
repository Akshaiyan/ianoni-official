import type { Metadata } from "next";
import { products, getProductBySlug } from "@/data/products";
import ProductPageComponent from "@/views/ProductPage";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  const title = `${product.name}${product.colorVariant ? ` ${product.colorVariant}` : ""} | IANONI Padel Racket – £${product.price.toFixed(2)}`;
  const description = product.description.slice(0, 155);
  return {
    title,
    description,
    alternates: { canonical: `https://www.ianoni.co.uk/product/${slug}` },
    openGraph: { title, description, images: [product.image.src], type: "website" },
  };
}

export default function ProductPage() {
  return <ProductPageComponent />;
}
