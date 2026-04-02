import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.ianoni.co.uk";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: "website" | "product" | "article";
  noindex?: boolean;
  schema?: object | object[];
}

export function SEO({
  title,
  description,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noindex = false,
  schema,
}: SEOProps) {
  const { pathname } = useLocation();
  const canonical = `${SITE_URL}${pathname}`;

  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        const match = selector.match(/\[([^=]+)="([^"]+)"\]/);
        if (match) el.setAttribute(match[1], match[2]);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[name="robots"]', noindex ? "noindex,nofollow" : "index,follow");
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:image"]', ogImage);
    setMeta('meta[property="og:type"]', ogType);
    setMeta('meta[property="og:url"]', canonical);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', ogImage);
    setLink("canonical", canonical);

    // Inject or replace JSON-LD schema
    const schemaId = "ld-json-main";
    let schemaEl = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (schema) {
      if (!schemaEl) {
        schemaEl = document.createElement("script");
        schemaEl.id = schemaId;
        schemaEl.type = "application/ld+json";
        document.head.appendChild(schemaEl);
      }
      schemaEl.textContent = JSON.stringify(
        Array.isArray(schema) ? schema : schema
      );
    } else if (schemaEl) {
      schemaEl.remove();
    }
  }, [title, description, ogImage, ogType, noindex, canonical, schema]);

  return null;
}
