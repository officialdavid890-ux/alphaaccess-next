// components/TopBar.js
import Image from "next/image";
import Link from "next/link";
import { Bell, User, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// The TopBar component now includes the SME Toggle logic
export default function TopBar() {
  const [isSmeMode, setIsSmeMode] = useState(false); // State for SME toggle

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
        {/* AAX Logo Placeholder (Using text due to logo path being relative to /public) */}
        <Image
          src="/aax-logo.png"
          alt="Alpha Access Exchange Logo"
          width={40}
          height={40}
          className="object-contain"
          priority
        />
        <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase">
                {isSmeMode ? 'SME Mode' : 'Consumer'}
            </span>
            <span className="text-md font-bold tracking-wide text-white">
                AlphaAccess
            </span>
        </div>
      </div>

      {/* MIDDLE: Balance/Wallet Info (Consumer Mode) or Business Name (SME Mode) */}
      <div className="flex flex-col items-end">
        <span className="text-sm text-gray-400">
            {isSmeMode ? 'Business Wallet' : 'Local Currency'}
        </span>
        <span className="text-xl font-bold text-gold-400">
          {isSmeMode ? '₦15,000,000' : '₦1,248,500'}
        </span>
        <span className="text-xs text-gray-500">
          {isSmeMode ? '$30,000.00 USD' : '$2,930.75 USD'}
        </span>
      </div>

      {/* RIGHT: Quick Actions (Notifications, Profile/SME Toggle) */}
      <div className="flex items-center space-x-4 text-gray-300">
        <button className="hover:text-gold-400 transition">
          <Bell size={24} />
        </button>

        {/* SME Toggle Button */}
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
