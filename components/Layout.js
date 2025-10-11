import TopBar from "./TopBar";
import BottomNav from "./BottomNav";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    // Enforcing black background for the entire mobile frame
    <div className="relative min-h-screen bg-black text-gray-100 overflow-hidden font-[Orbitron]">
      {/* Subtle Africa watermark for inner pages */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        {/* Secondary black enforcement layer over the base background */}
        <div className="absolute inset-0 bg-black/95" /> 
        {/* Map Watermark - Low opacity watermark for all dashboard screens */}
        <Image
          src="/africa-map.png"
          alt="Africa Map"
          fill
          style={{ objectFit: "cover", opacity: 0.05 }}
          priority
        />
      </div>

      {/* Main layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <TopBar />
        {/* Adjusted padding to clear the fixed TopBar (pt-24) and BottomNav (pb-20) */}
        <main className="flex-1 px-6 pt-24 pb-20">{children}</main>
        <BottomNav />
      </div>
    </div>
  );
}
