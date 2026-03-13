import Link from 'next/link';

const roles = [
  {
    title: 'Senior / Staff Engineer',
    body: 'Full-stack systems, AI integration, safety-first architecture. I ship entire products end to end — not tickets.',
  },
  {
    title: 'Research Engineer',
    body: 'Applied math → working code. Control theory, optimization, autonomous systems. I close the paper-to-product gap.',
  },
  {
    title: 'Technical Cofounder',
    body: 'Seed-stage partnerships where I own the technical vision. Especially AV, robotics, or applied controls. Capital-efficient by default.',
  },
];

export default function HireBlock() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto border-[3px] animate-pulse-border hatch-03 p-8 md:p-12">
        <h2 className="font-display text-[22px] md:text-[26px] uppercase leading-tight mb-6">
          THIS IS WHAT I DO WITH{' '}
          <span className="text-gold">OPEN-SOURCE TOOLS AND NO FUNDING</span>.{' '}
          IMAGINE WHAT I&apos;D DO{' '}
          <span className="text-gold">WITH YOURS</span>.
        </h2>

        <p className="font-mono text-[11px] text-cream/60 leading-relaxed max-w-3xl mb-10">
          I&apos;m looking for the right opportunity — somewhere that values high-output builders who ship entire systems, not just components. I bring theory-informed engineering, capital-efficient execution, and zero dependency on expensive toolchains.
        </p>

        {/* Role cards */}
        <div className="grid md:grid-cols-3 gap-[3px] mb-10">
          {roles.map((role) => (
            <div
              key={role.title}
              className="bg-wine/40 border-[2px] border-wine hover:border-ember p-5 transition-all duration-150"
            >
              <h3 className="font-display text-[11px] text-gold uppercase mb-3">
                {role.title}
              </h3>
              <p className="font-mono text-[9px] text-cream/45 leading-relaxed">
                {role.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:omar@nosleepsystems.com"
            className="inline-block font-mono text-[10px] uppercase tracking-[2px] font-bold bg-gold text-void px-6 py-3 border-[3px] border-gold hover:bg-ember hover:border-ember transition-all duration-150 text-center"
          >
            LET&apos;S TALK →
          </a>
          <a
            href="/cv"
            className="inline-block font-mono text-[10px] uppercase tracking-[2px] text-gold px-6 py-3 border-[3px] border-wine hover:border-gold transition-all duration-150 text-center"
          >
            DOWNLOAD CV
          </a>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/quackery"
            className="font-mono text-sm text-rust lowercase tracking-wider hover:text-ember transition-colors duration-200"
          >
            wanna see some quackery? →
          </Link>
        </div>
      </div>
    </section>
  );
}
