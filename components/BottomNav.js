import { Home, Wallet, Globe2, CreditCard, MoreHorizontal } from "lucide-react";
import Link from "next/link";

const navItems = [
  { icon: <Home size={20} />, label: "Home", href: "/" },
  { icon: <Wallet size={20} />, label: "Wallet", href: "/wallet" },
  { icon: <Globe2 size={20} />, label: "Discover", href: "/discover" },
  { icon: <CreditCard size={20} />, label: "Loans", href: "/loans" },
  { icon: <MoreHorizontal size={20} />, label: "More", href: "/more" },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center py-3 border-t border-yellow-700/30 bg-black/70 backdrop-blur-xl">
      {navItems.map(({ icon, label, href }) => (
        <Link
          href={href}
          key={label}
          className="flex flex-col items-center text-gray-400 hover:text-yellow-400 transition-all duration-200 hover:scale-110"
        >
          {icon}
          <span className="text-xs mt-1">{label}</span>
        </Link>
      ))}
    </nav>
  );
}
