import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-black overflow-hidden font-[Orbitron] text-white flex flex-col items-center justify-center">

      {/* Top Left Logo */}
      <div className="absolute top-6 left-8 z-20 flex items-center space-x-2">
        <Image
          src="/aax-logo.png"
          alt="Alpha Access Exchange Logo"
          width={65}
          height={65}
          priority
          className="object-contain"
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-6">
        
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-gold-400 tracking-wider leading-tight"
        >
          UNCHAIN THE CONTINENT.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl font-semibold text-gray-200"
        >
          Bank. Invest. Build. Together.
        </motion.p>

        {/* Africa Globe with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative flex items-center justify-center mt-10"
        >
          {/* Glow effect */}
          <motion.div
            initial={{ opacity: 0.4, scale: 1 }}
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[420px] h-[420px] rounded-full bg-radial from-gold-600/40 via-gold-400/10 to-transparent blur-3xl"
          />
          <Image
            src="/africa-globe.png"
            alt="Africa Globe"
            width={420}
            height={420}
            className="relative z-10 drop-shadow-[0_0_25px_rgba(255,215,0,0.3)]"
          />
        </motion.div>

        {/* ENTER THE XCHANGE Button */}
        <motion.button
          onClick={() => router.push("/dashboard")}
          animate={{
            scale: [1, 1.02, 1],
            boxShadow: [
              "0px 0px 10px rgba(255,215,0,0.3)",
              "0px 0px 20px rgba(255,215,0,0.6)",
              "0px 0px 10px rgba(255,215,0,0.3)",
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 35px rgba(255,215,0,0.8)",
          }}
          className="mt-10 px-10 py-4 rounded-md bg-gold-400 text-black font-extrabold text-lg tracking-wide shadow-lg hover:bg-gold-500 transition-all duration-300"
        >
          ENTER THE XCHANGE
        </motion.button>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-gold-400 mt-10 text-sm md:text-base tracking-wide"
        >
          They built the circus. We built the exit.
        </motion.p>
      </div>

      {/* Gradient Overlay for Cinematic Feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>
    </div>
  );
}
