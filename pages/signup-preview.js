// pages/signup-preview.js
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { User, CheckCircle, Smartphone, Lock, ArrowRight } from 'lucide-react';

const steps = [
  { icon: User, title: "Identity Verification", detail: "KYC: Provide national ID and selfie for full account access." },
  { icon: Smartphone, title: "Secure Your Account", detail: "Set up 2FA via SMS or authenticator app." },
  { icon: Lock, title: "Set Wallet PIN", detail: "Create a private encryption PIN for transactions and asset control." },
  { icon: CheckCircle, title: "Access Granted", detail: "Your Sovereign Alpha Wallet is ready. Explore all features instantly." },
];

export default function SignupPreview() {
    const router = useRouter();
    
    return (
        <Layout>
            <div className="max-w-xl mx-auto space-y-10 text-center py-8">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold text-gold-400 tracking-wider"
                >
                    Unlock Your Sovereign Wallet
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gold-300/80 text-lg"
                >
                    Here is what you will need to get started and what you gain immediately after registration.
                </motion.p>

                {/* Requirements/Steps Section */}
                <div className="space-y-6 text-left">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="flex items-center space-x-4 p-4 bg-slate border border-gold-800/50 rounded-xl"
                        >
                            <step.icon size={24} className="text-gold-400 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-gold-200">{step.title}</h3>
                                <p className="text-xs text-gold-700">{step.detail}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Final CTA to Registration */}
                <motion.button
                    onClick={() => alert("Redirecting to external Registration API...")}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-10 flex items-center justify-center space-x-2 px-10 py-4 rounded-xl 
                               bg-gradient-to-r from-gold-400 to-gold-600 text-black font-extrabold text-lg"
                >
                    <span>Proceed to Registration</span>
                    <ArrowRight size={20} />
                </motion.button>

                <Link href="/" passHref legacyBehavior>
                     <p className="text-gold-700 hover:text-gold-400 text-sm cursor-pointer mt-4">
                        &lt; Back to Landing Page
                    </p>
                </Link>
            </div>
        </Layout>
    );
}
