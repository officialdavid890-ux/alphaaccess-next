import Layout from "@/components/Layout";

export default function Loans() {
  return (
    <Layout>
      <div className="text-gold space-y-4">
        <h1 className="text-2xl font-semibold">Loans</h1>
        <p className="text-sm text-gray-400">
          Access personal and SME financing with transparent rates.
        </p>
        <div className="bg-slate/60 p-4 rounded-xl border border-gold">
          <h3 className="font-semibold mb-2">Working Capital Loan</h3>
          <p>Up to ₦500,000 at 3% monthly interest.</p>
        </div>
        <div className="bg-slate/60 p-4 rounded-xl border border-gold">
          <h3 className="font-semibold mb-2">Inventory Financing</h3>
          <p>Buy now, pay later for your business supplies.</p>
        </div>
      </div>
    </Layout>
  );
}
