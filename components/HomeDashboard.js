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

  return (
    <div>
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-2">
          Welcome to AlphaAccess Exchange
        </h2>
        <p className="text-gray-400 max-w-xl leading-relaxed text-sm md:text-base">
          Empowering Africa’s digital economy through real-time payments,
          borderless wallets, and sovereign finance infrastructure.
        </p>
      </motion.div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
        {actions.map((action, i) => (
          <motion.button
            key={action}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="bg-gradient-to-b from-yellow-800/10 to-transparent border border-yellow-600/40 
                       text-yellow-300 rounded-xl py-4 text-sm font-semibold tracking-wider
                       shadow-[0_0_10px_rgba(234,179,8,0.15)] hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]"
          >
            {action}
          </motion.button>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="mt-12">
        <h3 className="text-xl text-yellow-400 mb-4 font-semibold">
          Recent Transactions
        </h3>
        <div className="space-y-3">
          {[
            "Sent ₦5,000 to Adewale",
            "Received ₦10,000 from Tunde",
            "Paid ₦2,500 for Electricity Bill",
          ].map((txn, i) => (
            <motion.div
              key={txn}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-yellow-700/30 bg-black/40 rounded-lg px-5 py-3 text-gray-300 text-sm backdrop-blur-sm"
            >
              {txn}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
