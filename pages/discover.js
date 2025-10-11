import Layout from "@/components/Layout";

export default function Discover() {
  return (
    <Layout>
      <div className="text-gold space-y-4">
        <h1 className="text-2xl font-semibold">Discover</h1>
        <p className="text-sm text-gray-400">
          Explore lifestyle services, offers, and partnerships.
        </p>
        <ul className="space-y-2">
          <li className="bg-slate/60 rounded-xl p-3 border border-gold">Transport & Rides</li>
          <li className="bg-slate/60 rounded-xl p-3 border border-gold">Food Delivery</li>
          <li className="bg-slate/60 rounded-xl p-3 border border-gold">Events & Tickets</li>
          <li className="bg-slate/60 rounded-xl p-3 border border-gold">Insurance & Health</li>
        </ul>
      </div>
    </Layout>
  );
}
