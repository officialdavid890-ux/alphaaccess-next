// pages/support.js
import Layout from "../components/Layout";
import { Mail, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Support() {
  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto space-y-12 text-center py-8"
      >
        <div className="mt-2">
          <h1 className="text-3xl font-bold text-gold-400 tracking-wider">
            Support & FAQ
          </h1>
          <p className="text-gold-300/80 mt-2 text-base">
            For immediate assistance, please check our frequently asked questions or contact us directly.
          </p>
        </div>

        <div className="bg-slate border border-gold-800/40 rounded-2xl p-6 shadow-[0_0_20px_rgba(255,215,0,0.1)] space-y-6">
          
          <h2 className="text-xl font-semibold text-gold-400 border-b border-gold-900/50 pb-3 flex items-center justify-center space-x-2">
            <HelpCircle size={24} /> <span>Need Direct Help?</span>
          </h2>

          <p className="text-gold-300/90 text-md">
            For support or general inquiries, please email us directly:
          </p>

          {/* Email 1: General Support */}
          <div className="flex flex-col items-center space-y-2 pt-4 border-t border-gold-900/50">
            <Mail size={24} className="text-gold-400" />
            <p className="text-gold-200 font-medium text-lg">
              <a href="mailto:info@alphaaccess.exchange" className="hover:text-gold-400 transition underline-offset-4">
                info@alphaaccess.exchange
              </a>
            </p>
            <p className="text-xs text-gold-700">General Support & Inquiries</p>
          </div>

          {/* Email 2: Strategic */}
          <div className="flex flex-col items-center space-y-2 pt-4 border-t border-gold-900/50">
            <Mail size={24} className="text-gold-400" />
            <p className="text-gold-200 font-medium text-lg">
              <a href="mailto:alpha@alphaaccess.exchange" className="hover:text-gold-400 transition underline-offset-4">
                alpha@alphaaccess.exchange
              </a>
            </p>
            <p className="text-xs text-gold-700">Strategic Partnerships & Media</p>
          </div>
          
          <p className="text-xs text-gold-700 pt-4">
            A comprehensive Frequently Asked Questions section is coming soon.
          </p>
        </div>

      </motion.div>
    </Layout>
  );
}
