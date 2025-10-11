// pages/_app.js

import "../styles/global.css";
import { AnimatePresence, motion } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={router.route}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1.0],
        }}
        className="min-h-screen bg-black text-gray-100"
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
