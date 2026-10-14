import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dakingo - Handcrafted Cakes & Desserts",
  description: "Your Trusted FSSAI Certified Online Bakery for Every Celebration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#FAF1E8] text-[#331B1B]">
        {children}
      </body>
    </html>
  );
}
