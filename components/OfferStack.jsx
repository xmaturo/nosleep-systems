import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function OfferStack() {
  const features = [
    {
      title: "24/7 Scheduler System",
      desc: "Books qualified leads, sends reminders, and manages follow-ups — autonomously.",
    },
    {
      title: "Lead Qualification Engine",
      desc: "Filters and routes prospects based on behavior, intent, and source — in real time.",
    },
    {
      title: "Smart Follow-Up Sequences",
      desc: "Deploys strategic messaging to re-engage ghosted leads and close deals faster.",
    },
    {
      title: "Custom Sales Intelligence",
      desc: "Monitors lead flow, deal stages, and bottlenecks with live performance data.",
    },
    {
      title: "Re-Engagement Protocols",
      desc: "Revives cold traffic with automated, multi-channel touchpoint strategies.",
    },
  ];

  return (
    <section
      className="py-24 px-6 bg-gradient-to-b from-black to-[#0b1321] text-white"
      id="offer-stack"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
          Not Just Automations —
          <br className="hidden md:block" />
          <span className="text-accent drop-shadow-[0_0_8px_#00f7bf99]">Operational Infrastructure</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-base md:text-lg">
          These aren't basic workflows. They're engineered frameworks that run your backend like
          a high-performance team — without the overhead.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md hover:border-accent transition-all shadow-lg hover:shadow-accent/30"
            >
              <div className="flex items-start space-x-4">
                <CheckCircleIcon className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-20 text-xs text-gray-500 italic">
          Estimated internal value: $20,000+ in custom development hours — now delivered turnkey.
        </p>
      </div>
    </section>
  );
}