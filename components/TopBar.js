export default function TopBar() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-slate border-b border-gold">
      <div>
        <h2 className="text-lg font-semibold text-gold">AlphaAccess</h2>
        <p className="text-xs text-gray-400">Consumer Mode</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-gold">₦124,300</p>
        <p className="text-xs text-gray-400">$102.45</p>
      </div>
    </div>
  );
}
