import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black text-white">
      {/* Pulsing gold glow animation */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 ring-[250px] ring-yellow-500/20 blur-[120px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-yellow-900/10 opacity-60"></div>
      </motion.div>

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="z-10 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide mb-6">
          <span className="text-yellow-400 drop-shadow-[0_0_12px_#FFD700]">
            UNCHAIN THE CONTINENT
          </span>
        </h1>

        <p className="text-gray-300 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
          The old circus is closed. The hunt for economic sovereignty has begun. <br />
          Welcome to the unified financial operating system for Africa.
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px 5px rgba(255, 215, 0, 0.4)",
          }}
          whileTap={{ scale: 0.97 }}
          onClick={() => router.push("/app")}
          className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-yellow-400/40 transition-all"
        >
          ENTER THE XCHANGE
        </motion.button>
      </motion.div>

      {/* Footer tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.2 }}
        className="absolute bottom-12 text-center z-10"
      >
        <p className="text-gray-400 bg-white/10 px-6 py-2 rounded-md text-sm font-semibold mb-6">
          They Built us a Circus. We Built an Exit.
        </p>

        <div className="flex justify-center space-x-10 text-yellow-500 text-4xl">
          <span>🧠</span>
          <span>⏳</span>
          <span>🌍</span>
        </div>
      </motion.div>
    </div>
  );
}
