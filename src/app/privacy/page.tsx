import type { Metadata } from "next";
import PrivacyPageComponent from "@/pages/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return <PrivacyPageComponent />;
}
