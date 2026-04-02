import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/cart", "/admin/"] },
    ],
    sitemap: "https://www.ianoni.co.uk/sitemap.xml",
  };
}
