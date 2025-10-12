// pages/index.js
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Landing() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">

      {/* Top-left Logo */}
      <div className="absolute top-6 left-8 z-40">
        <Image src="/aax-logo.png" alt="Alpha Access" width={72} height={72} priority />
      </div>

      {/* Overall container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20">

        {/* HERO - two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left column - text/buttons */}
          <div className="md:col-span-6 col-span-1">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-extrabold text-4xl md:text-6xl leading-tight tracking-tight text-[#F7EED4]"
            >
              UNCHAIN THE <br /> CONTINENT.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12 }}
              className="mt-4 text-lg font-semibold text-gold-400"
            >
              Bank. Invest. Build. Together.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-6 text-gray-300 max-w-xl leading-relaxed"
            >
              Alpha Access Exchange is Africa&apos;s financial operating system — connecting people, traders, and institutions through a united, borderless economic network.
            </motion.p>

            {/* Buttons: left gold, right outline */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <motion.button
                onClick={() => router.push("/dashboard")}
                whileHover={{ scale: 1.02 }}
                className="px-6 md:px-8 py-3 rounded-md bg-gold-400 text-black font-semibold shadow-[0_6px_20px_rgba(255,215,0,0.18)]"
                aria-label="Enter the Xchange"
              >
                ENTER THE XCHANGE
              </motion.button>

              <button
                onClick={() => router.push("/how-it-works")}
                className="px-6 md:px-8 py-3 rounded-md border border-[#2b2b2b] bg-black/50 text-gold-300 font-semibold"
                aria-label="Learn how it works"
              >
                LEARN HOW IT WORKS
              </button>
            </div>
          </div>

          {/* Right column - glowing globe */}
          <div className="md:col-span-6 col-span-1 flex justify-center md:justify-end">
            <div className="relative w-[420px] h-[420px]">
              {/* subtle animated radial glow behind globe */}
              <motion.div
                initial={{ opacity: 0.35 }}
                animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.02, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 left-1/2 -translate-x-1/2 mx-auto w-[420px] h-[420px] rounded-full"
              >
                <div className="w-full h-full rounded-full bg-radial from-gold-600/30 via-gold-400/10 to-transparent blur-3xl" />
              </motion.div>

              {/* Globe image (transparent background) */}
              <div className="relative z-10 w-full h-full">
                <Image
                  src="/africa-globe.png"
                  alt="Africa Globe"
                  fill
                  sizes="(min-width: 768px) 420px, 80vw"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider spacing */}
        <div className="mt-12" />

        {/* 'They built the circus...' section */}
        <div className="max-w-4xl mt-10">
          <h2 className="text-4xl font-extrabold text-[#F6F0E4] leading-tight">
            They built the circus. <span className="text-gold-400">We built the exit.</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl leading-relaxed">
            We&apos;re redefining value for a connected Africa — where digital finance, investment, and innovation converge. Alpha Access empowers users to hold, trade, earn, and invest — all within one sovereign ecosystem.
          </p>

          {/* Pillars row */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image src="/brain.png" alt="smart" width={48} height={48} />
              </div>
              <div>
                <div className="text-sm font-bold text-gold-400">SMART FINANCE</div>
                <div className="text-gray-300 text-sm mt-1">Your AI powered wallets for instant payments, yield.</div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image src="/hourglass.png" alt="time" width={48} height={48} />
              </div>
              <div>
                <div className="text-sm font-bold text-gold-400">TIME AS WEALTH</div>
                <div className="text-gray-300 text-sm mt-1">Access yield opportunities that grow while you rest.</div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image src="/box.png" alt="vault" width={48} height={48} />
              </div>
              <div>
                <div className="text-sm font-bold text-gold-400">OPEN VAULT</div>
                <div className="text-gray-300 text-sm mt-1">Trade, invest, and manage your assets securely.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Network section with flat map watermark on right */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 col-span-1">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gold-400 leading-tight">
              A network built for everyone — <br className="hidden md:block" /> from Lagos to Nairobi, Accra to Cairo.
            </h3>
            <p className="mt-4 text-gray-300 max-w-xl">Trade, send and invest seamlessly, regardless of borders or currencies.</p>

            <div className="mt-8">
              <button
                onClick={() => router.push("/dashboard")}
                className="px-6 py-3 rounded-md bg-gold-400 text-black font-semibold shadow-[0_6px_20px_rgba(255,215,0,0.12)]"
              >
                EXPLORE THE ECOSYSTEM
              </button>
            </div>
          </div>

          <div className="md:col-span-5 col-span-1 flex justify-center md:justify-end relative">
            {/* Flat map on the right as watermark */}
            <div className="w-[250px] h-[250px] opacity-80">
              <Image
                src="/africa-map.png"
                alt="Africa Map Flat"
                fill
                sizes="250px"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>

        {/* Final CTA with shield */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 items-center pb-24">
          <div className="md:col-span-8 col-span-1">
            <h4 className="text-3xl md:text-4xl font-extrabold text-[#F6F0E4]">The Future of African Finance is Ours to Build.</h4>
            <p className="mt-3 text-gray-300">Thousands already building sovereignty through Alpha Access.</p>
          </div>

          <div className="md:col-span-4 col-span-1 flex items-center justify-center md:justify-end space-x-6">
            <div className="hidden sm:block">
              <Image src="/shield.png" alt="shield" width={72} height={72} />
            </div>
            <button
              onClick={() => router.push("/signup-preview")}
              className="px-6 md:px-8 py-3 rounded-md bg-gold-400 text-black font-extrabold"
            >
              CREATE YOUR ACCOUNT
            </button>
          </div>
        </div>
      </div>

      {/* subtle global vignette/gradient overlay for cinematic depth */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-transparent via-black/40 to-black" />

    </div>
  );
}
