export default function OfferStack() {
  const features = [
    {
      title: "24/7 AI Scheduler",
      desc: "Books leads, sends reminders, and handles follow-ups — no human needed.",
    },
    {
      title: "Lead Qualification Engine",
      desc: "Filters high-intent leads and routes them automatically based on behavior.",
    },
    {
      title: "Smart Follow-Up Sequences",
      desc: "Prebuilt automations that recover ghosted leads and close more deals.",
    },
    {
      title: "Custom Sales Dashboard",
      desc: "Track lead flow, deal stages, and bottlenecks in real time.",
    },
    {
      title: "Re-Engagement Protocols",
      desc: "Reactivates cold leads automatically with strategic touchpoints.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-[#0d1b2a] text-white" id="offer">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          You’re Not Just Getting Automations —
          <br className="hidden md:block" />
          You’re Getting <span className="text-accent">Infrastructure</span>.
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12 text-sm">
          Every system is built to operate like a trained team member — running silently,
          intelligently, and 24/7. This is your unfair advantage.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md hover:border-accent transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="text-accent text-xl font-bold">✅</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 text-xs text-gray-500 italic">
          Estimated internal value: $20,000+ in custom development hours.
        </p>
      </div>
    </section>
  );
}