export const metadata = {
  title: 'Lab — No Sleep Systems',
  description: 'Interactive demos and visualizations by Omar Medina.',
};

export default function LabPage() {
  return (
    <div className="pt-20">
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-[10px] uppercase tracking-[3px] text-ember mb-3">
            EXPERIMENTS
          </p>
          <h1 className="font-display text-[36px] md:text-[48px] uppercase text-cream mb-4">
            LAB
          </h1>
          <p className="font-mono text-[11px] text-cream/50 max-w-xl leading-relaxed mb-12">
            Interactive demos, visualizations, and proofs of concept. A space for exploration and experimentation.
          </p>

          <div className="border-[3px] border-wine hatch-45 p-12 text-center">
            <p className="font-display text-[14px] text-gold uppercase mb-3">
              COMING SOON
            </p>
            <p className="font-mono text-[10px] text-cream/40">
              Interactive demos and visualizations are in development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
