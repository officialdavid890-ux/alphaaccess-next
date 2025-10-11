import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleEnter = () => {
    router.push("/dashboard");
  };

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden text-center">
      {/* Top-left logo (No change to position/size) */}
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

      {/* Africa Gold Watermark - Enhanced Glowing Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        // Increased opacity range and slightly faster pulse for a noticeable, continuous glow effect
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

      {/* Main Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center px-6"
      >
        {/* H1 Reduced in Size (text-5xl/7xl -> text-4xl/6xl) and set to luxurious gold */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gold-400 tracking-wider leading-tight">
          UNCHAIN THE CONTINENT
        </h1>

        {/* Supporting text changed to rich gold for luxurious feel */}
        <p className="mt-8 text-gold-300 text-base md:text-lg leading-relaxed max-w-2xl font-light">
          The old circus is closed. <br />
          The hunt for economic sovereignty has begun. <br />
          Welcome to the unified financial operating system for Africa.
        </p>

        <motion.button
          onClick={handleEnter}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,215,0,0.5)" }}
          whileTap={{ scale: 0.97 }}
          className="mt-12 px-10 py-3 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 
                     text-black font-semibold text-lg tracking-wide 
                     shadow-md transition-all duration-300"
        >
          ENTER THE XCHANGE
        </motion.button>

        {/* Signature line made bolder and gold */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, delay: 1 }}
          className="mt-32 text-gold-400 text-base md:text-lg font-semibold italic tracking-wide"
        >
          They built us a Circus. We built an Exit.
        </motion.p>
      </motion.div>

      {/* Subtle radial glow ensuring black background coverage */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
  );
}
