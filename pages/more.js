// pages/more.js
import Layout from "../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function More() {
  const router = useRouter();

  const options = [
    { name: 'Profile Settings', href: '/settings' },
    { name: 'Security', href: '/security' },
    { name: 'SME Mode Toggle', action: true }, // Special action, handled outside Link
    { name: 'Contact Us', href: '/contact' }, // NEW: Link to the Contact page
    { name: 'Legal & Policy', href: '/legal' },
    { name: 'Log Out', action: true }, // Special action, handled outside Link
  ];

  const handleAction = (item) => {
      if (item.name === 'SME Mode Toggle') {
          // Placeholder logic to toggle mode in TopBar or global state
          alert("SME Mode toggle handled in Top Bar component.");
      } else if (item.name === 'Log Out') {
          alert("Logging out...");
          router.push('/');
      } else if (item.href) {
          router.push(item.href);
      }
  }

  return (
    <Layout>
      <div className="space-y-12 fade-in">
        <div className="text-center mt-2">
          <h1 className="text-3xl font-bold text-gold-400 tracking-wider">More</h1>
          <p className="text-gold-300/80 mt-2 text-sm">
            Configure, switch modes, and get support.
          </p>
        </div>

        <section className="bg-slate border border-gold-800/40 rounded-2xl divide-y divide-gold-900/40 overflow-hidden">
          {options.map((option, index) => (
            <div 
              key={index} 
              onClick={() => handleAction(option)}
              className="flex justify-between items-center p-4 hover:bg-black/60 transition-colors cursor-pointer"
            >
              <span className={`font-medium ${option.name.includes('SME') ? 'text-gold-400' : 'text-gold-200'}`}>{option.name}</span>
              <svg className="w-5 h-5 text-gold-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </div>
          ))}
        </section>
        
        <p className="text-center text-sm text-gold-700">
          AlphaAccess Next v0.1.0 (Proposal Build)
        </p>
      </div>
    </Layout>
  );
}
