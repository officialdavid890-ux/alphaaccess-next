import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleEnter = () => {
    router.push("/dashboard"); // You can change this later
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Gold Africa Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Image
          src="/africa-map.png" // make sure this is in your /public folder
          alt="Africa Gold Map"
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>

      {/* Centered Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide">
          UNCHAIN THE CONTINENT.
        </h1>

        <p className="mt-6 text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          The old circus is closed. <br />
          The hunt for economic sovereignty has begun. <br />
          Welcome to the unified financial operating system for Africa.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleEnter}
          className="mt-10 px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-black font-semibold shadow-lg hover:shadow-yellow-500/40 transition-all"
        >
          ENTER THE XCHANGE
        </motion.button>
      </motion.div>
    </div>
  );
}
