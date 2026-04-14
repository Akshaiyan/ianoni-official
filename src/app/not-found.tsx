import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found – IANONI",
  description: "The page you're looking for doesn't exist. Browse IANONI padel rackets, guides and accessories.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">404</p>
      <h1 className="text-4xl font-bold mb-3">Page not found</h1>
      <p className="text-muted-foreground max-w-md mb-10">
        This page doesn't exist or has moved. Try one of the links below.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <Link href="/" className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
          Home
        </Link>
        <Link href="/padel" className="px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-muted transition-colors">
          Padel Rackets
        </Link>
        <Link href="/accessories" className="px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-muted transition-colors">
          Starter Kits
        </Link>
        <Link href="/blog" className="px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-muted transition-colors">
          Padel Blog
        </Link>
        <Link href="/faq" className="px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-muted transition-colors">
          FAQs
        </Link>
      </div>
    </div>
  );
}
