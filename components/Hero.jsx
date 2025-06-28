export default function Hero() {
  return (
    <section className="relative min-h-screen px-6 py-20 flex flex-col justify-center items-center text-center bg-hero-gradient text-white overflow-hidden">
      {/* Grid Overlay Texture */}
      <div className="absolute inset-0 z-0 bg-[url('/images/grid-overlay.png')] opacity-5 bg-repeat pointer-events-none"></div>

      {/* Glow Orb */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-accent opacity-20 rounded-full blur-3xl animate-pulse"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Transform Your Business Into a{" "}
          <span className="text-accent drop-shadow-[0_0_10px_#00f7bf99]">
            24/7 Growth Machine.
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          NoSleep Systems installs done-for-you systems powered by automation,
          execution psychology, and conversion science — helping you scale faster, with less effort.
        </p>

        <a
          href="/install"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-accent text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-accent transition hover:scale-105"
        >
          Install My System →
        </a>

        <p className="mt-3 text-sm text-gray-400 italic">
          Launches in under 3 minutes. No fluff. Just fire.
        </p>
      </div>

      {/* Social Proof Block */}
      <div className="relative z-10 mt-16 max-w-xl text-sm text-gray-200 bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-inner">
        <p className="mb-2 font-semibold text-white">
          Trusted by elite closers, consultants, and service businesses to:
        </p>
        <ul className="text-left space-y-1 pl-4 list-disc list-inside text-gray-300">
          <li>Automate lead follow-ups</li>
          <li>Capture more sales</li>
          <li>Save 20+ hours/week</li>
        </ul>
        <p className="mt-4 text-accent font-semibold">
          Current Systems Deployed: 49
        </p>
      </div>
    </section>
  );
}