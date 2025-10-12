import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-black text-white font-[Orbitron] overflow-hidden">

      {/* === LOGO === */}
      <div className="absolute top-6 left-8 z-20">
        <Image
          src="/aax-logo.png"
          alt="Alpha Access Exchange Logo"
          width={70}
          height={70}
          className="object-contain"
          priority
        />
      </div>

      {/* === HERO SECTION === */}
      <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-24 pb-20">
        {/* Left: Text Content */}
        <div className="md:w-1/2 w-full text-left space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
            UNCHAIN THE CONTINENT.
          </h1>

          <p className="text-gold-400 font-bold text-lg">Bank. Invest. Build. Together.</p>

          <p className="text-gold-300/80 text-base max-w-md">
            Alpha Access Exchange is Africa&apos;s financial operating system — connecting
            people, traders, and institutions through a united, borderless economic network.
          </p>

          <div className="flex space-x-4 pt-4">
            <button
              onClick={() => router.push("/dashboard")}
              className="bg-gold-400 hover:bg-gold-300 text-black font-bold px-6 py-3 rounded-md shadow-[0_0_15px_rgba(255,215,0,0.5)] transition"
            >
              ENTER THE XCHANGE
            </button>

            <button
              onClick={() => router.push("/how-it-works")}
              className="border border-gold-400 text-gold-400 hover:bg-gold-900/40 px-6 py-3 rounded-md transition"
            >
              LEARN HOW IT WORKS
            </button>
          </div>
        </div>

        {/* Right: Globe */}
        <div className="md:w-1/2 w-full flex justify-center mt-12 md:mt-0 relative">
          <Image
            src="/africa-globe.png"
            alt="Glowing Africa Globe"
            width={480}
            height={480}
            className="opacity-90 drop-shadow-[0_0_40px_rgba(255,215,0,0.3)]"
            priority
          />
        </div>
      </section>

      {/* === PHILOSOPHY / PILLARS === */}
      <section className="bg-black py-20 text-center px-6 border-t border-gold-900/30">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          They built the circus. <span className="text-gold-400">We built the exit.</span>
        </h2>

        <p className="text-gold-300/80 max-w-3xl mx-auto mb-12">
          We&apos;re redefining value for a connected Africa — where digital finance,
          investment, and innovation converge. Alpha Access empowers users to hold,
          trade, earn, and invest — all within one sovereign ecosystem.
        </p>

        {/* Three Pillars */}
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-8">
          {[
            { img: "/brain.png", title: "SMART FINANCE", desc: "Your AI powered wallet for instant payments, yield." },
            { img: "/hourglass.png", title: "TIME AS WEALTH", desc: "Access yield opportunities that grow while you rest." },
            { img: "/box.png", title: "OPEN VAULT", desc: "Trade, invest, and manage your assets securely." },
          ].map((p, i) => (
            <div key={i} className="flex flex-col items-center">
              <Image src={p.img} alt={p.title} width={50} height={50} />
              <h3 className="text-gold-400 font-bold mt-3">{p.title}</h3>
              <p className="text-gold-300/70 text-sm mt-1">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === NETWORK SECTION === */}
      <section className="py-20 px-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-4 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            A network built for everyone — <br /> from Lagos to Nairobi, Accra to Cairo.
          </h2>
          <p className="text-gold-300/80">
            Trade, send, and invest seamlessly, regardless of borders or currencies.
          </p>
          <button
            onClick={() => router.push("/dashboard")}
            className="bg-gold-400 hover:bg-gold-300 text-black font-semibold px-6 py-3 rounded-md shadow-md mt-4"
          >
            EXPLORE THE ECOSYSTEM
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image
            src="/africa-map.png"
            alt="Flat Africa Map"
            width={320}
            height={320}
            className="opacity-90 drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]"
          />
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="bg-black py-20 px-6 text-center border-t border-gold-900">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-white">
            The Future of African Finance is Ours to Build.
          </h2>
          <p className="text-gold-300/80">
            Thousands already building sovereignty through Alpha Access.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Image src="/shield.png" alt="Shield" width={60} height={60} />
            <button
              onClick={() => router.push("/signup")}
              className="bg-gold-400 hover:bg-gold-300 text-black font-bold px-8 py-3 rounded-md shadow-md"
            >
              CREATE YOUR ACCOUNT
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
