import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* global vignette + gentle noise */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,204,0,0.10),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"160\\" height=\\"160\\" viewBox=\\"0 0 160 160\\"><filter id=\\"n\\"><feTurbulence type=\\"fractalNoise\\" baseFrequency=\\"0.8\\" numOctaves=\\"2\\" stitchTiles=\\"stitch\\"/></filter><rect width=\\"100%\\" height=\\"100%\\" filter=\\"url(%23n)\\" opacity=\\"0.4\\"/></svg>")`,
            backgroundRepeat: "repeat"
          }}
        />
      </div>

      {/* Fixed site header */}
      <Header />

      {/* Make sure content never hides behind header */}
      <main className="pt-20 md:pt-24">
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  );
}
