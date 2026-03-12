const proofs = [
  { value: '79', label: 'API ENDPOINTS', color: 'text-gold' },
  { value: '5', label: 'DETECTION ENGINES', color: 'text-gold' },
  { value: '3', label: 'RESEARCH PAPERS', color: 'text-gold' },
  { value: '1', label: 'PERSON', color: 'text-gold' },
  { value: '$0', label: 'VENTURE CAPITAL', color: 'text-ember', pulse: true },
];

export default function ProofStrip() {
  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-[3px]">
        {proofs.map((item, i) => (
          <div
            key={item.label}
            className={`relative bg-wine px-4 py-6 text-center ${i % 2 === 0 ? 'hatch-45' : 'hatch-neg45'}`}
          >
            <p className={`font-display text-[26px] md:text-[28px] ${item.color} ${item.pulse ? 'animate-pulse-scale' : ''}`}>
              {item.value}
            </p>
            <p className="font-mono text-[8px] md:text-[9px] uppercase text-cream/45 tracking-[1px] mt-1">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
