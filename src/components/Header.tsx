"use client";

import React, { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenAuth: () => void;
  onSearch: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenAuth,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const navLinks = [
    { label: "Cakes", href: "#bestsellers" },
    { label: "Theme Cakes", href: "#menu" },
    { label: "Desserts", href: "#menu" },
    { label: "Birthday", href: "#bestsellers" },
    { label: "Hampers", href: "#bestsellers" },
    { label: "Anniversary", href: "#promise" },
    { label: "Occasions", href: "#menu" },
    { label: "Occasions", href: "#promise" },
  ];

  return (
    <header className="w-full bg-[#FAF1E8] pt-3 pb-2 px-4 sm:px-6 md:px-8 border-b border-[#F2E5D8]/80">
      {/* Top Bar: Brand, Search, Cart, Account */}
      <div className="flex items-center justify-between gap-3 md:gap-6">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="text-2xl sm:text-[26px] font-black tracking-tight text-[#881423] hover:opacity-95 transition-opacity"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Dakingo
          </a>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex-1 max-w-[340px] relative hidden sm:flex items-center"
        >
          <div className="relative w-full flex items-center">
            <Search className="w-3.5 h-3.5 text-[#9E8B83] absolute left-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full h-8 pl-8 pr-9 rounded-full bg-white border border-[#E5D7CE] text-xs text-[#4A2E2B] placeholder-[#A8968E] focus:outline-none focus:border-[#881423] focus:ring-1 focus:ring-[#881423] transition-all shadow-inner"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-1 w-6 h-6 rounded-full bg-[#881423] text-white flex items-center justify-center hover:bg-[#6D101C] transition-colors"
            >
              <Search className="w-3 h-3" />
            </button>
          </div>
        </form>

        {/* Cart & Login / Signup */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-1.5 text-[#881423] hover:text-[#6D101C] transition-colors group"
            aria-label="Shopping Cart"
          >
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-[#881423] group-hover:scale-105 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#881423] text-white font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-[#FAF1E8]">
                  {cartCount}
                </span>
              )}
            </div>
          </button>

          {/* Login / Signup */}
          <button
            onClick={onOpenAuth}
            className="flex items-center gap-1 text-xs font-semibold text-[#881423] hover:text-[#6D101C] transition-colors"
          >
            <User className="w-4 h-4 text-[#881423]" />
            <span className="hidden xs:inline">Login/Signup</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-[#881423]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Search input */}
      <form onSubmit={handleSearchSubmit} className="mt-2.5 sm:hidden relative">
        <Search className="w-3.5 h-3.5 text-[#9E8B83] absolute left-3 top-2.5 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for cakes, desserts..."
          className="w-full h-8 pl-8 pr-9 rounded-full bg-white border border-[#E5D7CE] text-xs text-[#4A2E2B] placeholder-[#A8968E] focus:outline-none focus:border-[#881423]"
        />
        <button
          type="submit"
          className="absolute right-1 top-1 w-6 h-6 rounded-full bg-[#881423] text-white flex items-center justify-center"
        >
          <Search className="w-3 h-3" />
        </button>
      </form>

      {/* Secondary Navigation Row (Desktop) */}
      <nav className="mt-3 hidden md:flex items-center justify-between text-[11.5px] font-medium text-[#7D343E]">
        <div className="flex items-center gap-4 lg:gap-6 flex-wrap">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-[#6B242C] hover:text-[#881423] font-semibold transition-colors whitespace-nowrap hover:underline underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ORDER NOW button */}
        <a
          href="#bestsellers"
          className="bg-[#881423] hover:bg-[#6D101C] text-white font-bold px-4 py-1.5 rounded-full text-[11px] tracking-wide transition-all shadow-sm shrink-0 flex items-center gap-1 active:scale-95"
        >
          ORDER NOW
        </a>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-[#F2E5D8] flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-[#6B242C]">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 px-2 hover:bg-[#F2E5D8] rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#bestsellers"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full text-center bg-[#881423] text-white font-bold py-2 rounded-full text-xs"
          >
            ORDER NOW
          </a>
        </div>
      )}
    </header>
  );
};
