// pages/_app.js
import "@/styles/global.css";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function App({ Component, pageProps, router }) {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Top-left logo */}
      <header className="absolute top-6 left-6 z-50">
        <Link href="/">
          <Image
            src="/AAX OFFICIAL LOGO.png"
            alt="AAX Logo"
            width={160}
            height={60}
            className="hover:opacity-80 transition-opacity duration-300 cursor-pointer"
            priority
          />
        </Link>
      </header>

      {/* Page fade animation */}
      <AnimatePresence mode="wait">
        <motion.main
          key={router.route}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="pt-24" // pushes page content down to make room for logo
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
