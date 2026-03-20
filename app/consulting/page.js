export const metadata = {
  title: 'APEX Dynamics — Structural Dynamics Consulting | No Sleep Systems',
  description:
    'Structural dynamics consulting for organizations. APEX measures whether your company still possesses the structural capacity to determine its own trajectory.',
};

const comparisonRows = [
  ['Revenue growth rate', 'Whether the system can structurally sustain it'],
  ['User retention', 'Whether retention is structural or compensated'],
  ['Activation rate', 'Whether activations translate into structural engagement'],
  ['Churn rate', 'Whether churn is a symptom of structural decay or surface friction'],
  ['Operational efficiency', 'Whether efficiency gains cost structural flexibility'],
  ['Dashboard KPIs', 'Whether the organization can still determine its own trajectory'],
];

const regimes = [
  {
    name: 'FRAGILE',
    color: 'text-ember',
    description:
      'The environment governs the trajectory. Decisions produce little structural effect. The organization reacts to shocks but cannot shape its own path. Maximum intervention leverage — small structural investments yield large returns.',
  },
  {
    name: 'ADAPTIVE',
    color: 'text-brass',
    description:
      'Perturbation and reorganization are balanced. The organization absorbs shocks and reorganizes actively. The operative regime for healthy growth-stage companies.',
  },
  {
    name: 'ROBUST',
    color: 'text-cool-cream',
    description:
      'Internal structure dominates external noise. Decisions govern the trajectory. Diminishing returns on further structural intervention. The critical question is whether the decision space is expanding or contracting.',
  },
  {
    name: 'PSEUDO-ROBUST',
    color: 'text-rust',
    description:
      'Appears robust. Dashboards look clean. But the structural decision space is collapsing. Events stop moving the system not because it absorbs them, but because its degrees of freedom have vanished. The most dangerous state — and invisible to conventional analytics.',
  },
];

const phases = [
  {
    number: '01',
    name: 'DATA AUDIT',
    description:
      'Review available data against APEX requirements. Determine what is measurable. If data infrastructure remediation is required, scope it separately.',
  },
  {
    number: '02',
    name: 'STRUCTURAL MAPPING',
    description:
      'Execute the measurement protocol against operational data. Estimate structural parameters with robustness validation.',
  },
  {
    number: '03',
    name: 'DIAGNOSTIC REPORT',
    description:
      'Deliver the Structural Diagnostic Report: regime classification, sovereignty score, intervention leverage, and priority recommendation.',
  },
  {
    number: '04',
    name: 'STRATEGIC SESSION',
    description:
      'Walk through the report with leadership. Translate structural findings into organizational context. Define what to monitor going forward.',
  },
];

const reportItems = [
  'Structural parameters with robustness bands',
  'Sovereignty score and intervention leverage',
  'Regime classification with supporting evidence',
  'Hazard profile — where the system is most exposed',
  'Displacement profile — where reorganization capacity concentrates',
  'Intervention recommendation — specific, regime-derived, priority-sequenced',
];

