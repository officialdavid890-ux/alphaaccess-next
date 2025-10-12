import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-black text-white font-[Orbitron] overflow-hidden">
      
      {/* === TOP LOGO === */}
      <div className="absolute top-6 left-8 z-20">
        <Image
          src="/aax-logo.png"
          alt="AlphaAccess Logo"
          width={70}
          height={70}
          className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] object-contain"
          priority
        />
      </div>

      {/* === HERO SECTION === */}
      <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-28 pb-20">

        {/* Left Text */}
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
              className="bg-gold-400 hover:bg-gold-300 text-black font-bold px-8 py-3 rounded-md shadow-[0_0_20px_rgba(255,215,0,0.4)] transition"
            >
              ENTER THE XCHANGE
            </button>

            <button
              onClick={() => router.push("/how-it-works")}
              className="border border-gold-400 text-gold-400 hover:bg-gold-900/40 px-8 py-3 rounded-md transition"
            >
              LEARN HOW IT WORKS
            </button>
          </div>
        </div>

        {/* Right: Glowing Globe */}
        <div className="md:w-1/2 w-full flex justify-center mt-12 md:mt-0 relative">
          <div className="absolute inset-0 blur-[100px] bg-gold-400/10 rounded-full"></div>
          <Image
            src="/africa-globe.png"
            alt="Africa Globe"
            width={480}
            height={480}
            className="opacity-90 relative"
            priority
          />
        </div>
      </section>

      {/* === CORE PHILOSOPHY === */}
      <section className="bg-black py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          They built the circus. <span className="text-gold-400">We built the exit.</span>
        </h2>

        <p className="text-gold-300/80 max-w-3xl mx-auto mb-12">
          We&apos;re redefining value for a connected Africa — where digital finance,
          investment, and innovation converge. Alpha Access empowers users to hold,
          trade, earn, and invest — all within one sovereign ecosystem.
        </p>

        {/* Pillars */}
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-8">
          <div className="flex flex-col items-center text-center w-[200px]">
            <Image src="/brain.png" alt="Smart Finance" width={60} height={60} />
            <h3 className="text-gold-400 font-bold mt-3">SMART FINANCE</h3>
            <p className="text-gold-300/70 text-sm mt-1">
              Your AI powered wallet for instant payments, yield.
            </p>
          </div>

          <div className="flex flex-col items-center text-center w-[200px]">
            <Image src="/hourglass.png" alt="Time as Wealth" width={60} height={60} />
            <h3 className="text-gold-400 font-bold mt-3">TIME AS WEALTH</h3>
            <p className="text-gold-300/70 text-sm mt-1">
              Access yield opportunities that grow while you rest.
            </p>
          </div>

          <div className="flex flex-col items-center text-center w-[200px]">
            <Image src="/box.png" alt="Open Vault" width={60} height={60} />
            <h3 className="text-gold-400 font-bold mt-3">OPEN VAULT</h3>
            <p className="text-gold-300/70 text-sm mt-1">
              Trade, invest, and manage your assets securely.
            </p>
          </div>
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
            className="bg-gold-400 hover:bg-gold-300 text-black font-semibold px-8 py-3 rounded-md shadow-md mt-4"
          >
            EXPLORE THE ECOSYSTEM
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
          <div className="absolute w-[320px] h-[320px] bg-gold-400/10 rounded-full blur-3xl"></div>
          <Image
            src="/africa-map.png"
            alt="Africa Map"
            width={320}
            height={320}
            className="opacity-80 relative"
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
            <Image
              src="/shield.png"
              alt="Shield"
              width={60}
              height={60}
              className="opacity-80"
            />
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
