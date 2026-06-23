import type { Metadata } from "next";
import ReturnsPageComponent from "@/views/ReturnsPage";

export const metadata: Metadata = {
  title: "Returns Policy",
  description: "IANONI's 30-day returns policy. Returns accepted for unopened, unused items or faulty products within 30 days of delivery.",
};

export default function ReturnsPage() {
  return <ReturnsPageComponent />;
}
