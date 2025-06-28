export default function HowItWorks() {
  const steps = [
    {
      icon: "Step 1",
      title: "Lock In Your Offer",
      desc: "We analyze your current offer, client flow, and bottlenecks — then align it with our battle-tested system for faster wins.",
    },
    {
      icon: "Step 2",
      title: "Deploy the Execution Engine",
      desc: "We install AI agents, automations, and conversion layers that run silently in the background — no payroll, no burnout.",
    },
    {
      icon: "Step 3",
      title: "Scale Autonomously",
      desc: "Your system now captures, qualifies, and converts — 24/7. You focus on growth, not follow-ups.",
    },
  ];

  return (
    <section className="bg-background text-white py-20 px-6" id="how-it-works">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-slate/30 rounded-xl p-6 border border-white/10 backdrop-blur-sm hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="text-sm mb-4 font-bold text-accent uppercase tracking-widest">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 hover:text-accent transition">
                {step.title}
              </h3>
              <p className="text-sm text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-16 text-sm text-gray-400 italic max-w-xl mx-auto">
          We don’t just automate tasks — we engineer outcomes. The system adapts to your offer, runs silently, and never asks for a raise.
        </p>
      </div>
    </section>
  );
}