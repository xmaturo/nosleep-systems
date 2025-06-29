import Head from "next/head";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Head>
        <title>About | NoSleep Systems</title>
      </Head>

      <Navbar />

      <section className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white px-6 py-32 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-overlay.png')] opacity-5 bg-repeat pointer-events-none z-0" />
        <div className="max-w-6xl mx-auto z-10 relative space-y-16">

          {/* Header Block */}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
              We don’t build websites. <br />
              We install <span className="text-accent">systems</span> that never sleep.
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl">
              Every asset we deploy is engineered to multiply output, capture missed revenue, and run without you. You bring the vision — we build the machine.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm shadow-md hover:shadow-accent transition-all duration-300">
              <h2 className="text-xl font-bold text-white mb-4">What We Deploy</h2>
              <ul className="text-slate-300 space-y-3 text-sm leading-relaxed">
                <li>✔ Conversion Pages that sell on autopilot</li>
                <li>✔ Lead Capture Funnels that qualify and close</li>
                <li>✔ AI Agents that handle repetitive ops</li>
                <li>✔ Follow-Up Sequences that revive dead leads</li>
                <li>✔ Dashboards that show ROI in real-time</li>
              </ul>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm shadow-md hover:shadow-accent transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Why We're Different</h3>
              <ul className="text-slate-300 space-y-3 text-sm leading-relaxed">
                <li>– Built with conversion psychology frameworks</li>
                <li>– Delivered like software, not slow agencies</li>
                <li>– Fully automated — not just pretty design</li>
                <li>– Speed. Precision. No fluff.</li>
              </ul>
            </div>
          </div>

          {/* Quote Block */}
          <div className="mt-16 text-xl text-slate-300 font-light italic border-t border-white/10 pt-10 max-w-3xl">
            "If your business still runs on manual effort, you’re already behind. We install leverage so you can scale without burnout."
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/install"
              className="inline-block bg-accent text-black px-6 py-3 rounded-xl text-sm font-semibold hover:brightness-110 hover:scale-105 transition-all shadow-md"
            >
              Install My System →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}