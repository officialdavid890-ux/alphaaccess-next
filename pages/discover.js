// pages/discover.js
import { useState, useRef } from "react";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import PartnerModal from "../components/PartnerModal";

/* Services data (blend of fintech + lifestyle) - EXPANDED */
const SERVICES = [
  {
    id: "flights",
    title: "Flights",
    subtitle: "Global & Intra-African travel booking",
    detail:
      "Seamlessly book flights across Africa and internationally. Exclusive discounts and priority check-in options available for AlphaAccess members.",
    partnerUrl: "https://example.com/flights",
    iconSVG:
      `<svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M21 10c0-1.1-.9-2-2-2h-6l-2-5H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h4l2 5h6c1.1 0 2-.9 2-2z" stroke="#FFD700" stroke-width="1.2"/><path d="M11 11h2v2h-2z" fill="#FFD700"/></svg>`,
  },
  {
    id: "transport",
    title: "Transport",
    subtitle: "Private rides • Bus tickets • Logistics",
    detail:
      "Book private rides, intercity buses, and logistics — premium partners with dynamic pricing, priority pickups and verified drivers. Seamless payments and receipts inside your wallet.",
    partnerUrl: "https://example.com/transport",
    iconSVG:
      `<svg width="48" height="48" viewBox="0 0 24 24" fill="none"><rect x="1" y="6" width="22" height="10" rx="2" stroke="#FFD700" stroke-width="1.2"/><circle cx="7" cy="17.5" r="1.6" fill="#FFD700"/><circle cx="17" cy="17.5" r="1.6" fill="#FFD700"/></svg>`,
  },
  {
    id: "magazines",
    title: "Magazines/Media",
    subtitle: "Premium digital subscriptions & content",
    detail:
      "Manage all your digital subscriptions in one place, from financial news to lifestyle magazines. Pay instantly with your AlphaAccess wallet.",
    partnerUrl: "https://example.com/media",
    iconSVG:
      `<svg width="48" height="48" viewBox="0 0 24 24" fill="none"><rect x="4" y="2" width="16" height="20" rx="2" stroke="#FFD700" stroke-width="1.2"/><path d="M8 6h8M8 10h8M8 14h6" stroke="#FFD700" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  },
  {
    id: "food",
    title: "Food Delivery",
    subtitle: "Curated restaurants • Instant delivery",
    detail:
      "Order from curated, vetted restaurants and pop-up chefs with guaranteed quality and priority delivery windows for premium members. Integrated receipts and loyalty rewards.",
    partnerUrl: "https://example.com/food",
    iconSVG:
      `<svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M8 3v10" stroke="#FFD700" stroke-width="1.5" stroke-linecap="round"/><path d="M10 3v10" stroke="#FFD700" stroke-width="1.5" stroke-linecap="round"/><rect x="2" y="14" width="20" height="6" rx="1" stroke="#FFD700" stroke-width="1.2"/></svg>`,
  },
  {
    id: "tickets",
    title: "Events & Tickets",
    subtitle: "Exclusive concerts • Summits • Galas",
    detail:
      "Access and purchase tickets to invite-only summits, investment forums, and cultural galas. Priority entry and concierge seating for members.",
    partnerUrl: "https://example.com/tickets",
    iconSVG:
      `<svg width="48" height="48" viewBox="0 0 24 24" fill="none"><rect x="2" y="6" width="20" height="12" rx="2" stroke="#FFD700" stroke-width="1.2"/><path d="M7 6v12" stroke="#FFD700" stroke-width="1"/></svg>`,
  },
  {
    id: "utilities",
    title: "Utilities",
    subtitle: "Electricity • Airtime • Data bundles",
    detail:
      "Instant bill payments, scheduled top-ups, and corporate utility collections. Transparent fees and reliable settlement for merchants and consumers.",
    partnerUrl: "https://example.com/utilities",
    iconSVG:
      `<svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M12 2v6" stroke="#FFD700" stroke-width="1.6" stroke-linecap="round"/><path d="M8 10h8l-1 8H9l-1-8z" stroke="#FFD700" stroke-width="1.2"/><circle cx="12" cy="18" r="1" fill="#FFD700"/></svg>`,
  },
  {
    id: "insurance",
    title: "Insurance & Health",
    subtitle: "Microinsurance • Telemedicine",
    detail:
      "Access partner insurance products with quick claims and telemedicine consults. Designed for affordability and rapid dispute resolution.",
    partnerUrl: "https://example.com/insurance",
    iconSVG:
      `<svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 4v5c0 5-3 8-7 9-4-1-7-4-7-9V7l7-4z" stroke="#FFD700" stroke-width="1.2"/><path d="M9.5 12.5l1.5 1.5 3-3" stroke="#FFD700" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    id: "offers",
    title: "Partner Offers",
    subtitle: "Loyalty • Rewards • Merchant deals",
    detail:
      "Exclusive loyalty rewards and merchant deals, personalized to your activity. Redeem directly in-app for discounts and VIP experiences.",
    partnerUrl: "https://example.com/offers",
    iconSVG:
      `<svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="#FFD700" stroke-width="1.2"/><circle cx="12" cy="12" r="3" stroke="#FFD700" stroke-width="1.2"/></svg>`,
  },
  {
    id: "more",
    title: "More Integrations",
    subtitle: "Investment APIs • Developer tools",
    detail:
      "Explore the deepest integration points, including our open APIs, developer documentation, and premium access services for institutional partners.",
    partnerUrl: "https://example.com/more",
    iconSVG:
      `<svg width="48" height="48" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="1" fill="#FFD700"/><circle cx="6" cy="12" r="1" fill="#FFD700"/><circle cx="18" cy="12" r="1" fill="#FFD700"/></svg>`,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function Discover() {
  const [selected, setSelected] = useState(null);
  const [tilt, setTilt] = useState({}); 
  const gridRef = useRef(null);

  // simple mouse-parallax handler
  function handleMouseMove(e, id) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rx = (px - 0.5) * 8; // rotateY
    const ry = (py - 0.5) * -6; // rotateX
    setTilt((t) => ({ ...t, [id]: { rx, ry, px, py } }));
  }
  function resetTilt(id) {
    setTilt((t) => ({ ...t, [id]: { rx: 0, ry: 0 } }));
  }

  return (
    <Layout>
      {/* The layout already provides the black background and Africa map watermark */}

      <div className="relative z-10 max-w-7xl mx-auto py-10 px-4">
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-8">
          {/* Rich Gold Text */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gold-400 tracking-wider">Discover Exclusive Services</h1>
          {/* Rich Gold Text */}
          <p className="mt-3 text-gold-300 max-w-2xl mx-auto">Curated fintech & lifestyle partners — premium services within AlphaAccess.</p>
        </motion.div>

        <motion.div ref={gridRef} variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const t = tilt[s.id] || { rx: 0, ry: 0, px: 0, py: 0 };
            const transform = `perspective(900px) rotateX(${t.ry}deg) rotateY(${t.rx}deg) translateZ(${(t.px || 0) * 2}px)`;
            return (
              <motion.div
                key={s.id}
                variants={cardVariants}
                onMouseMove={(e) => handleMouseMove(e, s.id)}
                onMouseLeave={() => resetTilt(s.id)}
                onTouchStart={() => {}}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.995 }}
                onClick={() => setSelected(s)}
                className="relative z-10 cursor-pointer rounded-2xl border border-transparent hover:border-gold-600/30 bg-gradient-to-b from-black/80 to-black/40 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-transform"
                style={{ transform }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-black/40 border border-gold-700/10">
                    <span className="text-gold-400" dangerouslySetInnerHTML={{ __html: s.iconSVG }} />
                  </div>

                  <div className="flex-1">
                    {/* Rich Gold Text */}
                    <h3 className="text-lg font-semibold text-gold-200">{s.title}</h3>
                    {/* Rich Gold Text */}
                    <p className="mt-1 text-sm text-gold-300/80">{s.subtitle}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  {/* Rich Gold Text */}
                  <div className="text-xs text-gold-300/80">Secure payments • Verified partners</div>
                  {/* Rich Gold Text */}
                  <div className="text-sm text-gold-400 font-semibold">Open</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal - Displays details on click */}
      <AnimatePresence>
        {selected && <PartnerModal service={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </Layout>
  );
}
