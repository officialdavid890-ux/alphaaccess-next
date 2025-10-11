import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleEnter = () => {
    router.push("/dashboard");
  };

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Gold Africa Watermark (animated) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.05, 0.1, 0.05] }}
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
        />
      </motion.div>

      {/* Top-left logo */}
      <div className="absolute top-6 left-8 flex items-center space-x-2 z-20">
        <Image
          src="/aax-logo.png"
          alt="Alpha Access Exchange Logo"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-wide leading-tight">
          UNCHAIN THE CONTINENT
        </h1>

        <div className="mt-8 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
          <p>The old circus is closed.</p>
          <p>The hunt for economic sovereignty has begun.</p>
          <p>Welcome to the unified financial operating system for Africa.</p>
        </div>

        <motion.button
          onClick={handleEnter}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.5)" }}
          whileTap={{ scale: 0.97 }}
          className="mt-12 px-10 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 
                     text-black font-semibold text-lg tracking-wide 
                     shadow-md transition-all duration-300"
        >
          ENTER THE XCHANGE
        </motion.button>
      </motion.div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-600/5 via-transparent to-transparent"></div>
    </div>
  );
}
