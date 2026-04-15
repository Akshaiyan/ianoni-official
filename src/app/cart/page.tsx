import type { Metadata } from "next";
import CartPageComponent from "@/views/CartPage";

export const metadata: Metadata = {
  title: "Your Cart",
  robots: { index: false, follow: false },
};

export default function CartPage() {
  return <CartPageComponent />;
}
