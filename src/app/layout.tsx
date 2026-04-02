import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="preconnect" href="https://siplfligkdeidcousphr.supabase.co" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
