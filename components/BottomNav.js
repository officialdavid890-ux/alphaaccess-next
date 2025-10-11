import { Home, Wallet, Globe2, CreditCard, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  { icon: Home, label: "Home", href: "/dashboard" }, // Updated Home link
  { icon: Wallet, label: "Wallet", href: "/wallet" },
  { icon: Globe2, label: "Discover", href: "/discover" },
  { icon: CreditCard, label: "Loans", href: "/loans" },
  { icon: MoreHorizontal, label: "More", href: "/more" },
];

export default function BottomNav() {
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-[60px] border-t border-gold-700/30 bg-black/70 backdrop-blur-xl z-50">
      {navItems.map(({ icon: Icon, label, href }) => {
        const isActive = router.pathname === href;
        return (
          <Link
            href={href}
            key={label}
            className="flex flex-col items-center text-gray-400 transition-all duration-200"
          >
            <Icon size={22} className={isActive ? "text-gold-400" : "text-gray-400 hover:text-gold-600"} />
            <span className={`text-xs mt-1 ${isActive ? "text-gold-400 font-semibold" : "text-gray-500"}`}>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
