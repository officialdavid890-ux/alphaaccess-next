import Layout from "@/components/Layout";

export default function Wallet() {
  return (
    <Layout>
      <div className="text-gold space-y-4">
        <h1 className="text-2xl font-semibold">Wallet Overview</h1>
        <p className="text-sm text-gray-400">
          View balances, deposits, and exchange currencies here.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-slate/60 rounded-xl border border-gold">
            <h3 className="font-semibold">Local Currency</h3>
            <p className="text-lg">₦124,300</p>
          </div>
          <div className="p-4 bg-slate/60 rounded-xl border border-gold">
            <h3 className="font-semibold">USD Wallet</h3>
            <p className="text-lg">$102.45</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
