export default function Footer() {
  return (
    <footer className="relative border-t-[3px] border-ember overflow-hidden">
      {/* Giant background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[120px] md:text-[120px] text-wine opacity-[0.06] uppercase whitespace-nowrap">
          NOSLEEP
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[10px] text-cream/35">
          No Sleep Systems · GTA, Canada · omar@nosleepsystems.com
        </p>

        <a
          href="mailto:omar@nosleepsystems.com"
          className="font-mono text-[10px] text-gold px-3 py-1 border-[3px] border-wine rounded-[40px] hover:bg-gold hover:text-void transition-all duration-150"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
