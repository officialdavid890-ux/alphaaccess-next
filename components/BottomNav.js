import { Home, Wallet, Search, CreditCard, MoreHorizontal } from "lucide-react";

export default function BottomNav() {
  return (
    <nav className="flex justify-around items-center bg-slate py-3 border-t border-gold text-gold">
      <button className="flex flex-col items-center text-xs">
        <Home size={20} />
        Home
      </button>
      <button className="flex flex-col items-center text-xs">
        <Wallet size={20} />
        Wallet
      </button>
      <button className="flex flex-col items-center text-xs">
        <Search size={20} />
        Discover
      </button>
      <button className="flex flex-col items-center text-xs">
        <CreditCard size={20} />
        Loans
      </button>
      <button className="flex flex-col items-center text-xs">
        <MoreHorizontal size={20} />
        More
      </button>
    </nav>
  );
}
