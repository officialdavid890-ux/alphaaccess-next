// pages/wallet.js

import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Wallet2,
  ArrowDownToLine,
  ArrowUpFromLine,
  RefreshCcw,
  X,
  Repeat,
} from "lucide-react";

export default function Wallet() {
  const [showExchange, setShowExchange] = useState(false);

  const balances = [
    { title: "Local Currency Wallet", amount: "₦1,248,500.00", tag: "NGN" },
    { title: "USD / Stablecoin Wallet", amount: "$2,930.75", tag: "USD" },
    { title: "Savings & Investments", amount: "₦5,000,000.00", tag: "Portfolio" },
  ];

  const actions = [
    { name: "Deposit", icon: <ArrowDownToLine size={18} />, color: "from-green-700/40" },
    { name: "Withdraw", icon: <ArrowUpFromLine size={18} />, color: "from-red-700/40" },
    {
      name: "Exchange",
      icon: <RefreshCcw size={18} />,
      color: "from-yellow-700/40",
      onClick: () => setShowExchange(true),
    },
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
                onClick={action.onClick}
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
                className="flex justify-between items-center bg-black/60 border border-yellow-900/40
                           rounded-xl px-4 py-3 backdrop-blur-sm"
              >
                <div>
                  <p className="text-yellow-200 font-medium">{tx.type}</p>
                  <span className="text-xs text-gray-500">{tx.date}</span>
                </div>
                <div className="text-right">
                  <p className={`${tx.amount.startsWith('-') ? 'text-red-400' : 'text-green-400'} font-semibold`}>
                    {tx.amount}
                  </p>
                  <span
                    className={`text-xs uppercase tracking-wider ${
                      tx.status === "completed" ? "text-gray-500" : "text-yellow-400"
                    }`}
                  >
                    {tx.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Exchange Modal */}
      <AnimatePresence>
        {showExchange && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-black border border-yellow-800/50 rounded-2xl p-8 w-[90%] md:w-[450px]
                         shadow-[0_0_40px_rgba(234,179,8,0.25)] text-center relative"
            >
              <button
                onClick={() => setShowExchange(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl font-bold text-yellow-300 mb-6">Currency Exchange</h2>

              <div className="space-y-4 text-left">
                <div>
                  <label className="text-gray-400 text-sm">From</label>
                  <select className="w-full mt-1 bg-black border border-yellow-800/40 rounded-lg px-3 py-2 text-yellow-200 focus:outline-none">
                    <option>NGN - Nigerian Naira</option>
                    <option>USD - US Dollar</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-400 text-sm">To</label>
                  <select className="w-full mt-1 bg-black border border-yellow-800/40 rounded-lg px-3 py-2 text-yellow-200 focus:outline-none">
                    <option>USD - US Dollar</option>
                    <option>NGN - Nigerian Naira</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-400 text-sm">Amount</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full mt-1 bg-black border border-yellow-800/40 rounded-lg px-3 py-2 text-yellow-200 focus:outline-none"
                  />
                </div>

                <div className="text-sm text-gray-500 mt-3">
                  <p>💱 1 USD = ₦1,485.00</p>
                  <p>Fee: 0.3% (transparent rate)</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-6 w-full bg-gradient-to-r from-yellow-700 to-yellow-600 text-black font-bold py-3 rounded-xl shadow-lg"
              >
                <Repeat className="inline mr-2" size={16} />
                Confirm Exchange
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
