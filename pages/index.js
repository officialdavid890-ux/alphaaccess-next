import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from 'next/link';
import { Lock, Repeat2, Zap, DollarSign } from 'lucide-react';

// Key feature data structure with icons
const KeyFeatures = [
    { title: "Secure Wallet", subtitle: "Bank-grade encryption, sovereign control.", icon: Lock },
    { title: "Cross-Border Access", subtitle: "Send & receive instantly across Africa.", icon: Repeat2 },
    { title: "Earn Yield & Low Fees", subtitle: "Transparent, minimal fees. Earn passive yield.", icon: Zap },
    { title: "Trade Assets", subtitle: "Trade peer-to-peer with local currency.", icon: DollarSign },
];

// Image Caption Data for tooltip/accessibility
const ImageCaptions = {
    '/brain.png': "Sovereignty",
    '/hourglass.png': "Instant Value",
    '/box.png': "Secure Wealth",
};

export default function Home() {
  const router = useRouter();

  const handleEnter = () => {
    // Primary CTA: Directs user to the signup preview flow (Progressive Disclosure)
    router.push("/signup-preview");
  };

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden text-center">
      
      {/* Absolute Header/Top Links */}
      <header className="absolute top-0 left-0 w-full z-20 flex justify-end px-8 py-4">
        <nav className="flex space-x-6 text-sm font-semibold">
          <Link href="/how-it-works" className="text-gold-300 hover:text-gold-400 transition">How it Works</Link>
          <Link href="/security" className="text-gold-300 hover:text-gold-400 transition">Security</Link>
          <Link href="/support" className="text-gold-300 hover:text-gold-400 transition">Support</Link>
        </nav>
      </header>

      {/* Top-left logo (Positioning retained) */}
      <div className="absolute top-6 left-8 z-20">
        <Image
          src="/aax-logo.png"
          alt="Alpha Access Exchange Logo"
          width={70}
          height={70}
          className="object-contain"
          priority
        />
      </div>

      {/* Africa Gold Watermark - Continuous Glowing Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Image
          src="/africa-map.png"
          alt="Africa Gold Watermark"
          layout="fill"
          objectFit="contain"
          quality={100}
          className="pointer-events-none select-none"
          priority
        />
      </motion.div>

      {/* Main Content (Above the fold) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center px-6 max-w-4xl pt-24"
      >
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-gold-400 tracking-wider leading-tight">
          UNCHAIN THE CONTINENT
        </h1>

        {/* New Explainer Paragraph */}
        <p className="mt-6 text-gold-300 text-md leading-relaxed max-w-2xl mx-auto font-light">
          Alpha Access Exchange is a unified financial operating system built for Africa. Trade assets, earn yield, control your finances, all on a platform designed for sovereignty, security, and inclusivity.
        </p>

        {/* Feature Icons Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-10 w-full max-w-3xl">
            {KeyFeatures.map((feature, i) => (
                <div key={i} className="flex flex-col items-center space-y-2 text-gold-300">
                    <feature.icon size={36} className="text-gold-400" />
                    <p className="font-semibold text-sm text-gold-200">{feature.title}</p>
                    <p className="text-xs text-gold-700 hidden sm:block">{feature.subtitle}</p>
                </div>
            ))}
        </div>

        {/* CTA Section (Primary + Secondary) */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
             {/* Primary CTA Button */}
            <motion.button
              onClick={handleEnter}
              animate={{
                scale: [1, 1.01, 1],
                boxShadow: ["0px 0px 8px rgba(255,215,0,0.5)", "0px 0px 15px rgba(255,215,0,0.8)", "0px 0px 8px rgba(255,215,0,0.5)"]
              }}
              transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(255,215,0,0.9)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 
                         text-black font-extrabold text-lg tracking-wide shadow-md transition-all duration-100"
            >
              START ACCESSING YOUR SOVEREIGNTY
            </motion.button>

            {/* Secondary CTA Button: Learn How It Works */}
            <Link href="/how-it-works" passHref legacyBehavior>
                <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-12 py-4 rounded-full bg-black border border-gold-400 text-gold-400 
                               font-semibold text-lg hover:bg-gold-900/50 transition duration-300 flex items-center justify-center"
                >
                    Learn How It Works
                </motion.a>
            </Link>
        </div>

        {/* Trust Signals */}
        <p className="mt-8 text-gold-700 text-sm font-semibold">
            Join 15,000+ Africans already using Alpha Access. | $50M+ secured assets.
        </p>

        {/* Product Images & Captions Section */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex justify-center space-x-10 mt-24 mb-8"
        >
            {['/brain.png', '/hourglass.png', '/box.png'].map((src) => (
                <div key={src} className="relative group">
                    <Image 
                        src={src} 
                        alt={ImageCaptions[src]} 
                        width={80} 
                        height={80} 
                        className="object-contain" 
                        priority
                    />
                    {/* Caption/Tooltip */}
                    <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 
                                     text-xs font-medium text-gold-400 opacity-80 group-hover:opacity-100 transition duration-300">
                        {ImageCaptions[src]}
                    </span>
                </div>
            ))}
        </motion.div>

        {/* Signature line - Bold and rich gold text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, delay: 1.8 }}
          className="text-gold-400 text-base md:text-lg font-semibold italic tracking-wide mt-8"
        >
          They built us a Circus. We built an Exit.
        </motion.p>
      </motion.div>

      {/* Subtle radial glow ensures black background coverage */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
  );
}
