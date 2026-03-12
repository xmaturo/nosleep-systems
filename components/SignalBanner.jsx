export default function SignalBanner() {
  return (
    <section className="px-6 py-4">
      <div className="max-w-7xl mx-auto relative bg-ember border-[3px] border-gold px-6 py-4 overflow-hidden animate-wiggle">
        {/* Scrolling background text */}
        <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
          <div className="animate-marquee whitespace-nowrap">
            <span className="font-display text-[40px] uppercase text-void/[0.08] mx-8">AVAILABLE</span>
            <span className="font-display text-[40px] uppercase text-void/[0.08] mx-8">AVAILABLE</span>
            <span className="font-display text-[40px] uppercase text-void/[0.08] mx-8">AVAILABLE</span>
            <span className="font-display text-[40px] uppercase text-void/[0.08] mx-8">AVAILABLE</span>
            <span className="font-display text-[40px] uppercase text-void/[0.08] mx-8">AVAILABLE</span>
            <span className="font-display text-[40px] uppercase text-void/[0.08] mx-8">AVAILABLE</span>
            <span className="font-display text-[40px] uppercase text-void/[0.08] mx-8">AVAILABLE</span>
            <span className="font-display text-[40px] uppercase text-void/[0.08] mx-8">AVAILABLE</span>
          </div>
        </div>

        <p className="relative font-mono text-[11px] text-void font-bold">
          <span className="uppercase tracking-[2px]">AVAILABLE FOR</span>{' '}
          → Full-time engineering roles · Research collaborations · Contract systems work · Seed-stage technical partnerships
        </p>
      </div>
    </section>
  );
}
