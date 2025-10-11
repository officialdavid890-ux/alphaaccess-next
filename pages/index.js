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
      {/* Top-left logo */}
      <div className="absolute top-6 left-8 z-20">
        <Image
          src="/aax-logo.png"
          alt="Alpha Access Exchange Logo"
          width={70}
          height={70}
          className="object-contain"
        />
      </div>

      {/* Africa Gold Watermark - animated softly */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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

      {/* Main Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-wider leading-tight">
          UNCHAIN THE CONTINENT
        </h1>

        <p className="mt-8 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl font-light">
          The old circus is closed. <br />
          The hunt for economic sovereignty has begun. <br />
          Welcome to the unified financial operating system for Africa.
        </p>

        <motion.button
          onClick={handleEnter}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,215,0,0.5)" }}
          whileTap={{ scale: 0.97 }}
          className="mt-12 px-10 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 
                     text-black font-semibold text-lg tracking-wide 
                     shadow-md transition-all duration-300"
        >
          ENTER THE XCHANGE
        </motion.button>

        {/* Signature line below everything */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, delay: 1 }}
          className="mt-32 text-gray-400 text-sm md:text-base font-medium italic tracking-wide"
        >
          They built us a Circus. We built an Exit.
        </motion.p>
      </motion.div>

      {/* Subtle radial glow for luxury depth */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-700/10 via-transparent to-transparent"></div>
    </div>
  );
}
