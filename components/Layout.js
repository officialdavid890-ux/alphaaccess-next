import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-dark text-white">
      <TopBar />
      <main className="flex-1 overflow-y-auto p-4">{children}</main>
      <BottomNav />
    </div>
  );
}
