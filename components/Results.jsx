export default function Results() {
  return (
    <section className="w-full bg-[#0A0A0A] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">

        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            <span className="text-accent">Real Results.</span> Real Businesses.
            <br />NoSleep Systems scales what you already built — fast.
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Whether you’re a one-man army or scaling a team — we install automation stacks that work 24/7, saving time and closing deals.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl py-8 px-6">
            <p className="text-4xl font-bold text-accent">49+</p>
            <p className="text-sm text-gray-400 mt-2">Systems Deployed → Across 7+ industries</p>
          </div>
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl py-8 px-6">
            <p className="text-4xl font-bold text-accent">3,200+</p>
            <p className="text-sm text-gray-400 mt-2">Hours Saved → That’s 400+ Workdays</p>
          </div>
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl py-8 px-6">
            <p className="text-4xl font-bold text-accent">92%</p>
            <p className="text-sm text-gray-400 mt-2">User Satisfaction → Based on exit surveys</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
          <div className="bg-[#181818] border border-white/10 p-6 rounded-xl">
            <p className="text-sm text-gray-300 italic">
              “I run a local service biz and had zero systems. Now follow-ups are automated, and I finally sleep.”
            </p>
            <p className="mt-4 text-sm text-white font-semibold">
              — Carlos T. · Home Services Owner <span className="text-gray-500 ml-2">| Miami, FL</span>
            </p>
          </div>
          <div className="bg-[#181818] border border-white/10 p-6 rounded-xl">
            <p className="text-sm text-gray-300 italic">
              “Built my entire backend in a week. Email flows, booking, follow-up — it just works.”
            </p>
            <p className="mt-4 text-sm text-white font-semibold">
              — Anya D. · Startup Founder <span className="text-gray-500 ml-2">| Toronto, CA</span>
            </p>
          </div>
          <div className="bg-[#181818] border border-white/10 p-6 rounded-xl">
            <p className="text-sm text-gray-300 italic">
              “I closed 2 high-ticket deals the same week my NoSleep System launched. That’s ROI.”
            </p>
            <p className="mt-4 text-sm text-white font-semibold">
              — Marcus W. · Closer & Consultant <span className="text-gray-500 ml-2">| Dallas, TX</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}