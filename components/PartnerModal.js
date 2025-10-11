// components/PartnerModal.js
import { motion } from "framer-motion";
import Image from "next/image";

export default function PartnerModal({ service, onClose }) {
  if (!service) return null;

  /* Example partner logos rendered inline as SVG (no external assets required).
     Replace SVGs with <Image src="/partners/xyz.png" ...> if you later add files to /public */
  const PartnerLogos = () => (
    <div className="grid grid-cols-3 gap-4 items-center">
      {/* Partner A - fintech */}
      <div className="flex items-center justify-center p-3 bg-black/60 border border-yellow-800/20 rounded-lg">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-yellow-300">
          <rect x="2" y="3" width="20" height="18" rx="3" stroke="currentColor" strokeWidth="1.2"></rect>
          <path d="M7 8h10M7 12h8" stroke="currentColor" strokeWidth="1" strokeLinecap="round"></path>
        </svg>
      </div>

      {/* Partner B - travel */}
      <div className="flex items-center justify-center p-3 bg-black/60 border border-yellow-800/20 rounded-lg">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-yellow-300">
          <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
          <path d="M6 12v6h3" stroke="currentColor" strokeWidth="1.5"></path>
        </svg>
      </div>

      {/* Partner C - lifestyle */}
      <div className="flex items-center justify-center p-3 bg-black/60 border border-yellow-800/20 rounded-lg">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-yellow-300">
          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.2"></circle>
          <path d="M5 20c1-4 6-6 7-6s6 2 7 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"></path>
        </svg>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* overlay */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* modal panel */}
      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: 12 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.98, opacity: 0, y: 8 }}
        transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative w-full max-w-3xl rounded-2xl bg-gradient-to-b from-black/95 to-black/80 border border-yellow-800/30 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-gray-300 hover:text-yellow-300"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/5 flex flex-col items-start gap-4">
            <div className="w-20 h-20 rounded-lg bg-black/50 border border-yellow-700/10 flex items-center justify-center">
              {/* service icon (re-rendered) */}
              <div className="text-yellow-300" dangerouslySetInnerHTML={{ __html: service.iconSVG }} />
            </div>
            <h3 className="text-2xl font-bold text-yellow-200">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.subtitle}</p>

            <div className="mt-4">
              <button
                onClick={() => {
                  // placeholder action: open partner/external flow
                  if (service.partnerUrl) window.open(service.partnerUrl, "_blank", "noopener");
                  onClose();
                }}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-yellow-700 to-yellow-600 text-black font-semibold shadow"
              >
                Launch Service
              </button>
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <p className="text-gray-300 leading-relaxed">{service.detail}</p>

            <div className="mt-6">
              <h4 className="text-sm text-gray-400 uppercase tracking-wide mb-3">Trusted partners</h4>
              <PartnerLogos />
            </div>

            <div className="mt-6 text-xs text-gray-500">
              <div>Payments secured with bank-grade encryption</div>
              <div className="mt-2">Availability and pricing depend on partner networks.</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
