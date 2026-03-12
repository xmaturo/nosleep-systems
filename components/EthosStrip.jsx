export default function EthosStrip() {
  return (
    <section className="px-6 py-8">
      <div className="max-w-7xl mx-auto border-[3px] border-rust hatch-03 px-6 py-5 flex flex-col md:flex-row items-start md:items-center gap-4">
        <span className="font-display text-[9px] uppercase bg-rust text-void px-3 py-1 rounded-full whitespace-nowrap tracking-[1px]">
          OPEN SOURCE STACK
        </span>
        <p className="font-mono text-[10px] text-cream leading-relaxed">
          <span className="text-gold font-bold">Next.js</span> ·{' '}
          <span className="text-gold font-bold">FastAPI</span> ·{' '}
          <span className="text-gold font-bold">PostgreSQL</span> ·{' '}
          <span className="text-gold font-bold">Ollama</span> ·{' '}
          <span className="text-gold font-bold">Python</span> ·{' '}
          <span className="text-gold font-bold">React</span> ·{' '}
          <span className="text-gold font-bold">AsyncIO</span> — no proprietary dependencies, no vendor lock-in, no SaaS fees. Every system I build runs on tools anyone can audit, fork, and deploy. Capital efficiency isn&apos;t a constraint — it&apos;s a design principle.
        </p>
      </div>
    </section>
  );
}
