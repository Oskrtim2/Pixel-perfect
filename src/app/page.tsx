"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { MenuCategories } from "@/components/MenuCategories";
import { Bestsellers, Product } from "@/components/Bestsellers";
import { OurPromise } from "@/components/OurPromise";
import { PromotionalBanner } from "@/components/PromotionalBanner";
import { Footer } from "@/components/Footer";
import { CartDrawer, CartItem } from "@/components/CartDrawer";
import { AuthModal } from "@/components/AuthModal";
import { TicketModal } from "@/components/TicketModal";
import { HelpModal } from "@/components/HelpModal";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Rich Chocolate Truffle Cake",
      category: "classic",
      price: 500,
      weight: "500g (Approx)",
      rating: 5,
      reviewCount: 500,
      image: "/images/bestseller-truffle.jpg",
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isTicketOpen, setIsTicketOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`Added "${product.name}" to your cart!`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSearch = (query: string) => {
    showToast(`Searching cakes matching "${query}"...`);
    const el = document.getElementById("bestsellers");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FAF1E8] py-0 sm:py-6 md:py-8 px-0 sm:px-4 flex justify-center items-start">
      {/* Centered Website Canvas */}
      <main className="w-full max-w-[860px] bg-[#FAF1E8] sm:rounded-[32px] shadow-[0_20px_50px_rgba(100,20,30,0.08)] overflow-hidden border border-[#EBDCD0]/60 relative flex flex-col">
        {/* 1. Header Navigation */}
        <Header
          cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenAuth={() => setIsAuthOpen(true)}
          onSearch={handleSearch}
        />

        {/* 2. Hero Banner */}
        <HeroBanner onClaimOffer={() => setIsTicketOpen(true)} />

        {/* 3. Menu Categories (Overlaps Hero Banner) */}
        <MenuCategories
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* 4. Bestsellers Section */}
        <Bestsellers
          selectedCategory={selectedCategory}
          onAddToCart={handleAddToCart}
        />

        {/* 5. Our Promise Section */}
        <OurPromise onUnlockTicket={() => setIsTicketOpen(true)} />

        {/* 6. Promotional Banner */}
        <PromotionalBanner />

        {/* 7. Footer */}
        <Footer onOpenHelp={() => setIsHelpOpen(true)} />
      </main>

      {/* Floating Action Notifications / Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#881423] text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-lg border border-white/20 animate-in fade-in slide-in-from-bottom-3 duration-200">
          {toastMessage}
        </div>
      )}

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Login / Signup Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />

      {/* The Magical Ticket Modal */}
      <TicketModal isOpen={isTicketOpen} onClose={() => setIsTicketOpen(false)} />

      {/* Customer Support Chat Modal */}
      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
    </div>
  );
}
