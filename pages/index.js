"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import hero from "@/public/ALPHA ACCESS XCHANGE OFFICIAL.png";

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-gold">
      {!entered ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col items-center justify-center h-full text-center"
        >
          <Image
            src={hero}
            alt="AlphaAccess Logo"
            width={400}
            height={400}
            className="animate-pulse"
          />
          <h1 className="text-3xl md:text-5xl font-bold mt-6 tracking-widest">
            UNCHAIN THE CONTINENT
          </h1>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setEntered(true)}
            className="mt-10 px-8 py-3 bg-gold text-black font-semibold rounded-full hover:bg-yellow-400 transition"
          >
            ENTER THE EXCHANGE
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <iframe
            src="/app"
            className="w-full h-screen border-none"
            title="AlphaAccess Dashboard"
          />
        </motion.div>
      )}
    </div>
  );
}
