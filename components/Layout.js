export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,204,0,0.10),transparent_70%)]" />
      </div>
      {/* add top padding so fixed navs don't overlap content */}
      <div className="pt-20 md:pt-24">{children}</div>
    </div>
  );
}
