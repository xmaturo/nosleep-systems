export default function HowItWorks() {
  const steps = [
    {
      icon: "Step 1",
      title: "Lock In Your Offer",
      desc: "We audit your current funnel, extract the bottlenecks, and sharpen your positioning — prepping your business for automated scale.",
    },
    {
      icon: "Step 2",
      title: "Deploy Your System",
      desc: "We install your tailored automation engine: scheduling, follow-up, and conversion layers — all firing 24/7 with zero manual effort.",
    },
    {
      icon: "Step 3",
      title: "Own the Market",
      desc: "The system runs in the background, capturing leads, closing gaps, and giving you back time — while you scale without burnout.",
    },
  ];

  return (
    <section className="bg-[#0A0A0A] text-white py-24 px-6" id="how-it-works">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
          We Build It. <span className="text-accent">You Scale It.</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-md hover:shadow-accent-lg hover:scale-[1.02] transition-all duration-300"
            >
              <div className="text-sm mb-4 font-bold text-accent uppercase tracking-widest">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 hover:text-accent transition">
                {step.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-16 text-sm text-gray-400 italic max-w-2xl mx-auto">
          Your custom-built system isn’t just automation — it’s a silent, strategic operator that works while you sleep.
        </p>
      </div>
    </section>
  );
}