import Image from "next/image";

export default function TopBar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-yellow-600/20 bg-black/70 backdrop-blur-md shadow-md">
      <div className="flex items-center gap-3">
        <Image
          src="/aax-logo.png"
          alt="Alpha Access Xchange Logo"
          width={48}
          height={48}
          className="object-contain"
        />
        <div>
          <h1 className="text-xl text-yellow-400 tracking-widest font-bold">
            AlphaAccess
          </h1>
          <p className="text-xs text-gray-400 uppercase">Consumer Mode</p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-yellow-300 font-mono text-sm">₦124,300.00</p>
        <p className="text-yellow-500/80 font-mono text-sm">$102.45</p>
      </div>
    </header>
  );
}
