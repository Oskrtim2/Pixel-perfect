"use client";

import React, { useState } from "react";
import { ArrowDownCircle, Check, MessageCircleQuestion } from "lucide-react";

interface FooterProps {
  onOpenHelp?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenHelp }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError(true);
      return;
    }
    setError(false);
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="w-full bg-[#FAF1E8] pt-4 pb-8 px-3 sm:px-6 md:px-8 text-[#573535]">
      {/* 5 Navigation Columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-[11px] sm:text-xs">
        {/* Column 1: Brand & Core Links */}
        <div className="flex flex-col gap-1.5">
          <span className="text-xl sm:text-2xl font-black text-[#881423] tracking-tight mb-1">
            Dakingo
          </span>
          <a href="#" className="hover:text-[#881423] transition-colors">
            Our Story
          </a>
          <a href="#" className="hover:text-[#881423] transition-colors">
            Contact Us
          </a>
          <a href="#" className="hover:text-[#881423] transition-colors">
            Locate Us
          </a>
          <a href="#" className="hover:text-[#881423] transition-colors">
            Media
          </a>
          <a href="#" className="hover:text-[#881423] transition-colors">
            Careers
          </a>
        </div>

        {/* Column 2: KNOW US */}
        <div className="flex flex-col gap-1.5">
          <span className="font-extrabold text-[#881423] tracking-wider uppercase mb-1">
            KNOW US
          </span>
          <a href="#" className="hover:text-[#881423] transition-colors">
            Contact Us
          </a>
          <a href="#" className="hover:text-[#881423] transition-colors">
            Blog
          </a>
        </div>

        {/* Column 3: NEED HELP */}
        <div className="flex flex-col gap-1.5">
          <span className="font-extrabold text-[#881423] tracking-wider uppercase mb-1">
            NEED HELP
          </span>
          <a href="#" className="hover:text-[#881423] transition-colors">
            Cancellation And Refund
          </a>
          <a href="#" className="hover:text-[#881423] transition-colors">
            Privacy Policy
          </a>
        </div>

        {/* Column 4: MORE INFO */}
        <div className="flex flex-col gap-1.5">
          <span className="font-extrabold text-[#881423] tracking-wider uppercase mb-1">
            MORE INFO
          </span>
          <a href="#" className="hover:text-[#881423] transition-colors">
            Terms And Office
          </a>
          <a href="#" className="hover:text-[#881423] transition-colors">
            Customs Clearance
          </a>
        </div>

        {/* Column 5: MORE INFO / OFFERS */}
        <div className="flex flex-col gap-1.5">
          <span className="font-extrabold text-[#881423] tracking-wider uppercase mb-1">
            MORE INFO
          </span>
          <a href="#" className="hover:text-[#881423] transition-colors">
            Coupons &amp; Offers
          </a>
          <a href="#" className="hover:text-[#881423] transition-colors">
            Download App
          </a>
        </div>
      </div>

      {/* Bottom Bar: Newsletter & Support Help */}
      <div className="mt-8 pt-4 border-t border-[#EFE2D6] flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Newsletter Subscription */}
        <form
          onSubmit={handleSubscribe}
          className="flex items-center gap-2 w-full max-w-sm"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(false);
            }}
            placeholder="Enter Email Address"
            className={`flex-1 h-9 px-4 rounded-full bg-white border text-xs text-[#4A2E2B] placeholder-[#A59288] focus:outline-none focus:border-[#881423] transition-colors shadow-2xs ${
              error ? "border-red-500" : "border-[#E2D5CC]"
            }`}
          />
          <button
            type="submit"
            className="h-9 px-5 bg-[#881423] hover:bg-[#680C18] active:scale-95 text-white font-bold text-[11px] tracking-wider rounded-full uppercase transition-all shadow-xs shrink-0 flex items-center gap-1"
          >
            {subscribed ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>SAVED!</span>
              </>
            ) : (
              <span>SUBSCRIBE</span>
            )}
          </button>
        </form>

        {/* Help Action: Circle with Down Arrow & Text */}
        <button
          onClick={onOpenHelp}
          className="flex items-center gap-2 group cursor-pointer text-[#881423] hover:opacity-85 transition-opacity"
        >
          <div className="w-8 h-8 rounded-full border border-[#881423] flex items-center justify-center group-hover:scale-105 transition-transform">
            <ArrowDownCircle className="w-5 h-5 text-[#881423]" />
          </div>
          <span className="text-xs font-bold text-[#881423]">
            Hey, need any help?
          </span>
        </button>
      </div>

      {/* Subtle Copyright / Legal */}
      <div className="mt-6 text-center text-[10px] text-[#8C7373]">
        &copy; 2026 Dakingo Bakery Inc. All rights reserved.
      </div>
    </footer>
  );
};
