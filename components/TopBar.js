// components/TopBar.js
import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50 flex items-center justify-between px-6 py-3">
      {/* Logo on top-left corner */}
      <Link href="/">
        <div className="flex items-center space-x-3 cursor-pointer">
          <Image
            src="/logo.png"
            alt="AlphaAccess Logo"
            width={50}
            height={50}
            className="object-contain"
            priority
          />
          <span className="text-lg font-bold tracking-wide text-white">
            AlphaAccess
          </span>
        </div>
      </Link>

      {/* Optional navigation items on the right */}
      <nav className="flex items-center space-x-6 text-sm text-gray-300">
        <Link href="/about" className="hover:text-white transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-white transition">
          Contact
        </Link>
      </nav>
    </header>
  );
}
