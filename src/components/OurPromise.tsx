"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2 } from "lucide-react";

interface OurPromiseProps {
  onUnlockTicket?: () => void;
}

export const OurPromise: React.FC<OurPromiseProps> = ({ onUnlockTicket }) => {
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = () => {
    if (onUnlockTicket) {
      onUnlockTicket();
    } else {
      setUnlocked(true);
      setTimeout(() => setUnlocked(false), 3000);
    }
  };

  const promiseBadges = [
    {
      title: "ON TIME",
      subtitle: "DELIVERY",
      icon: (
        <svg viewBox="0 0 36 36" className="w-6 h-6 stroke-[#881423]" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="14" />
          <path d="M 18,10 L 18,18 L 23,21" />
          <path d="M 9,7 L 6,10" />
          <path d="M 27,7 L 30,10" />
        </svg>
      ),
    },
    {
      title: "1500+",
      subtitle: "DESIGNS",
      icon: (
        <svg viewBox="0 0 36 36" className="w-6 h-6 stroke-[#881423]" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="10" width="16" height="15" rx="2" />
          <path d="M 21,15 L 28,15 L 31,20 L 31,25 L 21,25 Z" />
          <circle cx="10" cy="27" r="3" />
          <circle cx="26" cy="27" r="3" />
        </svg>
      ),
    },
    {
      title: "2 CR+",
      subtitle: "ORDERS",
      icon: (
        <svg viewBox="0 0 36 36" className="w-6 h-6 stroke-[#881423]" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="14" />
          <text x="18" y="21" fill="#881423" stroke="none" fontSize="8" fontWeight="bold" textAnchor="middle">
            2 Cr+
          </text>
        </svg>
      ),
    },
    {
      title: "BAKED",
      subtitle: "FRESH",
      icon: (
        <svg viewBox="0 0 36 36" className="w-6 h-6 stroke-[#881423]" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 9,14 C 9,10 14,8 18,8 C 22,8 27,10 27,14 L 29,26 C 29,28 27,29 25,29 L 11,29 C 9,29 7,28 7,26 Z" />
          <path d="M 14,14 Q 18,18 22,14" />
          <line x1="13" y1="20" x2="15" y2="25" />
          <line x1="18" y1="20" x2="18" y2="25" />
          <line x1="23" y1="20" x2="21" y2="25" />
        </svg>
      ),
    },
  ];

  const galleryImages = [
    { src: "/images/gallery-tiered-cake.jpg", alt: "Tiered White Celebration Cake with Gold Leaf" },
    { src: "/images/gallery-baker-woman.jpg", alt: "Baker Smiling with Chocolate Cake" },
    { src: "/images/gallery-baker-fruit.jpg", alt: "Baker with Fresh Fruit Berry Cake" },
    { src: "/images/gallery-two-chefs.jpg", alt: "Two Male Chefs in Bakery Kitchen" },
    { src: "/images/gallery-two-bakers.jpg", alt: "Two Bakers Posing with Pink Multi-Tier Cake" },
    { src: "/images/gallery-anniversary-cake.jpg", alt: "Artisanal Anniversary Cake Showcase" },
  ];

  const socialAvatars = [
    "/images/avatar1.jpg",
    "/images/avatar2.jpg",
    "/images/avatar3.jpg",
    "/images/avatar4.jpg",
  ];

  return (
    <section id="promise" className="w-full pt-6 pb-4 px-3 sm:px-6 md:px-8">
      {/* Heading & Subtitle */}
      <div className="mb-4">
        <h2 className="text-2xl sm:text-[26px] font-bold text-[#881423] tracking-tight">
          Our Promise
        </h2>
        <p className="text-xs sm:text-[13px] text-[#6E4848] font-medium mt-0.5">
          There&apos;s no secret spell – only honest the work!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 items-start">
        {/* Left Column: Two Promise Cards & Social Follow */}
        <div className="flex flex-col gap-3.5">
          {/* Card 1: Secret Spell Guarantee with 4 Round Badges */}
          <div className="bg-[#FCF2EE] border border-[#F6DDD4] rounded-2xl p-4 sm:p-5 shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
            <h3 className="text-center text-xs font-bold text-[#881423] mb-4">
              A glimpse our secret spell – only hocial world!
            </h3>

            {/* 4 Badges Row */}
            <div className="grid grid-cols-4 gap-2 text-center">
              {promiseBadges.map((badge, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#881423] bg-white flex items-center justify-center mb-1.5 shadow-2xs hover:scale-105 transition-transform">
                    {badge.icon}
                  </div>
                  <span className="text-[9.5px] font-extrabold text-[#881423] leading-tight uppercase">
                    {badge.title}
                  </span>
                  <span className="text-[9px] font-bold text-[#881423] leading-tight uppercase">
                    {badge.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: The Magical Ticket */}
          <div className="bg-[#FCF2EE] border border-[#F6DDD4] rounded-2xl p-4 sm:p-5 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex items-center justify-between gap-3 relative overflow-hidden">
            {/* Left: Golden Ticket Illustration with Confetti */}
            <div className="relative w-28 h-20 shrink-0 flex items-center justify-center">
              {/* Confetti squiggles background */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 120 90"
                fill="none"
              >
                {/* squiggles */}
                <path d="M 15,25 Q 25,10 30,20 Q 35,30 45,15" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" />
                <path d="M 20,70 Q 15,55 30,60" stroke="#7ED321" strokeWidth="2" strokeLinecap="round" />
                <path d="M 80,15 Q 90,25 105,18" stroke="#D0021B" strokeWidth="2" strokeLinecap="round" />
                <path d="M 85,75 Q 95,65 110,80" stroke="#BD10E0" strokeWidth="2" strokeLinecap="round" />
                {/* sparkle stars */}
                <circle cx="25" cy="40" r="2" fill="#F8E71C" />
                <circle cx="85" cy="30" r="2.5" fill="#50E3C2" />
                <circle cx="100" cy="50" r="2" fill="#F5A623" />
              </svg>

              {/* Angled Golden Ticket */}
              <div className="transform -rotate-12 bg-gradient-to-r from-[#F7C948] to-[#F0B429] border-2 border-white rounded-lg p-2 shadow-md w-24 flex flex-col items-center justify-center relative">
                <span className="text-[8px] font-black text-[#5C3806] tracking-wider uppercase">
                  TICKET
                </span>
                <div className="w-full border-t border-dashed border-[#5C3806]/40 my-0.5" />
                <span className="text-[7px] font-bold text-[#744210]">
                  ₹750 OFF
                </span>
              </div>
            </div>

            {/* Right: Ticket Content & Unlock Action */}
            <div className="flex-1 flex flex-col items-start">
              <h4 className="text-xs sm:text-[13px] font-black text-[#881423] tracking-wide uppercase">
                THE MAGICAL TICKET
              </h4>
              <p className="text-[11px] text-[#694848] font-medium leading-snug mt-1">
                Add 3 reminders in your account.
                <br />
                Win offers worth Rs. 750
              </p>
              <button
                onClick={handleUnlock}
                className="mt-2.5 bg-[#881423] hover:bg-[#680C18] active:scale-95 text-white font-bold text-[10px] tracking-wider px-4 py-1.5 rounded-full uppercase shadow-sm transition-all"
              >
                {unlocked ? "CODE: TICKET750" : "UNLOCK NOW"}
              </button>
            </div>
          </div>

          {/* Social Row: 4 Avatars and "Follow us on social!" */}
          <div className="flex items-center gap-3 pt-1">
            <div className="flex items-center -space-x-2.5">
              {socialAvatars.map((src, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-xs relative bg-[#EAD8D0] shrink-0 hover:scale-115 hover:z-10 transition-transform"
                >
                  <Image
                    src={src}
                    alt={`Customer Avatar ${i + 1}`}
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <span className="text-xs font-bold text-[#881423]">
              Follow us on social!
            </span>
          </div>
        </div>

        {/* Right Column: 6 Bakery Photos Grid (2x3) */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative h-[115px] sm:h-[128px] rounded-2xl overflow-hidden shadow-xs bg-[#2B0E12] border border-[#F2E5DC]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 150px, 180px"
                className="object-cover object-center group-hover:scale-106 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
