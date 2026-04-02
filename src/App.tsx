import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useCartSync } from "@/hooks/useCartSync";
import { EmailPopup } from "@/components/home/EmailPopup";
import Index from "./pages/Index";
import CollectionPage from "./pages/CollectionPage";
import ProductPage from "./pages/ProductPage";
import GuidePage from "./pages/GuidePage";
import Padel101Page from "./pages/Padel101Page";
import NotFound from "./pages/NotFound";
import FAQPage from "./pages/FAQPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import AdminReviewsPage from "./pages/AdminReviewsPage";
import AboutPage from "./pages/AboutPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";

const queryClient = new QueryClient();

function AppContent() {
  useCartSync();
  return (
    <>
      <Toaster />
      <Sonner />
      <EmailPopup />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collection/:category" element={<CollectionPage />} />
          <Route path="/padel" element={<CollectionPage />} />
          <Route path="/accessories" element={<CollectionPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/guide/padel-101" element={<Padel101Page />} />
          <Route path="/guide/*" element={<GuidePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin/reviews" element={<AdminReviewsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
