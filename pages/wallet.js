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
  Send,
  User,
} from "lucide-react";

// ... (existing balances, actions, and transactions data remains the same)

export default function Wallet() {
  const [showExchange, setShowExchange] = useState(false);
  
  // Use the new theme-friendly gold-scale colors
  const balances = [
    { title: "Local Currency Wallet", amount: "₦1,248,500.00", tag: "NGN" },
    { title: "USD / Stablecoin Wallet", amount: "$2,930.75", tag: "USD" },
    { title: "Savings & Investments", amount: "₦5,000,000.00", tag: "Portfolio" },
  ];

  const actions = [
    { name: "Deposit", icon: <ArrowDownToLine size={18} />, color: "from-green-700/40" },
    { name: "Withdraw", icon: <ArrowUpFromLine size={18} />, color: "from-red-700/40" },
    {
      name: "Cross-Border", // Renamed for clarity in UI/UX
      icon: <Send size={18} />,
      color: "from-gold-600/40",
      onClick: () => setShowExchange(true),
    },
  ];

  const transactions = [
    { type: "Received", amount: "+₦150,000.00", date: "Oct 8, 2025", status: "completed" },
    { type: "Sent", amount: "-₦45,000.00", date: "Oct 7, 2025", status: "completed" },
    { type: "Exchange", amount: "$100 → ₦148,500.00", date: "Oct 5, 2025", status: "completed" },
    { type: "Deposit", amount: "₦500,000.00", date: "Oct 3, 2025", status: "pending" },
  ];

  const [exchangeStep, setExchangeStep] = useState(1);
  
  // Custom Cross-Border Component
  const CrossBorderFlow = () => {
    switch (exchangeStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gold-400 mb-4">Step 1: Select Destination</h2>
            <select className="w-full mt-1 bg-black/70 border border-gold-800/40 rounded-lg px-3 py-3 text-white focus:outline-none focus:ring-1 focus:ring-gold-400">
              <option>Nigeria (₦)</option>
              <option>Ghana (₵)</option>
              <option>Kenya (KSh)</option>
              <option>United States ($)</option>
            </select>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setExchangeStep(2)}
              className="mt-6 w-full bg-gradient-to-r from-gold-600 to-gold-400 text-black font-bold py-3 rounded-xl shadow-lg"
            >
              Continue to Recipient <Send size={16} className="inline ml-2" />
            </motion.button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gold-400 mb-4">Step 2: Enter Recipient</h2>
            <select className="w-full mt-1 bg-black/70 border border-gold-800/40 rounded-lg px-3 py-3 text-white focus:outline-none focus:ring-1 focus:ring-gold-400">
              <option>Phone Number</option>
              <option>Bank Account</option>
              <option>Wallet ID</option>
            </select>
            <input
              type="text"
              placeholder="Recipient Identifier"
              className="w-full mt-2 bg-black/70 border border-gold-800/40 rounded-lg px-3 py-3 text-white focus:outline-none focus:ring-1 focus:ring-gold-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setExchangeStep(3)}
              className="mt-6 w-full bg-gradient-to-r from-gold-600 to-gold-400 text-black font-bold py-3 rounded-xl shadow-lg"
            >
              Continue to Amount <User size={16} className="inline ml-2" />
            </motion.button>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gold-400 mb-4">Step 3: Confirm Payment</h2>
            <div className="space-y-2 text-sm bg-black/40 p-4 rounded-lg border border-gold-800/40">
                <p className="flex justify-between text-gray-300"><span>Sending From:</span> <span className="font-semibold">USD Wallet</span></p>
                <p className="flex justify-between text-gray-300"><span>Sending To:</span> <span className="font-semibold">John Doe (Kenya)</span></p>
                <p className="flex justify-between text-gray-300"><span>Amount to Send:</span> <span className="font-semibold">$500.00</span></p>
                <p className="flex justify-between text-gray-300"><span>Fee:</span> <span className="text-green-400 font-semibold">0.5% (Low)</span></p>
                <p className="flex justify-between text-gold-400 font-bold border-t border-gold-800/50 pt-2 mt-2"><span>Recipient Gets:</span> <span className="text-xl">KSh 65,000</span></p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setExchangeStep(4)} // Final confirmation/status
              className="mt-6 w-full bg-gradient-to-r from-gold-600 to-gold-400 text-black font-bold py-3 rounded-xl shadow-lg"
            >
              Confirm Transfer <Repeat className="inline ml-2" size={16} />
            </motion.button>
            <button onClick={() => setExchangeStep(1)} className="w-full text-sm text-gray-500 hover:text-white mt-2">
                Start Over
            </button>
          </div>
        );
      case 4:
        return (
            <div className="flex flex-col items-center justify-center py-10 space-y-4">
                <Loader2 className="animate-spin text-gold-400" size={40} />
                <p className="text-gold-300 text-sm tracking-wider uppercase">
                Transfer in Progress...
                </p>
                <p className="text-xs text-gray-500 text-center">Tracking ID: AX247833. Should complete in seconds.</p>
                <button onClick={() => setShowExchange(false)} className="mt-4 text-xs text-gray-500 hover:text-white">
                    Close
                </button>
            </div>
        );
      default:
        return <p>Error</p>;
    }
  };


  return (
    <Layout>
        {/* ... (Existing main content remains the same) */}
        <div className="space-y-12 fade-in">
        {/* Page Title */}
        <div className="text-center mt-2">
          <h1 className="text-3xl font-bold text-gold-400 tracking-wider">Wallet</h1>
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
              className="rounded-2xl border border-gold-800/40 bg-gradient-to-b from-black/70 to-gold-950/10
                         backdrop-blur-lg shadow-[0_0_25px_rgba(234,179,8,0.15)] hover:shadow-[0_0_35px_rgba(234,179,8,0.3)]
                         p-5 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-gold-300 font-semibold text-lg">{wallet.title}</h3>
                <Wallet2 className="text-gold-400" size={22} />
              </div>
              <p className="text-2xl font-bold text-gold-200">{wallet.amount}</p>
              <span className="text-xs uppercase text-gray-500 tracking-wider">{wallet.tag}</span>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-gold-300 font-semibold mb-3">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            {actions.map((action, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                onClick={action.onClick}
                className={`flex items-center gap-2 px-5 py-3 bg-gradient-to-r ${action.color} 
                            to-gold-950/20 border border-gold-800/40 rounded-xl text-gold-200
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
          <h2 className="text-gold-300 font-semibold mb-3">Transaction History</h2>
          <div className="space-y-3">
            {transactions.map((tx, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex justify-between items-center bg-black/60 border border-gold-900/40
                           rounded-xl px-4 py-3 backdrop-blur-sm"
              >
                <div>
                  <p className="text-gold-200 font-medium">{tx.type}</p>
                  <span className="text-xs text-gray-500">{tx.date}</span>
                </div>
                <div className="text-right">
                  <p className={`${tx.amount.startsWith('-') ? 'text-red-400' : 'text-green-400'} font-semibold`}>
                    {tx.amount}
                  </p>
                  <span
                    className={`text-xs uppercase tracking-wider ${
                      tx.status === "completed" ? "text-gray-500" : "text-gold-400"
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
              onAnimationComplete={() => {
                if (!showExchange) setExchangeStep(1); // Reset step on close
              }}
              transition={{ duration: 0.3 }}
              className="bg-black border border-gold-800/50 rounded-2xl p-8 w-[90%] md:w-[450px]
                         shadow-[0_0_40px_rgba(234,179,8,0.25)] text-center relative"
            >
              <button
                onClick={() => {
                    setShowExchange(false);
                    setExchangeStep(1); // Reset step when manually closing
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-gold-400"
              >
                <X size={20} />
              </button>

              <div className="text-left">
                <h2 className="text-2xl font-bold text-gold-400 mb-6">Cross-Border Transfer</h2>
                <CrossBorderFlow />
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}

// Need to re-add Loader2 and other icons if they are not globally available
// For this self-contained solution, I'll assume they are from lucide-react as in pages/loans.js
// If you run into issues, ensure you import them in wallet.js
/*
import {
  Wallet2,
  ArrowDownToLine,
  ArrowUpFromLine,
  RefreshCcw,
  X,
  Repeat,
  Send,
  User,
  Loader2, // Added Loader2 here for the CrossBorderFlow component
} from "lucide-react";
*/
