// pages/discover.js
import { useState } from "react";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";

/* -------------------------
   Premium Inline SVG Icons
   (no external icon dependency)
   ------------------------- */
function IconTransport() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="1" y="6" width="22" height="10" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="7" cy="17.5" r="1.6" fill="currentColor" />
      <circle cx="17" cy="17.5" r="1.6" fill="currentColor" />
      <path d="M3 11h18" stroke="currentColor" strokeWidth="1" opacity="0.7" />
    </svg>
  );
}
function IconFood() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8 3v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 3v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 13h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="2" y="14" width="20" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
function IconTickets() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 6v12" stroke="currentColor" strokeWidth="1" />
      <path d="M17 6v12" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
function IconUtilities() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 10h8l-1 8H9l-1-8z" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <circle cx="12" cy="18" r="1" fill="currentColor" />
    </svg>
  );
}
function IconInsurance() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3l7 4v5c0 5-3 8-7 9-4-1-7-4-7-9V7l7-4z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M9.5 12.5l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconOffers() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 12h18" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

/* -------------------------
   Data: premium services
   ------------------------- */
const SERVICES = [
  {
    id: "transport",
    title: "Transport",
    subtitle: "Private rides • Bus tickets • Logistics",
    Icon: IconTransport,
    detail:
      "Book private rides, intercity buses, and logistics services — premium transport partners with dynamic pricing and priority support.",
  },
  {
    id: "food",
    title: "Food Delivery",
    subtitle: "Curated restaurants • Instant delivery",
    Icon: IconFood,
    detail:
      "Order from curated, vetted restaurants with guaranteed quality and priority delivery windows for premium members.",
  },
  {
    id: "tickets",
    title: "Events & Tickets",
    subtitle: "Exclusive concerts • Summits • Galas",
    Icon: IconTickets,
    detail:
      "Purchase tickets and access invite-only events — from investorfacing galas to tech summits across the continent.",
  },
  {
    id: "utilities",
    title: "Utilities",
    subtitle: "Electricity • Airtime • Data bundles",
    Icon: IconUtilities,
    detail:
      "Pay utility bills instantly, recharge airtime/data, or set scheduled payments for businesses and households.",
  },
  {
    id: "insurance",
    title: "Insurance & Health",
    subtitle: "Microinsurance • Telemedicine",
    Icon: IconInsurance,
    detail:
      "Access partner insurance products and health services built for affordability and fast claims for our users.",
  },
  {
    id: "offers",
    title: "Partner Offers",
    subtitle: "Loyalty • Rewards • Merchant deals",
    Icon: IconOffers,
    detail:
      "Exclusive partner offers, loyalty rewards and cross-product bundles for active AlphaAccess users.",
  },
];

/* -------------------------
   Framer Motion variants
   ------------------------- */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function Discover() {
  const [selected, setSelected] = useState(null);

  return (
    <Layout>
      {/* Cinematic background layer with animated gold particles (SVG inline) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* radial dim to add depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
        <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none" aria-hidden>
          <defs>
            <radialGradient id="g" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="1" />
            </radialGradient>
            <linearGradient id="gold" x1="0%" x2="100%">
              <stop offset="0%" stopColor="#e6b800" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#ffd54f" stopOpacity="0.06" />
            </linearGradient>
          </defs>

          {/* soft sweeping gold sheen */}
          <rect x="0" y="0" width="800" height="600" fill="url(#gold)" opacity="0.03" />

          {/* animated particles — subtle, slow upward drift */}
          {Array.from({ length: 28 }).map((_, i) => {
            const cx = 50 + Math.sin(i * 1.3) * 35 + (i % 7) * 6;
            const cy = 80 + (i * 17) % 300;
            const r = 1.2 + (i % 4) * 0.8;
            const delay = (i % 6) * 1.2;
            return (
              <circle
                key={i}
                cx={`${cx}`}
                cy={`${cy}`}
                r={r}
                fill="#ffd54f"
                opacity="0.06"
              >
                <animate
                  attributeName="cy"
                  values={`${cy}; ${cy - 30}; ${cy}`}
                  dur={`${8 + (i % 5)}s`}
                  repeatCount="indefinite"
                  begin={`${delay}s`}
                />
                <animate
                  attributeName="opacity"
                  values="0.02;0.12;0.02"
                  dur={`${6 + (i % 4)}s`}
                  repeatCount="indefinite"
                  begin={`${delay + 0.5}s`}
                />
              </circle>
            );
          })}
        </svg>
      </div>

      {/* Page Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-400 tracking-wider">
            Discover Exclusive Services
          </h1>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            Curated partners, premium services and lifestyle essentials — all within the AlphaAccess ecosystem.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((s, idx) => (
            <motion.div
              key={s.id}
              variants={cardVariants}
              whileHover={{ scale: 1.035 }}
              whileTap={{ scale: 0.995 }}
              onClick={() => setSelected(s)}
              className="relative z-10 cursor-pointer rounded-2xl border border-transparent hover:border-yellow-600/40
                        bg-gradient-to-b from-black/70 to-black/40 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center bg-black/40 border border-yellow-700/10">
                  <span className="text-yellow-400">
                    <s.Icon />
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-yellow-200">{s.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{s.subtitle}</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-xs text-gray-400">Trusted partners • Secure payments</div>
                <div className="text-sm text-yellow-300 font-semibold">Open</div>
              </div>

              {/* subtle gold edge */}
              <div className="absolute -inset-px rounded-2xl pointer-events-none"
                   style={{
                     background:
                       "linear-gradient(90deg, rgba(255,213,79,0.03), rgba(0,0,0,0))",
                     WebkitMask:
                       "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                     padding: "1px",
                   }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
            >
              <div className="w-full max-w-2xl rounded-2xl p-8 bg-gradient-to-b from-black/90 to-black/70 border border-yellow-800/30 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-black/40 flex items-center justify-center border border-yellow-700/10">
                      <span className="text-yellow-400">
                        <selected.Icon />
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-yellow-200">{selected.title}</h3>
                      <p className="text-gray-400 mt-1">{selected.subtitle}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelected(null)}
                    className="text-gray-300 hover:text-yellow-300"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-6 text-gray-300 leading-relaxed">
                  <p>{selected.detail}</p>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => {
                      // placeholder action — you can wire to partner flow
                      setSelected(null);
                    }}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-700 to-yellow-600 text-black font-semibold shadow"
                  >
                    Launch Service
                  </button>

                  <button
                    onClick={() => setSelected(null)}
                    className="px-5 py-3 rounded-xl border border-yellow-800/30 text-yellow-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
}
