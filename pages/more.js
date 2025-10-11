import Layout from "../components/Layout";

export default function More() {
  const options = ['Profile Settings', 'Security', 'SME Mode Toggle', 'Help & Support', 'Legal & Policy', 'Log Out'];
  return (
    <Layout>
      <div className="space-y-12 fade-in">
        <div className="text-center mt-2">
          <h1 className="text-3xl font-bold text-gold-400 tracking-wider">More</h1>
          <p className="text-gray-400 mt-2 text-sm">
            Configure, switch modes, and get support.
          </p>
        </div>

        <section className="bg-slate rounded-2xl border border-gold-800/40 divide-y divide-gold-900/40 overflow-hidden">
          {options.map((option, index) => (
            <div key={index} className="flex justify-between items-center p-4 hover:bg-black/60 transition-colors cursor-pointer">
              <span className={`font-medium ${option.includes('SME') ? 'text-gold-400' : 'text-white'}`}>{option}</span>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </div>
          ))}
        </section>
        
        <p className="text-center text-sm text-gray-600">
          AlphaAccess Next v0.1.0 (Proposal Build)
        </p>
      </div>
    </Layout>
  );
}
