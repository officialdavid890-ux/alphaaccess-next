// pages/how-it-works.js
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { Zap, Shield, Repeat2 } from "lucide-react";

const steps = [
    { title: "Get Sovereign Access", detail: "Start with quick verification to secure your digital identity and wallet.", icon: Shield },
    { title: "Fund & Control", detail: "Deposit local currency or stablecoins. Your funds are protected by sovereign encryption.", icon: Zap },
    { title: "Unchain Your Wealth", detail: "Trade peer-to-peer or send money instantly across any border with transparent, low fees.", icon: Repeat2 },
];

export default function HowItWorks() {
    return (
        <Layout>
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto space-y-12 text-center py-8"
            >
                <h1 className="text-3xl font-bold text-gold-400 tracking-wider">
                    How Alpha Access Works
                </h1>
                <p className="text-gold-300/80 text-lg">
                    We built a direct, secure path to financial freedom. Here is our 3-step philosophy.
                </p>

                <div className="space-y-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-slate p-6 rounded-xl border border-gold-800/40"
                        >
                            <step.icon size={32} className="text-gold-400 mx-auto mb-3" />
                            <h2 className="text-xl font-semibold text-gold-200">{step.title}</h2>
                            <p className="text-sm text-gold-700 mt-2">{step.detail}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Layout>
    );
}
