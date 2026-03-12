import Link from 'next/link';

export default function Lanes() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto border-[3px] border-gold grid md:grid-cols-2">
        {/* Engineering Lane */}
        <div className="relative hatch-45 p-8 md:border-r-[3px] md:border-gold border-b-[3px] md:border-b-0 border-gold">
          <p className="font-display text-[10px] uppercase tracking-[3px] text-ember mb-3">
            ENGINEERING
          </p>
          <h3 className="font-display text-[24px] uppercase text-cream mb-4">
            PRODUCTION SYSTEMS
          </h3>
          <p className="font-mono text-[10px] text-cream/50 leading-relaxed mb-6">
            Full-stack software that runs businesses. AI agents with safety guardrails, financial systems, real-time market analysis. All open-source, all production-grade.
          </p>
          <p className="font-mono text-[9px] text-rust uppercase mb-6">
            → Contractor OS · LACRA · FERRUM
          </p>
          <Link
            href="/projects"
            className="inline-block font-mono text-[10px] uppercase tracking-[2px] text-gold px-5 py-2 border-[3px] border-gold hover:bg-gold hover:text-void transition-all duration-150"
          >
            Explore →
          </Link>
        </div>

        {/* Research Lane */}
        <div className="relative hatch-neg45 p-8">
          <p className="font-display text-[10px] uppercase tracking-[3px] text-gold mb-3">
            RESEARCH
          </p>
          <h3 className="font-display text-[24px] uppercase text-cream mb-4">
            APPLIED MATHEMATICS
          </h3>
          <p className="font-mono text-[10px] text-cream/50 leading-relaxed mb-6">
            Original theory connecting oscillatory dynamics to autonomous vehicle control. From abstract theorems to engineering applications with verifiable predictions.
          </p>
          <p className="font-mono text-[9px] text-rust uppercase mb-6">
            → Glue Program · MOLECULA · CBF diagnostics
          </p>
          <Link
            href="/projects"
            className="inline-block font-mono text-[10px] uppercase tracking-[2px] text-gold px-5 py-2 border-[3px] border-gold hover:bg-gold hover:text-void transition-all duration-150"
          >
            Explore →
          </Link>
        </div>
      </div>
    </section>
  );
}
