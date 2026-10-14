"use client";

import React from "react";
import Image from "next/image";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Product } from "./Bestsellers";

export interface CartItem extends Product {
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-[#FCFAF8] h-full shadow-2xl flex flex-col justify-between border-l border-[#EADAD0] animate-in slide-in-from-right duration-250"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#F0E2D8] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#881423]" />
            <h3 className="font-extrabold text-[#881423] text-lg">Your Cart</h3>
            <span className="text-xs bg-[#FCEDE8] text-[#881423] font-bold px-2 py-0.5 rounded-full">
              {items.length} {items.length === 1 ? "item" : "items"}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-[#8C7373] p-6">
              <div className="w-16 h-16 rounded-full bg-[#FAF1E8] flex items-center justify-center mb-3">
                <ShoppingBag className="w-8 h-8 text-[#A88787]" />
              </div>
              <p className="font-bold text-sm text-[#4A2E2B]">Your cart is empty</p>
              <p className="text-xs text-[#8C7373] mt-1">
                Explore our bestsellers and add freshly baked treats!
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-3 border border-[#F0E5DC] flex items-center gap-3 shadow-2xs"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-[#FAF1E8] shrink-0 border border-[#F2E5DC]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-xs text-[#881423] truncate">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-neutral-500">{item.weight}</p>
                  <p className="font-extrabold text-xs text-[#881423] mt-0.5">
                    ₹{item.price * item.quantity}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-1.5 bg-[#FAF1E8] rounded-full p-1 border border-[#E8D8CC]">
                  <button
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs text-[#881423] hover:bg-neutral-50 active:scale-90"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-xs font-bold text-[#881423] w-4 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs text-[#881423] hover:bg-neutral-50 active:scale-90"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="text-neutral-400 hover:text-red-600 p-1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 bg-white border-t border-[#F0E2D8] space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-600 font-medium">Subtotal</span>
              <span className="font-black text-lg text-[#881423]">₹{total}</span>
            </div>
            <p className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
              ✓ Free fresh delivery included on orders above ₹499!
            </p>
            <button
              onClick={() => {
                alert(`Proceeding to checkout with total ₹${total}!`);
                onClose();
              }}
              className="w-full bg-[#881423] hover:bg-[#680C18] text-white font-bold py-3 rounded-full text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
