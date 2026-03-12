export default function MarqueeStrip() {
  const line1 = 'Open source → Zero vendor lock → Maximum leverage';
  const line2 = 'Theory → Architecture → Product → Compound output';
  const separator = ' ◆ ';

  const content = `${line1}${separator}${line2}${separator}${line1}${separator}${line2}${separator}`;

  return (
    <section className="border-y-[3px] border-wine overflow-hidden py-3">
      <div className="animate-marquee whitespace-nowrap">
        {[0, 1].map((i) => (
          <span key={i}>
            <span className="font-display text-[12px] uppercase tracking-[3px] text-wine">
              {line1}
            </span>
            <span className="font-display text-[12px] text-rust mx-3">◆</span>
            <span className="font-display text-[12px] uppercase tracking-[3px] text-rust">
              {line2}
            </span>
            <span className="font-display text-[12px] text-rust mx-3">◆</span>
          </span>
        ))}
        {[0, 1].map((i) => (
          <span key={`dup-${i}`}>
            <span className="font-display text-[12px] uppercase tracking-[3px] text-wine">
              {line1}
            </span>
            <span className="font-display text-[12px] text-rust mx-3">◆</span>
            <span className="font-display text-[12px] uppercase tracking-[3px] text-rust">
              {line2}
            </span>
            <span className="font-display text-[12px] text-rust mx-3">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
