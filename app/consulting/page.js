import AuditForm from '../../components/AuditForm';

export const metadata = {
  title: 'APEX Dynamics — Structural Dynamics Consulting | No Sleep Systems',
  description:
    'Structural dynamics consulting for organizations. APEX measures whether your company still possesses the structural capacity to determine its own trajectory.',
};

const comparisonRows = [
  ['Revenue growth rate', 'Whether the structure producing that growth is intact or being consumed'],
  ['User retention', 'Whether retention is structural or compensated by operational heroics'],
  ['Activation rate', 'Whether activations create structural engagement or vanish after onboarding'],
  ['Churn rate', 'Whether churn signals structural decay or recoverable surface friction'],
  ['Operational efficiency', 'Whether efficiency gains are strengthening or hollowing the system'],
  ['Dashboard KPIs', 'Whether the organization is governing its trajectory or being governed by it'],
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
      'Evaluate whether your data supports phase-resolved cohort analysis. Review event log completeness across product, market, and organizational event classes. Determine what is measurable now and what requires remediation before diagnostic work can begin.',
  },
  {
    number: '02',
    name: 'STRUCTURAL MAPPING',
    description:
      'Execute the full measurement protocol against your operational data. Estimate perturbation exposure, reorganization capacity, and the competition ratio between them. Validate all estimates against a four-test robustness battery — if a test fails, that failure is itself a structural finding.',
  },
  {
    number: '03',
    name: 'DIAGNOSTIC REPORT',
    description:
      'Deliver the Structural Diagnostic Report: regime classification, sovereignty score, intervention leverage at your current position on the curve, and priority recommendation derived from which event classes drive your exposure versus your displacement.',
  },
  {
    number: '04',
    name: 'STRATEGIC SESSION',
    description:
      'Walk through the report with leadership. Translate regime findings into your organizational context — what the classification means for your specific decisions, what to monitor going forward, and at what cadence to re-evaluate structural position.',
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
        <p className="font-mono text-cool-cream/50 text-sm mt-4">
          For SaaS companies navigating growth, retention pressure, or organizational transition.
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
          <div className="mt-12 border-l-[3px] border-brass/40 pl-6 py-2">
            <p className="font-mono text-cool-cream/80 text-base leading-relaxed">
              A Series B SaaS company. 140% net revenue retention. Three consecutive
              quarters beating plan. Eighteen months later, a restructuring. The
              retention was real. The structural capacity to maintain it was not.
            </p>
          </div>
          <p className="font-mono text-brass text-sm mt-4">
            APEX was designed to see that gap before the metrics moved.
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
          <p className="font-mono text-cool-cream/80 text-base leading-relaxed mb-8">
            One score that measures whether the organization governs its own
            evolution — or is being governed by its environment and internal
            structural decay.
          </p>
          <p className="font-mono text-cool-cream/80 text-base leading-relaxed">
            The sovereignty score S captures two things simultaneously: how much
            reorganization capacity the system has relative to the perturbation
            pressure it faces, and how large the structural decision space
            remains — the range of outcomes the organization can still achieve.
          </p>
          <p className="font-mono text-cool-cream/80 text-base leading-relaxed mt-6">
            S is derived from a proven mathematical framework. It is not fitted
            from data, not calibrated per client, and not a heuristic. The
            functional form is nonlinear — improvements in structural capacity
            produce diminishing returns once the system is already robust. This
            is a mathematical consequence of the framework, not an assumption.
          </p>
          <details className="mt-8 border-[3px] border-brass/30 bg-wine/20">
            <summary className="cursor-pointer px-6 py-4 font-mono text-sm text-brass hover:text-cool-cream transition-colors">
              View the mathematical formulation
            </summary>
            <div className="px-6 pb-6 pt-2">
              <p className="font-mono text-2xl md:text-3xl text-brass text-center py-6">
                S = Δ̃<sub>max</sub> · tanh(2R)
              </p>
              <p className="font-mono text-sm text-cool-cream/70 leading-relaxed mt-4">
                R is the competition ratio — reorganization capacity divided by
                perturbation pressure. Δ<sub>max</sub> is the structural decision
                space, normalized against the system&apos;s historical range. The tanh
                saturation reflects that even highly organized systems have structural
                limits. The constant governing the crossover is exact and universal,
                derived from time-reversal symmetry — not estimated.
              </p>
            </div>
          </details>
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
          <div className="mt-10">
            <h3 className="font-display text-lg text-brass/70 uppercase mb-6">
              What APEX Does Not Do
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Build dashboards', 'Optimize ad spend', 'Forecast revenue', 'Replace your analytics stack', 'Tell you what product to build', 'Automate strategic decisions'].map((item) => (
                <span key={item} className="border border-brass/20 px-4 py-2 text-sm font-mono text-cool-cream/60">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Who Delivers This */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-display text-lg text-brass uppercase">
            Omar Medina
          </p>
          <p className="font-mono text-cool-cream/80 text-sm leading-relaxed mt-6">
            Systems engineer and applied mathematician. The structural framework
            behind APEX was developed from original research in oscillatory
            dynamics, validated computationally across thousands of synthetic
            systems, and translated into a measurement protocol for
            organizational diagnostics. The same person who built the theory
            built the engine.
          </p>
          <p className="font-mono text-cool-cream/40 text-xs mt-6">
            No Sleep Systems · nosleepsystems.com
          </p>
        </div>
      </section>

      {/* Section 9: CTA — Intake Form */}
      <section className="py-28 px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-brass uppercase">
            Request a Structural Audit
          </h2>
          <p className="font-mono text-cool-cream/50 text-sm mt-4 mb-12">
            Tell me about your company. I&apos;ll tell you if APEX can help.
          </p>
          <AuditForm />
        </div>
      </section>
    </main>
  );
}
