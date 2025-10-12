import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white font-[Orbitron] overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 pt-28 pb-16">
        
        {/* Left: Text */}
        <div className="md:w-1/2 w-full space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            UNCHAIN THE <br /> CONTINENT.
          </h1>

          <p className="text-gold-400 font-semibold text-lg">
            Bank. Invest. Build. Together.
          </p>

          <p className="text-gold-300/80 text-base max-w-md leading-relaxed">
            Alpha Access Exchange is Africa’s financial operating system — connecting
            people, traders, and institutions through a united, borderless economic network.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => router.push("/signup")}
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

        {/* Right: Glowing Africa Globe */}
        <div className="md:w-1/2 w-full flex justify-center mt-12 md:mt-0">
          <Image
            src="/africa-globe.png"
            alt="Africa Globe"
            width={450}
            height={450}
            className="opacity-90"
            priority
          />
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="bg-black text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          They built the circus.{" "}
          <span className="text-gold-400">We built the exit.</span>
        </h2>
        <p className="text-gold-300/80 max-w-3xl mx-auto leading-relaxed">
          We’re redefining value for a connected Africa — where digital finance,
          investment, and innovation converge. Alpha Access empowers users to hold,
          trade, earn, and invest — all within one sovereign ecosystem.
        </p>

        {/* PILLARS */}
        <div className="flex flex-col md:flex-row justify-center gap-12 mt-12">
          {[
            { src: "/brain.png", title: "SMART FINANCE", text: "Your AI powered wallet for instant payments, yield." },
            { src: "/hourglass.png", title: "TIME AS WEALTH", text: "Access yield opportunities that grow while you rest." },
            { src: "/box.png", title: "OPEN VAULT", text: "Trade, invest, and manage your assets securely." },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center max-w-xs">
              <Image src={item.src} alt={item.title} width={60} height={60} />
              <h3 className="text-gold-400 font-bold mt-3">{item.title}</h3>
              <p className="text-gold-300/70 text-sm mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NETWORK SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between py-20 px-6 max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            A network built for everyone — <br />
            from Lagos to Nairobi, Accra to Cairo.
          </h2>
          <p className="text-gold-300/80 leading-relaxed">
            Trade, send, and invest seamlessly, regardless of borders or currencies.
          </p>
          <button
            onClick={() => router.push("/ecosystem")}
            className="bg-gold-400 hover:bg-gold-300 text-black font-bold px-6 py-3 rounded-md shadow-md mt-4"
          >
            EXPLORE THE ECOSYSTEM
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
          <Image
            src="/africa-map.png"
            alt="Africa Map"
            width={300}
            height={300}
            className="opacity-80"
          />
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-black text-center border-t border-gold-900 py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            The Future of African Finance is Ours to Build.
          </h2>
          <p className="text-gold-300/80">
            Thousands already building sovereignty through Alpha Access.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
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
    </main>
  );
}
