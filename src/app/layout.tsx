import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "IANONI | Premium Carbon Fibre Padel Rackets – UK",
    template: "%s – IANONI",
  },
  description:
    "Shop IANONI carbon fibre padel rackets from £39.99. Designed for beginners to intermediate players. Free UK shipping, 1-year warranty & 30-day returns.",
  metadataBase: new URL("https://www.ianoni.co.uk"),
  openGraph: {
    siteName: "IANONI",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@IANONI",
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IANONI",
  url: "https://www.ianoni.co.uk",
  logo: "https://www.ianoni.co.uk/favicon.png",
  description: "IANONI makes premium carbon fibre padel rackets accessible to every player in the UK from £39.99.",
  contactPoint: { "@type": "ContactPoint", email: "ianoni@tidytrade.ai", contactType: "customer support", areaServed: "GB" },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "IANONI",
  url: "https://www.ianoni.co.uk",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.ianoni.co.uk/padel?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="preconnect" href="https://siplfligkdeidcousphr.supabase.co" />
        {/* Replace content value with your Google Search Console verification code */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
