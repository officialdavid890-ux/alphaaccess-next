import Link from "next/link";
import { useRouter } from "next/router";
import { Home, Wallet, Search, CreditCard, MoreHorizontal } from "lucide-react";

export default function BottomNav() {
  const router = useRouter();

  const navItems = [
    { name: "Home", href: "/app", icon: Home },
    { name: "Wallet", href: "/wallet", icon: Wallet },
    { name: "Discover", href: "/discover", icon: Search },
    { name: "Loans", href: "/loans", icon: CreditCard },
    { name: "More", href: "/more", icon: MoreHorizontal },
  ];

  return (
    <nav className="flex justify-around items-center bg-slate py-3 border-t border-gold text-gold">
      {navItems.map(({ name, href, icon: Icon }) => {
        const isActive = router.pathname === href;
        return (
          <Link
            key={name}
            href={href}
            className={`flex flex-col items-center text-xs transition ${
              isActive ? "text-accent font-bold" : "text-gold hover:text-accent"
            }`}
          >
            <Icon size={20} />
            {name}
          </Link>
        );
      })}
    </nav>
  );
}
