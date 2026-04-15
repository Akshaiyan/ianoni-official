import type { Metadata } from "next";
import AdminReviewsPageComponent from "@/views/AdminReviewsPage";

export const metadata: Metadata = {
  title: "Admin – Reviews",
  robots: { index: false, follow: false },
};

export default function AdminReviewsPage() {
  return <AdminReviewsPageComponent />;
}
