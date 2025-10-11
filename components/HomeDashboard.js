import { motion } from "framer-motion";

export default function HomeDashboard() {
  return (
    <div className="space-y-6 text-gold">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold"
      >
        Welcome to AlphaAccess Exchange
      </motion.h1>

      <div className="grid grid-cols-3 gap-4 text-center">
        {[
          "Send Money",
          "Receive Money",
          "Pay Bills",
          "Airtime/Data",
          "Scan QR",
          "Cross-Border",
        ].map((action) => (
          <div
            key={action}
            className="bg-slate/60 rounded-xl p-3 border border-gold hover:bg-gold hover:text-black transition"
          >
            {action}
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
        <div className="bg-slate/60 rounded-xl p-4 border border-gold space-y-2 text-sm">
          <p>Sent ₦5,000 to Adewale</p>
          <p>Received ₦10,000 from Tunde</p>
          <p>Paid ₦2,500 for Electricity Bill</p>
        </div>
      </div>
    </div>
  );
}
