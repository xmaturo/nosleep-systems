export const metadata = {
  title: 'CV — Omar Medina — No Sleep Systems',
  description: 'Resume and professional background of Omar Medina.',
};

export default function CVPage() {
  return (
    <div className="pt-20">
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="font-display text-[10px] uppercase tracking-[3px] text-ember mb-3">
            CURRICULUM VITAE
          </p>
          <h1 className="font-display text-[36px] md:text-[48px] uppercase text-cream mb-4">
            OMAR MEDINA
          </h1>
          <p className="font-mono text-[11px] text-cream/50 max-w-xl leading-relaxed mb-8">
            Full-stack engineer and applied mathematician. Greater Toronto Area, Canada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="mailto:omar@nosleepsystems.com"
              className="inline-block font-mono text-[10px] uppercase tracking-[2px] font-bold bg-gold text-void px-6 py-3 border-[3px] border-gold hover:bg-ember hover:border-ember transition-all duration-150 text-center"
            >
              CONTACT →
            </a>
          </div>

          {/* Summary */}
          <div className="border-[3px] border-wine hatch-03 p-8 mb-8">
            <h2 className="font-display text-[14px] text-gold uppercase mb-4">SUMMARY</h2>
            <p className="font-mono text-[10px] text-cream/60 leading-relaxed">
              Builder who ships entire systems — not tickets. I turn theory into architecture and architecture into product with open-source tools, minimal capital, and zero dependency on expensive toolchains. Five production-grade projects spanning AI agents, financial systems, and control theory research, all built solo on a near-zero budget.
            </p>
          </div>

          {/* Systems */}
          <div className="border-[3px] border-wine hatch-45 p-8 mb-8">
            <h2 className="font-display text-[14px] text-ember uppercase mb-4">ENGINEERING</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-display text-[11px] text-cream uppercase">Contractor OS</h3>
                <p className="font-mono text-[9px] text-cream/40 mt-1">AI-powered ERP. Neural Core agent, 30+ intents, 23-table schema. Next.js · FastAPI · Ollama · PostgreSQL</p>
              </div>
              <div>
                <h3 className="font-display text-[11px] text-cream uppercase">LACRA</h3>
                <p className="font-mono text-[9px] text-cream/40 mt-1">Deterministic market analysis. 5 detection engines, 4 institutional APIs. Python · FastAPI · AsyncIO · React</p>
              </div>
            </div>
          </div>

          {/* Research */}
          <div className="border-[3px] border-wine hatch-neg45 p-8 mb-8">
            <h2 className="font-display text-[14px] text-gold uppercase mb-4">RESEARCH</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-display text-[11px] text-cream uppercase">The Glue Program</h3>
                <p className="font-mono text-[9px] text-cream/40 mt-1">Universal constant ξ = ½ in oscillatory systems under detailed balance. 34-page treatise.</p>
              </div>
              <div>
                <h3 className="font-display text-[11px] text-cream uppercase">MOLECULA</h3>
                <p className="font-mono text-[9px] text-cream/40 mt-1">LTV-MPC architecture for AV ride comfort derived from oscillatory dynamics.</p>
              </div>
              <div>
                <h3 className="font-display text-[11px] text-cream uppercase">CBF Diagnostics</h3>
                <p className="font-mono text-[9px] text-cream/40 mt-1">Phase transition in safety filter statistics. New diagnostic framework for safety-critical AV.</p>
              </div>
            </div>
          </div>

          {/* Stack */}
          <div className="border-[3px] border-rust p-8">
            <h2 className="font-display text-[14px] text-rust uppercase mb-4">STACK</h2>
            <p className="font-mono text-[9px] text-cream/50 leading-loose">
              <span className="text-gold font-bold">Next.js</span> ·{' '}
              <span className="text-gold font-bold">React</span> ·{' '}
              <span className="text-gold font-bold">FastAPI</span> ·{' '}
              <span className="text-gold font-bold">Python</span> ·{' '}
              <span className="text-gold font-bold">PostgreSQL</span> ·{' '}
              <span className="text-gold font-bold">Ollama</span> ·{' '}
              <span className="text-gold font-bold">AsyncIO</span> ·{' '}
              Tailwind CSS · MDX · Vercel · Control Theory · MPC · CBFs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
