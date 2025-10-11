// pages/wallet.js

import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { ArrowDownCircle, ArrowUpCircle, RefreshCcw } from "lucide-react";

export default function Wallet() {
  const balances = [
    { name: "Local Currency Wallet", amount: "₦124,300.00" },
    { name: "USD / Stablecoin Wallet", amount: "$102.45" },
    { name: "Savings & Investments", amount: "₦820,000.00" },
  ];

  const transactions = [
    { type: "Deposit", amount: "₦20,000", status: "Completed" },
    { type: "Withdraw", amount: "₦10,000", status: "Pending" },
    { type: "Swap", amount: "$50 → ₦63,000", status: "Completed" },
  ];

  return (
    <Layout>
      <div className="space-y-10 fade-in">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-yellow-400 tracking-widest">
            My Wallet
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Manage all your balances and transactions
          </p>
        </div>

        {/* Balances Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {balances.map((wallet, i) => (
            <motion.div
              key={wallet.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-yellow-700/30 bg-gradient-to-b from-yellow-900/10 to-transparent
                         backdrop-blur-lg shadow-[0_0_20px_rgba(234,179,8,0.15)] hover:shadow-[0_0_25px_rgba(234,179,8,0.35)]
                         transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                {wallet.name}
              </h3>
              <p className="text-2xl font-bold text-yellow-400">{wallet.amount}</p>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center flex-wrap gap-6 mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500"
          >
            <ArrowDownCircle size={20} /> Deposit
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500"
          >
            <ArrowUpCircle size={20} /> Withdraw
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500"
          >
            <RefreshCcw size={20} /> Exchange
          </motion.button>
        </div>

        {/* Transaction History */}
        <div className="mt-10">
          <h2 className="text-xl text-yellow-400 font-semibold mb-4 text-center">
            Transaction History
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {transactions.map((txn, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border border-yellow-800/40 bg-black/50 backdrop-blur-md px-5 py-4 rounded-xl flex justify-between items-center"
              >
                <div>
                  <p className="text-yellow-300 font-semibold">{txn.type}</p>
                  <p className="text-gray-400 text-sm">{txn.status}</p>
                </div>
                <p className="text-yellow-400 font-bold">{txn.amount}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
