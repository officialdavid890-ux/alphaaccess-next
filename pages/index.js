import Link from "next/link";

/**
 * Drop this file in pages/index.jsx (or app/page.jsx) in a Next.js + Tailwind project.
 * Fixes the runtime error caused by an improperly escaped inline SVG data-URL.
 *
 * Key changes:
 * - Replaced the backgroundImage string with a properly escaped template literal
 *   (quotes normalized, # encoded as %23) to avoid "Cannot read properties of null".
 * - Left layout/visuals the same.
 */

export default function Landing() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-yellow-400/30">
      {/* Global vignette + subtle stars */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,204,0,0.12),transparent_70%)]" />
        {/* noise */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.4\"/></svg>")`,
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* ===== HERO ===== */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-28 pb-14 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: copy */}
        <div>
          <h1 className="text-[44px] leading-[1.02] md:text-[72px] md:leading-[1.02] font-extrabold tracking-tight">
            UNCHAIN THE <br className="hidden md:block" /> CONTINENT.
          </h1>
          <p className="mt-4 text-[18px] font-semibold text-yellow-400">
            Bank. Invest. Build. Together.
          </p>
          <p className="mt-4 max-w-md text-yellow-200/80 leading-relaxed">
            Alpha Access Exchange is Africa’s financial operating system—connecting
            people, traders, and institutions through a unified, borderless economic
            network.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-5 py-3 font-semibold text-black shadow-[0_0_35px_rgba(234,179,8,0.28)] transition hover:bg-yellow-300"
            >
              ENTER THE XCHANGE
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center rounded-md border border-yellow-400 px-5 py-3 font-semibold text-yellow-400 transition hover:bg-yellow-500/10"
            >
              LEARN HOW IT WORKS
            </Link>
          </div>
        </div>

        {/* Right: Africa sphere with glow (vector placeholder) */}
        <div className="relative mx-auto md:mx-0 w-[360px] md:w-[520px] aspect-square">
          <div className="absolute -inset-8 rounded-full blur-2xl bg-[radial-gradient(circle,rgba(234,179,8,0.22),transparent_60%)]" />
          <svg viewBox="0 0 520 520" className="relative h-full w-full">
            <defs>
              <radialGradient id="g" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fde68a" />
                <stop offset="60%" stopColor="#facc15" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#facc15" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            <circle
              cx="260"
              cy="260"
              r="220"
              fill="url(#g)"
              fillOpacity="0.35"
              stroke="#facc15"
              strokeOpacity="0.18"
            />
            <path
              d="M300 110c-30 6-60 24-76 46-8 11-22 17-34 22-9 4-17 9-22 17-7 11-3 25 7 32 7 5 17 9 17 19 0 14-18 20-20 33-1 8 7 13 13 18 8 7 14 18 10 28-4 10-16 16-17 27-1 9 7 17 15 22 12 8 28 13 41 7 13-6 15-24 28-29 9-3 18 2 27 2 15 0 29-9 37-22 8-13 9-29 3-43-4-9-11-17-12-26-2-15 12-28 26-31 12-2 24 2 36 0 10-1 20-6 26-15 8-10 8-24 4-36-6-15-20-24-34-31-17-8-36-17-55-13z"
              fill="#fde68a"
              fillOpacity="0.85"
            />
          </svg>
        </div>
      </section>

      {/* ===== CLAIM ===== */}
      <section className="px-6 md:px-10 text-center">
        <h2 className="text-[30px] md:text-[40px] font-extrabold leading-tight">
          They built the circus. <span className="text-yellow-400">We built the exit.</span>
        </h2>
        <p className="mt-3 max-w-4xl mx-auto text-yellow-200/85 leading-relaxed">
          We’re redefining value for a connected Africa — where digital finance, investment, and innovation converge. Alpha Access empowers users to hold, trade, earn, and invest — all within one sovereign ecosystem.
        </p>

        {/* Feature trio */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            { title: "SMART FINANCE", text: "Your AI powered wallet for instant payments, yield." },
            { title: "TIME AS WEALTH", text: "Access yield opportunities that grow while you rest." },
            { title: "OPEN VAULT", text: "Trade, invest, and manage your assets securely." },
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="mb-3 h-14 w-14 rounded-xl border border-yellow-400/60 grid place-items-center shadow-[0_0_30px_rgba(250,204,21,0.15)]">
                <div className="h-6 w-6 bg-yellow-300/90 rounded" />
              </div>
              <h3 className="text-yellow-400 font-bold tracking-wide">{f.title}</h3>
              <p className="mt-2 text-sm text-yellow-200/75 max-w-[260px]">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== NETWORK ===== */}
      <section className="relative mt-14 md:mt-20 border-t border-yellow-500/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-[28px] md:text-[38px] font-extrabold leading-tight">
              A network built for everyone —<br className="hidden md:block" />
              from Lagos to Nairobi, Accra to Cairo.
            </h3>
            <p className="mt-4 text-yellow-200/85 max-w-xl">
              Trade, send, and invest seamlessly, regardless of borders or currencies.
            </p>
            <Link
              href="/ecosystem"
              className="mt-8 inline-block rounded-md border border-yellow-400 px-5 py-3 font-semibold text-yellow-400 transition hover:bg-yellow-500/10"
            >
              EXPLORE THE ECOSYSTEM
            </Link>
          </div>
          <div className="relative mx-auto md:mx-0 w-[300px] md:w-[360px] aspect-square">
            <div className="absolute -inset-8 rounded-full blur-2xl bg-[radial-gradient(circle,rgba(250,204,21,0.2),transparent_60%)]" />
            <svg viewBox="0 0 360 360" className="relative h-full w-full">
              <circle cx="180" cy="180" r="150" fill="none" stroke="#facc15" strokeOpacity="0.25" />
              <path
                d="M210 65c-26 6-48 21-65 40-9 10-26 15-35 27-6 8-3 20 6 26 7 5 14 8 14 16 0 10-13 15-14 24-1 6 5 11 10 15 7 6 12 15 8 23-3 8-13 13-14 21-1 7 6 14 12 18 10 7 22 11 33 6 10-5 12-20 22-24 7-3 15 1 22 1 12 0 23-7 29-18s6-24 2-36c-3-7-8-14-9-21-1-12 10-23 21-25 10-2 20 2 29 0 8-1 16-5 21-12 6-8 6-20 3-29-5-12-16-20-28-25-14-6-30-13-46-10z"
                fill="#fde68a"
                fillOpacity="0.8"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="border-t border-yellow-500/10">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-20 text-center">
          <h2 className="text-[28px] md:text-[38px] font-extrabold">
            The Future of African Finance is Ours to Build.
          </h2>
          <p className="mt-3 text-yellow-200/85">
            Thousands already building sovereignty through Alpha Access.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-14 w-14 rounded-full border border-yellow-400/60 shadow-[0_0_24px_rgba(250,204,21,0.18)]" />
            <Link
              href="/signup"
              className="rounded-md bg-yellow-400 px-6 py-3 font-semibold text-black shadow-[0_0_24px_rgba(250,204,21,0.25)] transition hover:bg-yellow-300"
            >
              CREATE YOUR ACCOUNT
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
