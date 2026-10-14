"use client";

import React, { useState } from "react";
import { X, User, Lock, Mail, ArrowRight } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl w-full max-w-sm p-6 shadow-2xl border border-[#F0E2D8] relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-black text-[#881423]">Dakingo</h3>
          <p className="text-xs text-[#7B5E5E] mt-1">
            {isLogin ? "Welcome back! Login to your bakery account." : "Join Dakingo Club for exclusive cake rewards."}
          </p>

          {/* Toggle Tab */}
          <div className="flex bg-[#FAF1E8] rounded-full p-1 mt-4 border border-[#EBDCD0]">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-1.5 rounded-full text-xs font-bold transition-all ${
                isLogin ? "bg-[#881423] text-white shadow-xs" : "text-[#881423] hover:text-[#5B0D16]"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-1.5 rounded-full text-xs font-bold transition-all ${
                !isLogin ? "bg-[#881423] text-white shadow-xs" : "text-[#881423] hover:text-[#5B0D16]"
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {success ? (
          <div className="py-8 text-center text-emerald-700 space-y-2">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-600 font-bold text-xl">
              ✓
            </div>
            <p className="font-bold text-sm">
              {isLogin ? "Successfully Logged In!" : "Account Created!"}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {!isLogin && (
              <div>
                <label className="block text-[11px] font-bold text-[#6D4242] mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full h-9 pl-9 pr-3 rounded-full border border-[#E2D5CC] text-xs focus:outline-none focus:border-[#881423]"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-[11px] font-bold text-[#6D4242] mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className="w-full h-9 pl-9 pr-3 rounded-full border border-[#E2D5CC] text-xs focus:outline-none focus:border-[#881423]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#6D4242] mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-9 pl-9 pr-3 rounded-full border border-[#E2D5CC] text-xs focus:outline-none focus:border-[#881423]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-[#881423] hover:bg-[#680C18] text-white font-bold py-2.5 rounded-full text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-all"
            >
              <span>{isLogin ? "SIGN IN" : "CREATE ACCOUNT"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
