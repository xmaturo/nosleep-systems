import ProjectGrid from '../../components/ProjectGrid';
import GlyphDivider from '../../components/GlyphDivider';

export const metadata = {
  title: 'Projects — No Sleep Systems',
  description: 'Production systems and applied mathematics research by Omar Medina.',
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-[10px] uppercase tracking-[3px] text-ember mb-3">
            PORTFOLIO
          </p>
          <h1 className="font-display text-[36px] md:text-[48px] uppercase text-cream mb-4">
            ALL PROJECTS
          </h1>
          <p className="font-mono text-[11px] text-cream/50 max-w-xl leading-relaxed">
            Production systems and original research. Everything built with open-source tools, minimal capital, and no team.
          </p>
        </div>
      </div>
      <GlyphDivider />
      <ProjectGrid />
    </div>
  );
}
