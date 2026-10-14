"use client";

import React from "react";
import { Gift, Sparkles, Tag } from "lucide-react";

interface MenuCategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const MenuCategories: React.FC<MenuCategoriesProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const categories = [
    {
      id: "classic",
      name: "CLASSIC",
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke="#881423"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          {/* 3 Candles */}
          <line x1="16" y1="8" x2="16" y2="14" />
          <line x1="24" y1="6" x2="24" y2="14" />
          <line x1="32" y1="8" x2="32" y2="14" />
          <circle cx="16" cy="6" r="1" fill="#881423" />
          <circle cx="24" cy="4" r="1" fill="#881423" />
          <circle cx="32" cy="6" r="1" fill="#881423" />
          {/* Top tier */}
          <rect x="12" y="14" width="24" height="10" rx="3" fill="#881423" fillOpacity="0.1" />
          {/* Scallops */}
          <path d="M 12,20 Q 18,24 24,20 Q 30,24 36,20" />
          {/* Bottom tier */}
          <rect x="8" y="24" width="32" height="14" rx="3" fill="#881423" fillOpacity="0.15" />
          <path d="M 8,31 Q 16,36 24,31 Q 32,36 40,31" />
          {/* Plate */}
          <line x1="6" y1="38" x2="42" y2="38" strokeWidth="3" />
        </svg>
      ),
    },
    {
      id: "gourmet",
      name: "DOURMET", // Matches reference visual
      displayTitle: "GOURMET",
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke="#881423"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          {/* Top Chef Ribbon Badge */}
          <rect x="15" y="6" width="18" height="12" rx="2" fill="#881423" fillOpacity="0.15" />
          <text
            x="24"
            y="15"
            fill="#881423"
            fontSize="8"
            fontWeight="900"
            textAnchor="middle"
            stroke="none"
          >
            TOP
          </text>
          {/* Cupcake Base */}
          <path d="M 12,22 Q 24,18 36,22 L 32,38 L 16,38 Z" fill="#881423" fillOpacity="0.1" />
          {/* Swirl Top */}
          <path d="M 14,22 C 14,17 20,16 24,16 C 28,16 34,17 34,22" />
          <line x1="18" y1="26" x2="19" y2="36" />
          <line x1="24" y1="26" x2="24" y2="36" />
          <line x1="30" y1="26" x2="29" y2="36" />
        </svg>
      ),
    },
    {
      id: "desserts",
      name: "DESSERTS",
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke="#881423"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          {/* Cake Slice */}
          <path
            d="M 10,26 L 36,12 L 40,24 L 14,38 Z"
            fill="#881423"
            fillOpacity="0.1"
          />
          <path d="M 10,26 L 14,38 L 38,38 L 40,24" />
          {/* Cream Layer */}
          <path d="M 12,32 L 39,28" strokeDasharray="2 2" />
          {/* Cherry on top */}
          <circle cx="34" cy="10" r="3" fill="#881423" />
          <path d="M 34,7 Q 38,4 40,6" />
        </svg>
      ),
    },
    {
      id: "cookies",
      name: "COOKIES",
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke="#881423"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          {/* Cookie Pouch / Jar */}
          <rect x="14" y="8" width="20" height="32" rx="4" fill="#881423" fillOpacity="0.1" />
          <line x1="14" y1="16" x2="34" y2="16" />
          {/* Cookie with choc chips inside */}
          <circle cx="24" cy="27" r="7" stroke="#881423" fill="#881423" fillOpacity="0.2" />
          <circle cx="22" cy="25" r="1" fill="#881423" />
          <circle cx="26" cy="26" r="1" fill="#881423" />
          <circle cx="23" cy="29" r="1" fill="#881423" />
          {/* Handle / Seal */}
          <path d="M 20,8 L 20,5 L 28,5 L 28,8" />
        </svg>
      ),
    },
  ];

  return (
    <div id="menu" className="relative z-10 -mt-10 mx-3 sm:mx-6 md:mx-8">
      <div className="bg-white rounded-[26px] p-4 sm:p-5 md:p-6 shadow-[0_10px_25px_rgba(0,0,0,0.05)] border border-[#F3ECE4] flex flex-col md:flex-row md:items-center justify-between gap-5">
        {/* Left: Heading, Subtitle, and 3 Circular Pill Badges */}
        <div className="flex flex-col">
          <h2 className="text-2xl sm:text-[26px] font-bold text-[#881423] tracking-tight">
            Menu
          </h2>
          <p className="text-xs sm:text-[13px] text-[#694848] font-medium mt-0.5">
            What will you wish for?
          </p>

          {/* 3 Circular Micro-Badges */}
          <div className="flex items-center gap-2.5 mt-2.5">
            <button
              onClick={() => onSelectCategory("all")}
              aria-label="Filter specials"
              className="w-7 h-7 rounded-full bg-[#FCEDE8] border border-[#F4DDD5] flex items-center justify-center text-[#881423] hover:scale-110 active:scale-95 transition-all shadow-2xs"
            >
              <Gift className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectCategory("classic")}
              aria-label="Filter freshly baked"
              className="w-7 h-7 rounded-full bg-[#FCEDE8] border border-[#F4DDD5] flex items-center justify-center text-[#881423] hover:scale-110 active:scale-95 transition-all shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectCategory("desserts")}
              aria-label="Filter discounts"
              className="w-7 h-7 rounded-full bg-[#FCEDE8] border border-[#F4DDD5] flex items-center justify-center text-[#881423] hover:scale-110 active:scale-95 transition-all shadow-2xs"
            >
              <Tag className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: 4 Category Cards */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3.5">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex flex-col items-center justify-center py-3 px-2 sm:px-4 rounded-2xl border transition-all duration-200 text-center min-w-[70px] sm:min-w-[88px] ${
                  isSelected
                    ? "bg-[#FCEDE8] border-[#881423] ring-1 ring-[#881423] shadow-sm transform -translate-y-0.5"
                    : "bg-[#FDFBF9] border-[#F0E5DC] hover:border-[#D6AFAF] hover:bg-[#FAF4EE]"
                }`}
              >
                <div className="mb-1.5 flex items-center justify-center">
                  {cat.icon}
                </div>
                <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-[#881423]">
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
