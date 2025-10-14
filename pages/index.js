import Image from "next/image";
import Link from "next/link";

const HERO = { src: "/africa-globe.png", width: 1040, height: 1040 }; // renders ~520
const MAP  = { src: "/africa-map.png",   width: 720,  height: 720  }; // renders ~360
const ICONS = {
  brain: { src: "/brain.png",     width: 120, height: 120 },
  hourglass: { src: "/hourglass.png", width: 120, height: 120 },
  box: { src: "/box.png",         width: 120, height: 120 },
  shield: { src: "/shield.png",   width: 120, height: 120 }
};

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative mx-auto grid max-w-wrap items-center gap-10 px-6 pb-14 md:grid-cols-2 md:px-6">
        <div className="pt-4 md:pt-0">
          <h1 className="text-[clamp(44px,6vw,72px)] leading-[1.02] font-extrabold tracking-tight">
            UNCHAIN THE <br className="hidden md:block" /> CONTINENT.
          </h1>
          <p className="mt-4 text-[18px] font-semibold text-brand-400">
            Bank. Invest. Build. Together.
          </p>
          <p className="mt-4 max-w-md text-brand-100/85 leading-relaxed">
            Alpha Access Exchange is Africa’s financial operating system—connecting
            people, traders, and institutions through a unified, borderless economic
            network.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/signup" className="inline-flex items-center justify-center rounded-md bg-brand-400 px-5 py-3 font-semibold text-black shadow-[0_0_35px_rgba(234,179,8,0.28)] transition hover:bg-brand-300 no-underline">
              ENTER THE XCHANGE
            </Link>
            <Link href="/how-it-works" className="inline-flex items-center justify-center rounded-md border border-brand-400 px-5 py-3 font-semibold text-brand-400 transition hover:bg-brand-400/10 no-underline">
              LEARN HOW IT WORKS
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-[min(520px,80vw)] aspect-square md:mx-0">
          <div className="absolute -inset-8 rounded-full blur-2xl bg-[radial-gradient(circle,rgba(234,179,8,0.22),transparent_60%)]" />
          <Image
            src={HERO.src}
            alt="Glowing Africa sphere"
            width={HERO.width}
            height={HERO.height}
            className="relative h-full w-full object-contain"
            priority
            sizes="(min-width: 980px) 520px, 80vw"
          />
        </div>
      </section>

      {/* ===== TAGLINE & PILLARS ===== */}
      <section className="px-6 text-center">
        <h2 className="text-[clamp(30px,4.5vw,40px)] font-extrabold leading-tight">
          They built the circus. <span className="text-brand-400">We built the exit.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-text leading-relaxed text-brand-100/85">
          We’re redefining value for a connected Africa — where digital finance, investment, and innovation converge. Alpha Access empowers users to hold, trade, earn, and invest — all within one sovereign ecosystem.
        </p>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-3">
          {[
            { title: "SMART FINANCE", text: "Your AI powered wallet for instant payments, yield.", icon: ICONS.brain },
            { title: "TIME AS WEALTH", text: "Access yield opportunities that grow while you rest.", icon: ICONS.hourglass },
            { title: "OPEN VAULT", text: "Trade, invest, and manage your assets securely.", icon: ICONS.box }
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="mb-3 grid h-14 w-14 place-items-center rounded-xl border border-brand-400/60 shadow-[0_0_30px_rgba(250,204,21,0.15)]">
                <Image src={f.icon.src} alt="" width={f.icon.width} height={f.icon.height} className="h-6 w-6 object-contain" />
              </div>
              <h3 className="font-bold tracking-wide text-brand-400">{f.title}</h3>
              <p className="mt-2 max-w-[260px] text-sm text-brand-100/75">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== NETWORK SECTION ===== */}
      <section className="relative mt-14 border-t border-white/10 md:mt-20">
        <div className="mx-auto grid max-w-wrap items-center gap-10 px-6 py-14 md:grid-cols-2">
          <div>
            <h3 className="text-[clamp(28px,4.8vw,38px)] font-extrabold leading-tight">
              A network built for everyone —<br className="hidden md:block" /> from Lagos to Nairobi, Accra to Cairo.
            </h3>
            <p className="mt-4 max-w-xl text-brand-100/85">
              Trade, send, and invest seamlessly, regardless of borders or currencies.
            </p>
            <Link href="/ecosystem" className="mt-8 inline-block rounded-md border border-brand-400 px-5 py-3 font-semibold text-brand-400 transition hover:bg-brand-400/10 no-underline">
              EXPLORE THE ECOSYSTEM
            </Link>
          </div>

          <div className="relative mx-auto w-[min(360px,70vw)] aspect-square md:mx-0">
            <div className="absolute -inset-8 rounded-full blur-2xl bg-[radial-gradient(circle,rgba(250,204,21,0.2),transparent_60%)]" />
            <Image
              src={MAP.src}
              alt="Stylized Africa map"
              width={MAP.width}
              height={MAP.height}
              className="relative h-full w-full object-contain"
              sizes="(min-width: 980px) 360px, 70vw"
            />
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
          <h2 className="text-[clamp(28px,4.8vw,38px)] font-extrabold">
            The Future of African Finance is Ours to Build.
          </h2>
          <p className="mt-3 text-brand-100/85">Thousands already building sovereignty through Alpha Access.</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Image src={ICONS.shield.src} alt="" width={ICONS.shield.width} height={ICONS.shield.height} className="h-14 w-14 rounded-full object-contain" />
            <Link href="/signup" className="rounded-md bg-brand-400 px-6 py-3 font-semibold text-black shadow-[0_0_24px_rgba(250,204,21,0.25)] transition hover:bg-brand-300 no-underline">
              CREATE YOUR ACCOUNT
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
