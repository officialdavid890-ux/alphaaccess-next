// pages/loans.js
import { useState } from "react";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wallet,
  TrendingUp,
  CreditCard,
  Clock,
  CheckCircle2,
  XCircle,
  X,
  SendHorizonal,
  Loader2,
} from "lucide-react";

export default function Loans() {
  const [showModal, setShowModal] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const loans = [
    { title: "Personal Flex Loan", amount: "₦500,000", rate: "12%", term: "6 months", status: "active" },
    { title: "Business Growth Loan", amount: "₦2,000,000", rate: "10%", term: "12 months", status: "completed" },
    { title: "Instant Cash Loan", amount: "₦150,000", rate: "15%", term: "3 months", status: "pending" },
  ];

  const offers = [
    { title: "Micro Loan", desc: "Quick access to ₦50,000 - ₦250,000 for immediate needs.", icon: <Wallet className="text-gold-400" size={22} /> },
    { title: "Business Loan", desc: "Fund your next move with flexible repayment options.", icon: <TrendingUp className="text-gold-400" size={22} /> },
    { title: "Credit Advance", desc: "Short-term credit solutions with low interest.", icon: <CreditCard className="text-gold-400" size={22} /> },
  ];

  const handleSubmit = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
      setTimeout(() => {
        setShowModal(false);
        setSuccess(false);
      }, 3000);
    }, 3500);
  };

  return (
    <Layout>
      <div className="space-y-12 fade-in">
        {/* Title */}
        <div className="text-center mt-2">
          <h1 className="text-3xl font-bold text-gold-400 tracking-wider">
            Loans & Credit
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            View your active loans, explore new offers, and manage repayment with ease.
          </p>
        </div>

        {/* Active Loans */}
        <div>
          <h2 className="text-gold-300 font-semibold mb-4">Your Loans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {loans.map((loan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-5 rounded-2xl border backdrop-blur-lg transition-all duration-300 ${
                  loan.status === "active"
                    ? "border-gold-700/40 bg-gradient-to-b from-black/70 to-gold-950/10"
                    : loan.status === "completed"
                    ? "border-green-700/40 bg-gradient-to-b from-black/70 to-green-950/10"
                    : "border-gold-900/40 bg-gradient-to-b from-black/70 to-gold-950/10"
                }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-gold-300 font-semibold text-lg">
                    {loan.title}
                  </h3>
                  {loan.status === "active" && <Clock className="text-gold-400" size={20} />}
                  {loan.status === "completed" && <CheckCircle2 className="text-green-400" size={20} />}
                  {loan.status === "pending" && <XCircle className="text-gray-400" size={20} />}
                </div>
                <p className="text-gold-200 text-xl font-bold mb-1">{loan.amount}</p>
                <p className="text-sm text-gray-400">
                  Rate: <span className="text-gold-300">{loan.rate}</span> | Term: <span className="text-gold-300">{loan.term}</span>
                </p>
                <p
                  className={`mt-3 text-xs uppercase font-semibold tracking-wider ${
                    loan.status === "active"
                      ? "text-gold-400"
                      : loan.status === "completed"
                      ? "text-green-400"
                      : "text-gray-500"
                  }`}
                >
                  {loan.status}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Loan Offers */}
        <div>
          <h2 className="text-gold-300 font-semibold mb-4">Available Loan Offers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="p-6 border border-gold-800/40 rounded-2xl bg-gradient-to-b from-black/70 to-gold-950/10 shadow-[0_0_25px_rgba(255,215,0,0.1)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  {offer.icon}
                  <h3 className="text-gold-200 font-semibold text-lg">{offer.title}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">{offer.desc}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full py-2 rounded-xl bg-gradient-to-r from-gold-700 to-gold-600 text-black font-semibold shadow-lg"
                  onClick={() => {
                    setSelectedOffer(offer);
                    setShowModal(true);
                  }}
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Repayment Summary */}
        <div>
          <h2 className="text-gold-300 font-semibold mb-4">Repayment Summary</h2>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-6 border border-gold-800/40 bg-gradient-to-b from-black/70 to-gold-950/10 flex flex-col md:flex-row justify-between items-center text-gold-200 shadow-[0_0_25px_rgba(255,215,0,0.1)]"
          >
            <div>
              <p className="text-gray-400 text-sm">Total Outstanding</p>
              <h3 className="text-2xl font-bold mt-1">₦420,000</h3>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Next Repayment</p>
              <h3 className="text-2xl font-bold mt-1">₦70,000</h3>
              <p className="text-xs text-gold-300 mt-1">Due: Oct 25, 2025</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-gold-700 to-gold-600 text-black font-semibold rounded-xl"
            >
              Repay Now
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            {/* Modal */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="bg-gradient-to-b from-black/90 to-gold-950/10 border border-gold-800/40 rounded-2xl p-8 w-full max-w-md shadow-[0_0_30px_rgba(255,215,0,0.15)] relative text-gold-100">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-3 right-3 text-gold-500 hover:text-gold-300"
                >
                  <X size={20} />
                </button>

                {/* Processing Animation */}
                {processing ? (
                  <div className="flex flex-col items-center justify-center py-10 space-y-4">
                    <Loader2 className="animate-spin text-gold-400" size={40} />
                    <p className="text-gold-300 text-sm tracking-wider uppercase">
                      Processing your credit request...
                    </p>
                  </div>
                ) : success ? (
                  <div className="flex flex-col items-center justify-center py-10 space-y-4">
                    <CheckCircle2 className="text-green-400" size={45} />
                    <p className="text-green-300 text-sm tracking-wider uppercase">
                      Application Sent Successfully!
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-gold-300 text-xl font-semibold mb-2">
                      Apply for {selectedOffer?.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-6">{selectedOffer?.desc}</p>

                    <div className="space-y-4">
                      <div>
                        <label className="text-gray-400 text-sm">Loan Amount</label>
                        <input
                          type="number"
                          placeholder="₦ Amount"
                          className="w-full mt-1 bg-black/70 border border-gold-700/40 text-gold-100 rounded-xl p-2 focus:outline-none focus:ring-1 focus:ring-gold-500"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-sm">Repayment Period</label>
                        <select className="w-full mt-1 bg-black/70 border border-gold-700/40 text-gold-100 rounded-xl p-2 focus:outline-none focus:ring-1 focus:ring-gold-500">
                          <option>3 months</option>
                          <option>6 months</option>
                          <option>12 months</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-gray-400 text-sm">Purpose</label>
                        <input
                          type="text"
                          placeholder="e.g. Business expansion"
                          className="w-full mt-1 bg-black/70 border border-gold-700/40 text-gold-100 rounded-xl p-2 focus:outline-none focus:ring-1 focus:ring-gold-500"
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-gold-700 to-gold-600 text-black font-semibold mt-6"
                        onClick={handleSubmit}
                      >
                        Submit Application <SendHorizonal size={18} />
                      </motion.button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
}
