import type { Metadata } from "next";
import TermsPageComponent from "@/pages/TermsPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return <TermsPageComponent />;
}
