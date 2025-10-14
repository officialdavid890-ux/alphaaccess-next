const steps = [
  {
    icon: "shield",
    title: "Get Sovereign Access",
    body: "Start with quick verification to secure your digital identity and wallet."
  },
  {
    icon: "bolt",
    title: "Fund & Control",
    body: "Deposit local currency or stablecoins. Your funds are protected by sovereign encryption."
  },
  {
    icon: "sync",
    title: "Unchain Your Wealth",
    body: "Trade peer-to-peer or send money instantly with transparent, low fees."
  }
];

const Icon = ({ name }) => {
  const base = "h-6 w-6 md:h-7 md:w-7";
  if (name === "shield") return (
    <svg viewBox="0 0 24 24" className={base} fill="none" stroke="#FACC15">
      <path d="M12 3l7 3v6c0 4-2.5 7-7 9-4.5-2-7-5-7-9V6l7-3z" strokeWidth="1.5" />
    </svg>
  );
  if (name === "bolt") return (
    <svg viewBox="0 0 24 24" className={base} fill="none" stroke="#FACC15">
      <path d="M13 3L4 14h7l-1 7 9-12h-7l1-6z" strokeWidth="1.5" />
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" className={base} fill="none" stroke="#FACC15">
      <path d="M4 12h16M12 20V4" strokeWidth="1.5" />
    </svg>
  );
};

export default function HowItWorks() {
  return (
    <div className="mx-auto max-w-wrap px-6">
      <section className="text-center">
        <h1 className="mt-2 text-[clamp(32px,5.2vw,56px)] font-display font-extrabold tracking-tight">
          How Alpha Access Works
        </h1>
        <p className="mx-auto mt-3 max-w-text text-brand-100/85">
          We built a direct, secure path to financial freedom. Here is our 3-step philosophy.
        </p>
      </section>

      <section className="mt-12 md:mt-16">
        <ol className="space-y-10 md:space-y-12">
          {steps.map((s, i) => (
            <li key={i} className="relative mx-auto max-w-text rounded-2xl border border-white/10 bg-black/40 p-6 md:p-8">
              <div className="mx-auto flex max-w-prose flex-col items-center text-center">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-full border border-brand-400/60 shadow-[0_0_24px_rgba(250,204,21,0.15)]">
                  <Icon name={s.icon} />
                </div>
                <h3 className="font-display text-[clamp(20px,3.2vw,28px)] font-bold">{s.title}</h3>
                <p className="mt-2 text-brand-100/85">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
