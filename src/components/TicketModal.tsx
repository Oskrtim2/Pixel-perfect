"use client";

import React, { useState } from "react";
import { X, Sparkles, Copy, Check } from "lucide-react";

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText("TICKET750");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl w-full max-w-sm p-6 shadow-2xl border border-[#F0E2D8] relative text-center animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-14 h-14 rounded-full bg-[#FCEDE8] border-2 border-[#881423] flex items-center justify-center mx-auto mb-3 text-[#881423]">
          <Sparkles className="w-7 h-7" />
        </div>

        <h3 className="text-xl font-black text-[#881423]">
          THE MAGICAL TICKET UNLOCKED!
        </h3>
        <p className="text-xs text-[#7B5E5E] mt-1.5">
          Congratulations! You received a special celebration reward of ₹750 off on your bakery order.
        </p>

        {/* Voucher Box */}
        <div className="my-5 p-4 rounded-2xl bg-gradient-to-r from-[#FCE8B3] to-[#FCD385] border-2 border-dashed border-[#881423]/40 flex items-center justify-between">
          <div className="text-left">
            <span className="text-[10px] font-bold text-[#6D4242] uppercase tracking-wider">
              Coupon Code
            </span>
            <p className="text-lg font-black text-[#881423] tracking-widest">
              TICKET750
            </p>
          </div>
          <button
            onClick={handleCopy}
            className="bg-[#881423] hover:bg-[#680C18] text-white text-xs font-bold px-3.5 py-2 rounded-full flex items-center gap-1 shadow-sm active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>COPY</span>
              </>
            )}
          </button>
        </div>

        <p className="text-[10px] text-neutral-500">
          *Valid on orders above ₹1,200. Applicable at checkout.
        </p>

        <button
          onClick={onClose}
          className="w-full mt-4 bg-[#881423] hover:bg-[#680C18] text-white font-bold py-2.5 rounded-full text-xs uppercase tracking-wider shadow-sm transition-all"
        >
          START SHOPPING
        </button>
      </div>
    </div>
  );
};
