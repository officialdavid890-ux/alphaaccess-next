import TopBar from "./TopBar";
import BottomNav from "./BottomNav";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-black text-gray-100 overflow-hidden font-[Orbitron]">
      {/* Watermark background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <Image
          src="/africa-map.png"
          alt="Africa Map"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <TopBar />
        <main className="flex-1 px-6 py-10">{children}</main>
        <BottomNav />
      </div>
    </div>
  );
}
