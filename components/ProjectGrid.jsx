import ProjectCard from './ProjectCard';

const projects = [
  {
    tag: 'SYSTEM',
    name: 'Contractor OS',
    slug: 'contractor-os',
    description: 'AI-powered ERP for security camera contractors. Neural Core agent, 30+ intents, 23-table schema, financial safety guardrails, human-in-the-loop for all writes.',
    impact: 'One contractor operates like a team of 5',
    stack: 'Next.js · FastAPI · Ollama · PostgreSQL',
  },
  {
    tag: 'SYSTEM',
    name: 'LACRA',
    slug: 'lacra',
    description: 'Deterministic market structure analysis. 5 detection engines, 4 institutional APIs, event sourcing architecture. Describes conditions — never prescribes.',
    impact: 'Institutional-grade analysis, zero SaaS spend',
    stack: 'Python · FastAPI · AsyncIO · React',
  },
  {
    tag: 'RESEARCH',
    name: 'The Glue Program',
    slug: 'glue-program',
    description: 'Universal constant ξ = ½ in oscillatory systems under detailed balance. 34-page treatise with five-level evidence taxonomy.',
    impact: 'One theorem powers three engineering papers',
    stack: 'PDMPs · Limit cycles · Detailed balance',
  },
  {
    tag: 'RESEARCH',
    name: 'MOLECULA',
    slug: 'molecula',
    description: 'LTV-MPC architecture for AV ride comfort. Cost weights derived from the Glue Program\'s oscillatory dynamics.',
    impact: 'Theory-to-product pipeline for autonomous vehicles',
    stack: 'Control theory · MPC · LTV architecture',
  },
  {
    tag: 'RESEARCH',
    name: 'CBF Diagnostics',
    slug: 'cbf-diagnostics',
    description: 'Phase transition in safety filter statistics at β* ≈ 3. ξ ≈ 0.5 emerges in the tanh regime (R² = 0.958).',
    impact: 'New diagnostic framework for safety-critical AV',
    stack: 'Control barrier functions · 2D simulation',
  },
];

export default function ProjectGrid() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-display text-[16px] text-gold uppercase whitespace-nowrap">
            SELECTED WORK
          </h2>
          <div className="flex-1 border-t-[2px] border-dashed border-wine" />
        </div>

        {/* Top row: 3 cards */}
        <div className="grid md:grid-cols-3 gap-[3px] mb-[3px]">
          {projects.slice(0, 3).map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Bottom row: 2 cards */}
        <div className="grid md:grid-cols-2 gap-[3px]">
          {projects.slice(3).map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
