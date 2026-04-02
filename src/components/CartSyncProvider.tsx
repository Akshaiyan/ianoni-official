"use client";
import { useCartSync } from "@/hooks/useCartSync";
export function CartSyncProvider() {
  useCartSync();
  return null;
}