export default function ConsultingPage() {
  return (
    <main className="bg-slate-void min-h-screen pt-14">
      {/* Section 1: Header */}
      <section className="pt-32 pb-20 text-center px-6">
        <h1 className="font-display text-5xl md:text-7xl text-cool-cream uppercase tracking-wider">
          APEX DYNAMICS
        </h1>
        <p className="font-mono text-brass text-lg mt-6">
          Structural Dynamics Consulting
        </p>
        <p className="font-mono text-cool-cream/50 text-sm mt-3">
          No Sleep Systems
        </p>
      </section>

      {/* Section 2: The Problem */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xl md:text-2xl text-brass leading-relaxed">
            Most analytics tools measure what a company has done. APEX Dynamics
            measures whether it still can.
          </p>
          <p className="font-mono text-cool-cream/80 text-base leading-relaxed mt-8">
            An organization can exhibit strong revenue, stable retention, and
            operational efficiency while simultaneously degrading the internal
            structure that makes those metrics possible. By the time the
            dashboards move, the structural reserves have already been consumed.
          </p>
          <p className="font-mono text-cool-cream/80 text-base leading-relaxed mt-6">
            Conventional analytics was not designed to see this. APEX was.
          </p>
        </div>
      </section>

      {/* Section 3: What You're Not Seeing */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-cool-cream uppercase mb-10">
            What You&apos;re Not Seeing
          </h2>
          <div className="border-[3px] border-brass/30 p-6">
            <div className="grid grid-cols-2 gap-x-6">
              <p className="font-mono text-brass font-bold text-sm pb-4 border-b border-brass/20">
                What your dashboards measure
              </p>
              <p className="font-mono text-brass font-bold text-sm pb-4 border-b border-brass/20">
                What they cannot see
              </p>
              {comparisonRows.map(([left, right], i) => (
                <div key={i} className="col-span-2 grid grid-cols-2 gap-x-6">
                  <p className="font-mono text-cool-cream/60 text-sm py-4 border-b border-brass/20">
                    {left}
                  </p>
                  <p className="font-mono text-cool-cream text-sm py-4 border-b border-brass/20">
                    {right}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Four Regimes */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-cool-cream uppercase mb-6">
            Structural Regimes
          </h2>
          <p className="font-mono text-cool-cream/80 text-base leading-relaxed mb-10">
            Every organization operates in one of four structural regimes. The
            regime determines not just the condition of the system, but the
            magnitude of returns on any structural investment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regimes.map((regime) => (
              <div
                key={regime.name}
                className="bg-wine/30 border-[3px] border-brass/30 p-6"
              >
                <h3 className={`font-display text-xl uppercase ${regime.color}`}>
                  {regime.name}
                </h3>
                <p className="font-mono text-cool-cream/80 text-sm leading-relaxed mt-4">
                  {regime.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Structural Sovereignty */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-cool-cream uppercase mb-6">
            Structural Sovereignty
          </h2>
          <p className="font-mono text-cool-cream/80 text-base leading-relaxed mb-10">
            One score. Derived from a proven mathematical framework — not fitted
            from data.
          </p>
          <div className="border-[3px] border-brass bg-wine/20 p-8 text-center mb-10">
            <p className="font-mono text-2xl md:text-3xl text-brass">
              S = Δ̃max · tanh(2R)
            </p>
          </div>
          <p className="font-mono text-cool-cream/80 text-base leading-relaxed">
            S measures the degree to which the organization governs its own
            evolution, rather than being governed by its environment or internal
            structural decay.
          </p>
          <p className="font-mono text-cool-cream/80 text-base leading-relaxed mt-6">
            R is the ratio of reorganization capacity to perturbation pressure.
            Δmax is the structural decision space — the range of outcomes the
            organization can still achieve.
          </p>
          <p className="font-mono text-cool-cream/80 text-base leading-relaxed mt-6">
            The functional form is nonlinear. Improvements in structural
            capacity produce diminishing returns once the system is already
            robust. This is not an assumption — it is a mathematical consequence
            of the underlying framework.
          </p>
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-cool-cream uppercase mb-6">
            Engagement
          </h2>
          <p className="font-mono text-cool-cream/80 text-base leading-relaxed mb-10">
            Four phases. Each with a defined deliverable.
          </p>
          {phases.map((phase, i) => (
            <div
              key={phase.number}
              className={`py-6 ${i < phases.length - 1 ? 'border-b border-brass/15' : ''}`}
            >
              <p className="font-display text-lg text-brass">
                {phase.number} — {phase.name}
              </p>
              <p className="font-mono text-cool-cream/80 text-sm leading-relaxed mt-3">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: What You Get */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-cool-cream uppercase mb-6">
            The Report
          </h2>
          <p className="font-mono text-lg text-brass leading-relaxed mb-10">
            The Structural Diagnostic Report is not a dashboard. It is a
            diagnosis.
          </p>
          <div className="space-y-0">
            {reportItems.map((item, i) => (
              <div key={i} className="border-l-[3px] border-brass pl-4 py-2">
                <p className="font-mono text-cool-cream/80 text-sm">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <p className="font-mono text-cool-cream/80 text-base leading-relaxed mt-10">
            What the report does not contain: revenue projections, growth
            forecasts, or operational recommendations about specific product
            features. APEX measures the structural dynamics of the system. What
            the organization does with that information is a strategic decision
            that belongs to its leadership.
          </p>
        </div>
      </section>

      {/* Section 8: CTA */}
      <section className="py-28 text-center px-6">
        <h2 className="font-display text-3xl md:text-5xl text-brass uppercase">
          Let&apos;s Find Out.
        </h2>
        <a
          href="mailto:omar@nosleepsystems.com"
          className="inline-block font-mono text-cool-cream border-b-2 border-brass mt-8 hover:text-brass transition-colors duration-150"
        >
          omar@nosleepsystems.com
        </a>
      </section>
    </main>
  );
}
