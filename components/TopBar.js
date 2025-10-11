// components/TopBar.js
import Image from "next/image";
import Link from "next/link";
import { Bell, User, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TopBar() {
  const [isSmeMode, setIsSmeMode] = useState(false); 

  const toggleSmeMode = () => {
    setIsSmeMode(!isSmeMode);
  };

  const modeIcon = isSmeMode ? (
    <Briefcase size={20} className="text-gold-400" />
  ) : (
    <User size={20} className="text-gold-400" />
  );

  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gold-800/50 z-50 flex items-center justify-between px-6 py-3">
      {/* LEFT: Branding/Mode Indicator */}
      <div className="flex items-center space-x-3">
        <Link href="/dashboard" className="flex items-center space-x-3 cursor-pointer">
            <Image
              src="/aax-logo.png"
              alt="Alpha Access Exchange Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
        </Link>
        <div className="flex flex-col text-sm">
            <span className="text-xs text-gold-400 uppercase font-semibold">
                {isSmeMode ? 'SME Mode' : 'Consumer'}
            </span>
            <span className="text-xs text-gold-700">
                {isSmeMode ? 'Business Dashboard' : 'Personal Dashboard'}
            </span>
        </div>
      </div>

      {/* MIDDLE: Balance/Wallet Info - All Rich Gold Text (Simplified Display) */}
      <div className="flex flex-col items-end text-sm">
        <span className="text-xs text-gold-300">
            Total Balance (USD)
        </span>
        <span className="text-lg font-bold text-gold-400">
          {isSmeMode ? '$30,000.00' : '$4,179.25'}
        </span>
        <span className="text-xs text-gold-700">
          Local: {isSmeMode ? '₦15M' : '₦1.2M'}
        </span>
      </div>

      {/* RIGHT: Quick Actions */}
      <div className="flex items-center space-x-4 text-gold-300">
        <button className="hover:text-gold-400 transition">
          <Bell size={24} />
        </button>

        {/* SME Toggle Button (Gold-themed) */}
        <motion.button
          onClick={toggleSmeMode}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-gold-900/50 border border-gold-600/50 hover:bg-gold-800/60 transition-all"
          aria-label={isSmeMode ? "Switch to Consumer Mode" : "Switch to SME Mode"}
        >
          {modeIcon}
        </motion.button>
      </div>
    </header>
  );
}
