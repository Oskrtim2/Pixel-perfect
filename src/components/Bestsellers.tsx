"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Star, ChevronDown, Check } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  weight: string;
  rating: number;
  reviewCount: number;
  image: string;
}

interface BestsellersProps {
  selectedCategory: string;
  onAddToCart: (product: Product) => void;
}

export const Bestsellers: React.FC<BestsellersProps> = ({
  selectedCategory,
  onAddToCart,
}) => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    "1": true,
    "2": true,
    "3": true,
    "4": true,
  });

  const [expandedViewAll, setExpandedViewAll] = useState(false);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const baseProducts: Product[] = [
    {
      id: "1",
      name: "Rich Chocolate Truffle Cake",
      category: "classic",
      price: 500,
      weight: "500g (Approx)",
      rating: 5,
      reviewCount: 500,
      image: "/images/bestseller-truffle.jpg",
    },
    {
      id: "2",
      name: "Choco Chip Truffle Cake",
      category: "classic",
      price: 509,
      weight: "500g (Approx)",
      rating: 5,
      reviewCount: 300,
      image: "/images/bestseller-choco-chip.jpg",
    },
    {
      id: "3",
      name: "Tropical Fruit N Almond Cake",
      category: "gourmet",
      price: 599,
      weight: "500g (Approx)",
      rating: 5,
      reviewCount: 588,
      image: "/images/bestseller-fruit-almond.jpg",
    },
    {
      id: "4",
      name: "Rich Butterscotch Crunch Cake",
      category: "desserts",
      price: 399,
      weight: "Piece / 500g",
      rating: 5,
      reviewCount: 708,
      image: "/images/bestseller-butterscotch.jpg",
    },
  ];

  const additionalProducts: Product[] = [
    {
      id: "5",
      name: "Molten Lava Chocolate Delight",
      category: "desserts",
      price: 249,
      weight: "Single Serve",
      rating: 5,
      reviewCount: 420,
      image: "/images/hero-lava.jpg",
    },
    {
      id: "6",
      name: "Pure Dark Ganache Fudge Slice",
      category: "classic",
      price: 199,
      weight: "Piece (150g)",
      rating: 5,
      reviewCount: 310,
      image: "/images/hero-slice.jpg",
    },
    {
      id: "7",
      name: "Royal Multi-Tier Celebration Cake",
      category: "gourmet",
      price: 1499,
      weight: "1.5 kg Tiered",
      rating: 5,
      reviewCount: 640,
      image: "/images/gallery-tiered-cake.jpg",
    },
    {
      id: "8",
      name: "Fresh Berry Forest Vanilla Cake",
      category: "gourmet",
      price: 649,
      weight: "500g (Approx)",
      rating: 5,
      reviewCount: 480,
      image: "/images/gallery-baker-fruit.jpg",
    },
  ];

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCardAdd = (prod: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(prod);
    setAddedItem(prod.id);
    setTimeout(() => setAddedItem(null), 1500);
  };

  const filteredBase =
    selectedCategory === "all"
      ? baseProducts
      : baseProducts.filter(
          (p) =>
            p.category === selectedCategory ||
            (selectedCategory === "classic" && p.category === "desserts")
        );

  const displayedProducts = expandedViewAll
    ? [...baseProducts, ...additionalProducts]
    : baseProducts;

  return (
    <section id="bestsellers" className="w-full pt-6 pb-4 px-3 sm:px-6 md:px-8">
      {/* Section Title */}
      <div className="flex items-center justify-between mb-3.5">
        <h2 className="text-lg sm:text-[20px] font-bold text-[#881423] tracking-tight">
          Bestsellers from Across the Country
        </h2>
      </div>

      {/* 4 Cards in single row (2 cols on small, 4 on desktop) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {displayedProducts.map((product) => {
          const isFav = !!favorites[product.id];
          const isRecentlyAdded = addedItem === product.id;

          return (
            <div
              key={product.id}
              className="group bg-white rounded-2xl p-3 border border-[#F0E5DE] shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(136,20,35,0.08)] hover:border-[#881423]/30 transition-all duration-300 flex flex-col justify-between relative cursor-pointer"
              onClick={(e) => handleCardAdd(product, e)}
            >
              {/* Top Row: Favorite Heart Icon */}
              <div className="flex items-center justify-between w-full">
                <button
                  type="button"
                  onClick={(e) => toggleFavorite(product.id, e)}
                  aria-label="Add to favorites"
                  className="p-1 -ml-1 text-[#C93B3B] hover:scale-125 transition-transform"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      isFav
                        ? "fill-[#C93B3B] text-[#C93B3B]"
                        : "text-[#B89696] hover:text-[#C93B3B]"
                    }`}
                  />
                </button>
              </div>

              {/* Product Cake Image */}
              <div className="relative w-full aspect-square max-h-[140px] my-1 flex items-center justify-center overflow-hidden">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 112px, 128px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-1">
                <h3 className="text-xs sm:text-[12.5px] font-bold text-[#881423] leading-snug line-clamp-2 min-h-[32px]">
                  {product.name}
                </h3>

                {/* Price and Weight */}
                <div className="mt-1 flex items-center gap-1.5 text-[11px]">
                  <span className="font-extrabold text-[#881423]">
                    ₹{product.price}
                  </span>
                  <span className="text-[#876F6A] text-[10px]">
                    • {product.weight}
                  </span>
                </div>

                {/* Rating Stars and Count */}
                <div className="mt-1 flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-2.5 h-2.5 fill-[#F5A623] text-[#F5A623]"
                      />
                    ))}
                    <span className="ml-1 text-[10px] text-[#876F6A] font-medium">
                      {product.reviewCount}
                    </span>
                  </div>

                  {/* Add / Chevron Action Button */}
                  <button
                    type="button"
                    onClick={(e) => handleCardAdd(product, e)}
                    aria-label={`Add ${product.name} to cart`}
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                      isRecentlyAdded
                        ? "bg-emerald-600 text-white scale-110"
                        : "bg-[#881423] hover:bg-[#680C18] text-white active:scale-90"
                    }`}
                  >
                    {isRecentlyAdded ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* VIEW ALL Button (Right Aligned) */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => setExpandedViewAll(!expandedViewAll)}
          className="bg-[#881423] hover:bg-[#680C18] active:scale-95 text-white font-bold text-[10.5px] tracking-wider px-5 py-1.5 rounded-full uppercase shadow-sm transition-all"
        >
          {expandedViewAll ? "SHOW LESS" : "VIEW ALL"}
        </button>
      </div>
    </section>
  );
};
