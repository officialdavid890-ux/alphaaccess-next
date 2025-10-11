"use client";

import { motion } from "framer-motion";

export default function HomeDashboard() {
  const actions = [
    "Send Money",
    "Receive Money",
    "Pay Bills",
    "Airtime/Data",
    "Scan QR",
    "Cross-Border",
  ];

  const transactions = [
    "Sent ₦5,000 to Adewale",
    "Received ₦10,000 from Tunde",
    "Paid ₦2,500 for Electricity Bill",
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gold-400 tracking-wide mb-3 font-orbitron">
          Welcome to AlphaAccess Xchange
        </h2>

        <p className="text-gray-400 leading-relaxed max-w-2xl text-sm md:text-base font-inter">
          Empowering Africa’s digital economy through real-time payments,
          borderless wallets, and sovereign finance infrastructure built for
          tomorrow’s financial freedom.
        </p>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-8"
      >
        {actions.map((action, i) => (
          <motion.button
            key={action}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="relative overflow-hidden rounded-xl border border-gold-700/30 
                       bg-gradient-to-b from-gold-900/10 to-transparent text-gold-200 
                       py-4 font-semibold tracking-wide shadow-[0_0_10px_rgba(212,175,55,0.15)]
                       hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:text-gold-400
                       backdrop-blur-md transition-all duration-300"
          >
            {action}
          </motion.button>
        ))}
      </motion.div>

      {/* Divider Line */}
      <div className="border-t border-gold-700/20 mt-12 mb-6" />

      {/* Recent Transactions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h3 className="text-xl text-gold-400 mb-4 font-semibold font-orbitron">
          Recent Transactions
        </h3>

        <div className="space-y-3">
          {transactions.map((txn, i) => (
            <motion.div
              key={txn}
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * i }}
              className="border border-gold-800/30 bg-slate/40 rounded-lg px-5 py-3 
                         text-gray-300 text-sm backdrop-blur-md hover:bg-slate/60 
                         transition duration-300"
            >
              {txn}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
