import Link from 'next/link';

const projectData = {
  'contractor-os': {
    tag: 'SYSTEM',
    name: 'Contractor OS',
    description: 'AI-powered ERP for security camera contractors. Neural Core agent, 30+ intents, 23-table schema, financial safety guardrails, human-in-the-loop for all writes.',
    impact: 'One contractor operates like a team of 5',
    stack: 'Next.js · FastAPI · Ollama · PostgreSQL',
  },
  'lacra': {
    tag: 'SYSTEM',
    name: 'LACRA',
    description: 'Deterministic market structure analysis. 5 detection engines, 4 institutional APIs, event sourcing architecture. Describes conditions — never prescribes.',
    impact: 'Institutional-grade analysis, zero SaaS spend',
    stack: 'Python · FastAPI · AsyncIO · React',
  },
  'glue-program': {
    tag: 'RESEARCH',
    name: 'The Glue Program',
    description: 'Universal constant ξ = ½ in oscillatory systems under detailed balance. 34-page treatise with five-level evidence taxonomy.',
    impact: 'One theorem powers three engineering papers',
    stack: 'PDMPs · Limit cycles · Detailed balance',
  },
  'molecula': {
    tag: 'RESEARCH',
    name: 'MOLECULA',
    description: 'LTV-MPC architecture for AV ride comfort. Cost weights derived from the Glue Program\'s oscillatory dynamics.',
    impact: 'Theory-to-product pipeline for autonomous vehicles',
    stack: 'Control theory · MPC · LTV architecture',
  },
  'cbf-diagnostics': {
    tag: 'RESEARCH',
    name: 'CBF Diagnostics',
    description: 'Phase transition in safety filter statistics at β* ≈ 3. ξ ≈ 0.5 emerges in the tanh regime (R² = 0.958).',
    impact: 'New diagnostic framework for safety-critical AV',
    stack: 'Control barrier functions · 2D simulation',
  },
};

export function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const project = projectData[params.slug];
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.name} — No Sleep Systems`,
    description: project.description,
  };
}

export default function ProjectPage({ params }) {
  const project = projectData[params.slug];

  if (!project) {
    return (
      <div className="pt-28 px-6 text-center">
        <h1 className="font-display text-[36px] text-gold uppercase">PROJECT NOT FOUND</h1>
        <Link href="/projects" className="font-mono text-[10px] text-ember mt-4 inline-block">
          ← Back to projects
        </Link>
      </div>
    );
  }

  const isSystem = project.tag === 'SYSTEM';

  return (
    <div className="pt-20">
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/projects" className="font-mono text-[10px] text-cream/40 hover:text-gold transition-colors uppercase tracking-[2px] mb-8 inline-block">
            ← All projects
          </Link>

          <span className={`inline-block font-display text-[8px] uppercase tracking-[1px] px-2 py-0.5 border-[2px] ${isSystem ? 'border-ember' : 'border-gold'} text-cream mb-4`}>
            {project.tag}
          </span>

          <h1 className="font-display text-[36px] md:text-[48px] uppercase text-cream mb-6">
            {project.name}
          </h1>

          <p className="font-mono text-[12px] text-cream/60 leading-relaxed mb-8 max-w-2xl">
            {project.description}
          </p>

          <div className="border-[3px] border-wine hatch-03 p-6 mb-8">
            <p className="font-mono text-[9px] text-ember font-bold uppercase mb-2">
              → {project.impact}
            </p>
            <p className="font-mono text-[9px] text-cream/30">
              {project.stack}
            </p>
          </div>

          <div className="border-t-[3px] border-wine pt-8">
            <p className="font-mono text-[11px] text-cream/40 leading-relaxed">
              Full project write-up coming soon. This page will be powered by MDX content from the <code className="text-gold">/content/projects/</code> directory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
