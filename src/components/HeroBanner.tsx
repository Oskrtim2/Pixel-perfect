"use client";

import React, { useState } from "react";
import Image from "next/image";

interface HeroBannerProps {
  onClaimOffer?: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onClaimOffer }) => {
  const [copied, setCopied] = useState(false);

  const handlePromoClick = () => {
    if (onClaimOffer) {
      onClaimOffer();
    } else {
      navigator.clipboard?.writeText("SAVE20");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#881423] via-[#AA1E35] to-[#E15E74] text-white pt-8 pb-16 px-4 sm:px-6 md:px-8">
      {/* Decorative Background Circles & Wave Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-white/10 blur-xl" />
        <div className="absolute top-1/2 -right-20 w-96 h-96 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-black/10 blur-lg" />
      </div>

      <div className="relative z-1 max-w-[800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        {/* Left: Main Circular Cake Photo */}
        <div className="relative shrink-0 flex items-center justify-center">
          <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-full border-[5px] border-white shadow-[0_12px_32px_rgba(0,0,0,0.35)] overflow-hidden bg-[#3C1014] relative transition-transform hover:scale-102 duration-300">
            <Image
              src="/images/hero-cake.jpg"
              alt="Decadent Chocolate Bliss Cake"
              fill
              priority
              sizes="(max-width: 640px) 200px, 240px"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Center: Bold Headline, Subtitle, and Promo Badge */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start justify-center">
          <div className="relative">
            <h1 className="text-3xl sm:text-4xl md:text-[42px] font-black tracking-tight leading-[1.05] text-white uppercase drop-shadow-sm">
              <span>DECADENT</span>
              <br />
              <span>CHOCOLATE</span>
              <br />
              <span className="inline-flex items-center gap-2">
                BLISS!
                {/* Whimsical White Flourish Swirl SVG */}
                <svg
                  className="w-12 h-6 sm:w-16 sm:h-7 text-white/90 inline-block -mt-1"
                  viewBox="0 0 100 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M 5,20 C 25,5 35,35 55,20 C 70,8 85,15 95,22 M 75,12 C 85,22 92,20 95,25" />
                </svg>
              </span>
            </h1>
          </div>

          <p className="mt-2 text-white/95 text-sm sm:text-base font-normal tracking-wide">
            Satisfy Your Sweetest Cravings
          </p>

          {/* Promo Badge Container */}
          <div className="mt-4 flex flex-col items-center md:items-start">
            <span className="text-[#FFE58F] text-[11px] font-semibold tracking-wider">
              Special Offer!
            </span>
            <button
              onClick={handlePromoClick}
              className="mt-1 bg-[#5A0D17] hover:bg-[#470911] active:scale-95 text-white font-extrabold text-xs sm:text-[13px] tracking-wider px-5 py-2 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.25)] border border-white/10 transition-all flex items-center gap-1.5"
            >
              <span>SAVE 20%</span>
              {copied && <span className="text-[10px] text-[#FFE58F] font-normal">(Copied!)</span>}
            </button>
          </div>
        </div>

        {/* Right: Two Smaller Circular Cake Photos */}
        <div className="flex md:flex-col items-center gap-4 sm:gap-5 shrink-0">
          {/* Top Circle: Molten Lava Cake */}
          <div className="w-[88px] h-[88px] sm:w-[102px] sm:h-[102px] rounded-full border-[3.5px] border-white shadow-[0_8px_20px_rgba(0,0,0,0.3)] overflow-hidden relative bg-[#3C1014] transition-transform hover:scale-105 duration-300">
            <Image
              src="/images/hero-lava.jpg"
              alt="Molten Chocolate Lava Cake"
              fill
              sizes="102px"
              className="object-cover object-center"
            />
          </div>

          {/* Bottom Circle: Chocolate Cake Slice */}
          <div className="w-[88px] h-[88px] sm:w-[102px] sm:h-[102px] rounded-full border-[3.5px] border-white shadow-[0_8px_20px_rgba(0,0,0,0.3)] overflow-hidden relative bg-[#3C1014] transition-transform hover:scale-105 duration-300">
            <Image
              src="/images/hero-slice.jpg"
              alt="Chocolate Layer Cake Slice"
              fill
              sizes="102px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
