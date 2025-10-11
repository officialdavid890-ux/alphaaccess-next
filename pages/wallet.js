// pages/wallet.js

import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { Wallet2, ArrowDownToLine, ArrowUpFromLine, RefreshCcw } from "lucide-react";

export default function Wallet() {
  const balances = [
    { title: "Local Currency Wallet", amount: "₦1,248,500.00", tag: "NGN" },
    { title: "USD / Stablecoin Wallet", amount: "$2,930.75", tag: "USD" },
    { title: "Savings & Investments", amount: "₦5,000,000.00", tag: "Portfolio" },
  ];

  const actions = [
    { name: "Deposit", icon: <ArrowDownToLine size={18} />, color: "from-green-700/40" },
    { name: "Withdraw", icon: <ArrowUpFromLine size={18} />, color: "from-red-700/40" },
    { name: "Exchange", icon: <RefreshCcw size={18} />, color: "from-yellow-700/40" },
  ];

  const transactions = [
    { type: "Received", amount: "+₦150,000.00", date: "Oct 8, 2025", status: "completed" },
    { type: "Sent", amount: "-₦45,000.00", date: "Oct 7, 2025", status: "completed" },
    { type: "Exchange", amount: "$100 → ₦148,500.00", date: "Oct 5, 2025", status: "completed" },
    { type: "Deposit", amount: "₦500,000.00", date: "Oct 3, 2025", status: "pending" },
  ];

  return (
    <Layout>
      <div className="space-y-12 fade-in">
        {/* Page Title */}
        <div className="text-center mt-2">
          <h1 className="text-3xl font-bold text-yellow-400 tracking-wider">Wallet</h1>
          <p className="text-gray-400 mt-2 text-sm">
            Manage your balances, currencies, and savings securely.
          </p>
        </div>

        {/* Balance Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {balances.map((wallet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-yellow-800/40 bg-gradient-to-b from-black/70 to-yellow-950/10
                         backdrop-blur-lg shadow-[0_0_25px_rgba(234,179,8,0.15)] hover:shadow-[0_0_35px_rgba(234,179,8,0.3)]
                         p-5 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-yellow-300 font-semibold text-lg">{wallet.title}</h3>
                <Wallet2 className="text-yellow-400" size={22} />
              </div>
              <p className="text-2xl font-bold text-yellow-200">{wallet.amount}</p>
              <span className="text-xs uppercase text-gray-500 tracking-wider">{wallet.tag}</span>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-yellow-300 font-semibold mb-3">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            {actions.map((action, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 px-5 py-3 bg-gradient-to-r ${action.color} 
                            to-yellow-950/20 border border-yellow-800/40 rounded-xl text-yellow-200
                            font-medium shadow-[0_0_10px_rgba(234,179,8,0.2)]`}
              >
                {action.icon}
                {action.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Transaction History */}
        <div>
          <h2 className="text-yellow-300 font-semibold mb-3">Transaction History</h2>
          <div className="space-y-3">
            {transactions.map((tx, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex justify-between items-center bg-black/60 b
