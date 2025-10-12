import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";

// --- Data for the Pillared Section (Mapping to Brain, Hourglass, Box) ---
const PillarsData = [
  { 
    title: "SMART FINANCE", 
    detail: "Your AI powered wallets for instant payments, yield.", 
    image: "/brain.png" 
  },
  { 
    title: "TIME AS WEALTH", 
    detail: "Access yield opportunities that grow while you rest.", 
    image: "/hourglass.png" 
  },
  { 
    title: "OPEN VAULT", 
    detail: "Trade, invest, and manage your assets securely.", 
    image: "/box.png" 
  },
];

// --- Component ---
export default function Home() {
  const router = useRouter();

  const handleEnter = () => {
    router.push("/signup-preview");
  };

  const handleLearnMore = () => {
    router.push("/how-it-works");
  };

  const handleCreateAccount = () => {
    router.push("/signup-preview");
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden font-[Orbitron] text-white">

      {/* Header Links */}
      <header className="absolute top-0 left-0 w-full z-20 flex justify-end px-8 py-4">
        <nav className="flex space-x-6 text-sm font-semibold">
          <Link href="/how-it-works" className="text-gold-300 hover:text-gold-400 transition">
            How it Works
          </Link>
          <Link href="/security" className="text-gold-300 hover:text-gold-400 transition">
            Security
          </Link>
          <Link href="/support" className="text-gold-300 hover:text-gold-400 transition">
            Support
          </Link>
        </nav>
      </header>

      {/* Logo */}
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

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-left text-center md:w-1/2 w-full space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-gold-400 tracking-wider leading-tight">
            UNCHAIN THE CONTINENT.
          </h1>

          <p className="text-xl font-bold text-white">Bank. Invest. Build. Together.</p>
          <p className="text-gold-300/80 max-w-lg md:mx-0 mx-auto leading-relaxed font-light">
            Alpha Access Exchange is Africa&apos;s financial operating system — connecting people, traders, and institutions through a united, borderless economic network.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <motion.button
              onClick={handleEnter}
              animate={{
                scale: [1, 1.01, 1],
                boxShadow: [
                  "0px 0px 8px rgba(255,215,0,0.5)",
                  "0px 0px 15px rgba(255,215,0,0.8)",
                  "0px 0px 8px rgba(255,215,0,0.5)",
                ],
              }}
              transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(255,215,0,0.9)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-md bg-gold-400 text-black font-extrabold text-lg tracking-wide shadow-md"
            >
              ENTER THE XCHANGE
            </motion.button>

            <button
              onClick={handleLearnMore}
              className="px-8 py-3 rounded-md border border-gold-400 text-gold-400 font-semibold hover:bg-gold-900/50 transition duration-300"
            >
              LEARN HOW IT WORKS
            </button>
          </div>
        </motion.div>

        {/* Africa Map Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:w-1/2 w-full flex justify-center md:justify-end mt-12 md:mt-0 relative"
        >
          <Image
            src="/africa-map.png"
            alt="Africa Digital Map"
            width={450}
            height={450}
            priority
            className="opacity-75"
          />
        </motion.div>
      </div>

      {/* Core Philosophy Section */}
      <div className="bg-black py-16 px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center max-w-4xl mx-auto mb-12 space-y-4"
        >
          <h2 className="text-4xl font-extrabold text-white">
            They built the circus. <span className="text-gold-400">We built the exit.</span>
          </h2>
          <p className="text-gold-300/90 text-md max-w-3xl mx-auto font-light">
            We&apos;re redefining value for a connected Africa where digital finance, investment, and innovation converge. Alpha Access empowers users to hold, trade, earn and invest—all within one sovereign ecosystem.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-10 max-w-5xl mx-auto">
          {PillarsData.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
              className="flex flex-col items-center text-center md:w-1/4 w-full px-4 space-y-3"
            >
              <Image
                src={pillar.image}
                alt={pillar.title}
                width={60}
                height={60}
                className="object-contain"
              />
              <h3 className="text-xl font-bold text-gold-400 tracking-wider mt-4">
                {pillar.title}
              </h3>
              <p className="text-gold-300/80 text-sm">{pillar.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Network & Footer CTA */}
      <div className="py-16 px-6 relative z-10 w-full bg-slate">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-12 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-3/5 space-y-4"
          >
            <h2 className="text-4xl font-extrabold text-gold-400">
              A network built for everyone — <br className="hidden md:block" /> from Lagos to Nairobi, Accra to Cairo.
            </h2>
            <p className="text-gold-300/80 text-lg font-light max-w-xl">
              Trade, send and invest seamlessly, regardless of borders or currencies.
            </p>
            <button
              onClick={() => router.push("/dashboard")}
              className="mt-4 px-8 py-3 rounded-md bg-gold-600 text-black font-semibold hover:bg-gold-400 transition duration-300"
            >
              EXPLORE THE ECOSYSTEM
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1 }}
            className="md:w-2/5 flex justify-center relative opacity-40"
          >
            <Image
              src="/africa-map.png"
              alt="Africa Silhouette"
              width={250}
              height={250}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* Final CTA Shield Section */}
      <div className="bg-black py-20 px-6 relative z-10 w-full border-t border-gold-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0"
        >
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-3xl font-extrabold text-white">
              The Future of African Finance is Ours to Build.
            </h2>
            <p className="text-gold-700 font-semibold">
              Thousands already building sovereignty through Alpha Access.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden sm:block">
              <Image
                src="/shield.png"
                alt="Alpha Access Shield"
                width={60}
                height={60}
                className="opacity-80"
              />
            </div>
            <button
              onClick={handleCreateAccount}
              className="px-10 py-4 rounded-md bg-gold-400 text-black font-extrabold hover:bg-gold-600 transition duration-300"
            >
              CREATE YOUR ACCOUNT
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
  );
}
