export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 px-6 overflow-hidden">
      {/* Floating blobs */}
      <div className="absolute top-10 left-[10%] w-[300px] h-[300px] rounded-full bg-ember/[0.08] blur-[80px] animate-drift pointer-events-none" />
      <div className="absolute top-40 right-[5%] w-[250px] h-[250px] rounded-full bg-rust/[0.1] blur-[80px] animate-drift-slow pointer-events-none" />
      <div className="absolute bottom-0 left-[40%] w-[350px] h-[350px] rounded-full bg-gold/[0.06] blur-[80px] animate-drift pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <p className="font-display text-[20px] text-ember uppercase tracking-[4px] mb-4">
          OMAR MEDINA
        </p>

        <h1 className="mb-6">
          <span className="block font-display text-[48px] md:text-[72px] text-gold uppercase leading-[0.95] -rotate-[1.5deg]">
            I DESIGN
          </span>
          <span className="block font-display text-[48px] md:text-[72px] text-cream uppercase leading-[0.95] rotate-[0.8deg]">
            LEVERAGE.
          </span>
        </h1>

        <p className="font-mono text-[13px] text-cream/55 max-w-[560px] leading-relaxed">
          I turn theory into architecture and architecture into product — with{' '}
          <span className="text-ember font-bold">open-source tools, minimal capital, and no team</span>.
          Everything you see here was built by one person on a near-zero budget.
          Now imagine what happens when you give me resources.
        </p>
      </div>
    </section>
  );
}
