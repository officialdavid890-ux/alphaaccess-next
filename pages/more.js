import Layout from "@/components/Layout";

export default function More() {
  return (
    <Layout>
      <div className="text-gold space-y-4">
        <h1 className="text-2xl font-semibold">More Options</h1>
        <ul className="space-y-2">
          <li className="bg-slate/60 rounded-xl p-3 border border-gold">Settings</li>
          <li className="bg-slate/60 rounded-xl p-3 border border-gold">Profile</li>
          <li className="bg-slate/60 rounded-xl p-3 border border-gold">Notifications</li>
          <li className="bg-slate/60 rounded-xl p-3 border border-gold">Logout</li>
        </ul>
      </div>
    </Layout>
  );
}
