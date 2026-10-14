"use client";

import React, { useState } from "react";
import { X, Send, MessageCircle, Phone, Clock } from "lucide-react";

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: "support",
      text: "Hello! Welcome to Dakingo Bakery Support. How can we make your celebration special today?",
    },
  ]);
  const [input, setInput] = useState("");

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "support",
          text: "Thank you for your message! Our master baker and support team are preparing your order or answer right away.",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end sm:p-6 bg-black/35 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-sm h-[480px] shadow-2xl border border-[#F0E2D8] flex flex-col justify-between overflow-hidden animate-in slide-in-from-bottom sm:slide-in-from-right duration-250"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-[#881423] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm">Dakingo Assistant</h4>
              <p className="text-[10px] text-white/80">Online | Fast Support</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/10 text-white/90 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contact Info Pills */}
        <div className="px-3 py-2 bg-[#FAF1E8] border-b border-[#EADAD0] flex items-center justify-between text-[10px] text-[#784646]">
          <span className="flex items-center gap-1">
            <Phone className="w-3 h-3 text-[#881423]" /> +91 (800) 234-5678
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#881423]" /> 9 AM – 11 PM
          </span>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FCFAF8]">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex ${
                m.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed ${
                  m.sender === "user"
                    ? "bg-[#881423] text-white rounded-br-none"
                    : "bg-white text-[#4A2E2B] border border-[#EFE2D8] rounded-bl-none shadow-2xs"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleSend}
          className="p-3 bg-white border-t border-[#F0E2D8] flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 h-9 px-3.5 rounded-full border border-[#E2D5CC] text-xs text-[#4A2E2B] focus:outline-none focus:border-[#881423]"
          />
          <button
            type="submit"
            className="w-9 h-9 rounded-full bg-[#881423] hover:bg-[#680C18] text-white flex items-center justify-center active:scale-90 transition-transform"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
