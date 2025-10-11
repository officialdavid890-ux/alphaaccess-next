// pages/discover.js

import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { Briefcase, Globe2, Star, Ticket } from "lucide-react";

export default function Discover() {
  const sections = [
    {
      title: "Featured Offers",
      icon: <Star size={22} />,
      description: "Exclusive access to premium deals and merchant offers within the AAX ecosystem.",
      items: [
        { name: "Gold Credit Card Upgrade", tag: "Finance" },
        { name: "Elite Investment Pool Access", tag: "Wealth" },
        { name: "Private Lounge Membership", tag: "Lifestyle" },
      ],
    },
    {
      title: "Travel & Lifestyle",
      icon: <Globe2 size={22} />,
      description: "Luxury transportation, accommodation, and curated experiences for members.",
      items: [
        { name: "Private Jet Partnership", tag: "Aviation" },
        { name: "5-Star Hotel Network", tag: "Hospitality" },
        { name: "Concierge Services", tag: "Lifestyle" },
      ],
    },
    {
      title: "Business & Services",
      icon: <Briefcase size={22} />,
      description: "Empower your brand with AAX business solutions and affiliate programs.",
      items: [
        { name: "Vendor Onboarding Portal", tag: "Merchant" },
        { name: "Corporate Credit Line", tag: "Finance" },
        { name: "Partner Analytics Dashboard", tag: "Tools" },
      ],
    },
    {
      title: "Events & Experiences",
      icon: <Ticket size={22} />,
      description: "Access invite-only networking events, galas, and regional summits.",
      items: [
        { name: "AAX Global Summit 2025", tag: "Event" },
        { name: "Investor’s Gala Night", tag: "Networking" },
        { name: "Tech x Africa Conference", tag: "Innovation" },
      ],
    },
  ];

  return (
    <Layout>
      <div className="space-y-14 fade-in">
        {/* Title Section */}
        <div className="text-center mt-2">
          <h1 className="text-3xl font-bold text-yellow-400 tracking-wider">
            Discover
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Explore premium opportunities and experiences powered by AAX.
          </p>
        </div>

        {/* Discover Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-yellow-700/30 bg-gradient-to-b from-yellow-900/10 to-transparent
                         backdrop-blur-lg shadow-[0_0_20px_rgba(234,179,8,0.15)] hover:shadow-[0_0_25px_rgba(234,179,8,0.35)]
                         transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-yellow-400">{section.icon}</span>
                <h2 className="text-xl font-semibold text-yellow-300">{section.title}</h2>
              </div>

              <p className="text-gray-400 text-sm mb-4">{section.description}</p>

              <div className="space-y-3">
                {section.items.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="flex justify-between items-center bg-black/60 border border-yellow-800/40 rounded-xl px-4 py-3"
                  >
                    <p className="text-yellow-200 font-medium">{item.name}</p>
                    <span className="text-[11px] uppercase text-gray-400 tracking-wider">
                      {item.tag}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
