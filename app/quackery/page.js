import Link from 'next/link';

export const metadata = {
  title: 'Quackery — No Sleep Systems',
  description: 'Speculative engineering from the edges of the Glue Program.',
};

/* ---- Blob Data ---- */
const blobs = [
  { color: 'bg-gold', size: 'w-[600px] h-[600px]', pos: '-top-[10%] -left-[5%]', anim: 'animate-drift-fast' },
  { color: 'bg-magenta', size: 'w-[500px] h-[500px]', pos: 'top-[20%] -right-[10%]', anim: 'animate-drift-fast-2' },
  { color: 'bg-ember', size: 'w-[450px] h-[450px]', pos: 'bottom-[30%] left-[10%]', anim: 'animate-drift-fast-3' },
  { color: 'bg-violet', size: 'w-[550px] h-[550px]', pos: '-bottom-[5%] right-[15%]', anim: 'animate-drift-fast-4' },
  { color: 'bg-magenta', size: 'w-[400px] h-[400px]', pos: 'top-[50%] left-[50%]', anim: 'animate-drift-fast-5' },
];

/* ---- Entry Data ---- */
const entries = [
  {
    id: 'vimana',
    tag: 'Speculative Vehicle',
    tagColor: 'bg-ember',
    name: 'VIMANA',
    nameColor: 'text-gold',
    hook: 'Full engineering package for an adaptive metasurface vehicle. 24 modules. 10 volumes. The propulsion mechanism is an open problem.',
    vitalBorder: 'border-l-gold',
    vitalNumberColor: 'text-gold',
    hoverBorder: 'hover:border-gold',
    cornerTopVar: 'rgba(254, 209, 114, 0.35)',
    cornerBottomVar: 'rgba(232, 62, 140, 0.2)',
    vitals: [
      { number: '24', label: 'Modules' },
      { number: '1,111', label: 'Phase elements / module' },
      { number: '$790K', label: 'Total program' },
      { number: 'OP-1', label: 'Unsolved' },
    ],
  },
  {
    id: 'nuevas',
    tag: 'Speculative Theory',
    tagColor: 'bg-magenta',
    name: 'NUEVAS FÍSICAS',
    nameColor: 'text-magenta',
    hook: '83 laws of physics. One equation. One constant. ξ\u00a0=\u00a0½.',
    vitalBorder: 'border-l-magenta',
    vitalNumberColor: 'text-magenta',
    hoverBorder: 'hover:border-magenta',
    cornerTopVar: 'rgba(232, 62, 140, 0.35)',
    cornerBottomVar: 'rgba(123, 47, 247, 0.2)',
    vitals: [
      { number: '83', label: 'Laws mapped' },
      { number: '6', label: 'Independent derivations of ξ' },
      { number: '28', label: 'Pages' },
      { number: '0', label: 'Experimental validation' },
    ],
  },
  {
    id: 'gvtex',
    tag: 'Speculative System',
    tagColor: 'bg-ember',
    name: 'GVTE-X REACTOR',
    nameColor: 'text-ember',
    hook: 'A machine designed to survive its own debunking.',
    vitalBorder: 'border-l-ember',
    vitalNumberColor: 'text-gold',
    hoverBorder: 'hover:border-ember',
    cornerTopVar: 'rgba(243, 116, 43, 0.35)',
    cornerBottomVar: 'rgba(232, 62, 140, 0.2)',
    vitals: [
      { number: '7', label: 'Reactor stack layers' },
      { number: '4', label: 'Build phases' },
      { number: '5', label: 'Failure modes catalogued' },
      { number: 'Pnet\u00a0>\u00a00', label: 'Success criterion' },
    ],
  },
  {
    id: 'harvester',
    tag: 'Build Guide',
    tagColor: 'bg-rust',
    name: 'HARVESTER BUILD',
    nameColor: 'text-cream',
    hook: '$367 in parts. One spark gap. One universal constant.',
    vitalBorder: 'border-l-rust',
    vitalNumberColor: 'text-cream',
    hoverBorder: 'hover:border-cream',
    cornerTopVar: 'rgba(245, 240, 232, 0.25)',
    cornerBottomVar: 'rgba(184, 58, 20, 0.2)',
    vitals: [
      { number: '$367', label: 'Total BOM' },
      { number: '5', label: 'Build stages' },
      { number: '<10µW', label: 'Realistic output' },
      { number: '0.500', label: 'ξ target ± 0.005' },
    ],
  },
];

/* ---- Marquee content ---- */
const marqueeItems = [
  { text: 'SPECULATIVE ENGINEERING', color: 'text-gold' },
  { text: '✦', color: 'text-cream' },
  { text: 'UNVALIDATED THEORY', color: 'text-magenta' },
  { text: '✦', color: 'text-cream' },
  { text: 'BOUNDARY RESEARCH', color: 'text-ember' },
  { text: '✦', color: 'text-cream' },
  { text: 'PROCEED WITH CURIOSITY', color: 'text-cream' },
  { text: '✦', color: 'text-cream' },
];

/* ---- Glyph Divider ---- */
function QuackGlyphs({ count = 5 }) {
  const styles = [
    'rotate-45 border-gold',
    'rounded-full border-magenta',
    'rotate-45 border-violet',
    'rounded-full border-ember',
    'rotate-45 border-gold',
  ];
  return (
    <div className="flex justify-center items-center gap-6 py-12">
      {styles.slice(0, count).map((s, i) => (
        <div
          key={i}
          className={`w-5 h-5 border-[4px] ${s} animate-glyph-pulse`}
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
    </div>
  );
}

/* ---- Entry Component ---- */
function Entry({ entry }) {
  return (
    <article
      className={`relative border-[4px] border-rust p-8 md:p-12 hatch-quack bg-wine/25 transition-all duration-150 corner-mark-quack ${entry.hoverBorder} hover:translate-x-[-3px] hover:translate-y-[-3px] hover:rotate-[-0.3deg]`}
      style={{
        '--corner-color-top': entry.cornerTopVar,
        '--corner-color-bottom': entry.cornerBottomVar,
      }}
    >
      {/* Tag */}
      <span className={`inline-block font-display text-[0.65rem] uppercase tracking-[0.15em] text-void ${entry.tagColor} px-3 py-1 rounded-[40px] mb-4`}>
        {entry.tag}
      </span>

      {/* Name */}
      <h2 className={`font-display text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-none mb-4 tracking-tight ${entry.nameColor}`}>
        {entry.name}
      </h2>

      {/* Hook */}
      <p className="font-mono text-[clamp(0.9rem,1.8vw,1.1rem)] text-cream/90 leading-relaxed mb-8 max-w-[700px]">
        {entry.hook}
      </p>

      {/* Divider */}
      <div className="entry-divider-line w-full mb-6" />

      {/* Vitals */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {entry.vitals.map((v, i) => (
          <div key={i} className={`pl-4 border-l-[3px] ${entry.vitalBorder}`}>
            <div className={`font-display text-xl ${entry.vitalNumberColor}`}>{v.number}</div>
            <div className="font-mono text-[0.7rem] text-cream/60 uppercase tracking-wider mt-0.5">{v.label}</div>
          </div>
        ))}
      </div>
    </article>
  );
}

/* ---- Page ---- */
export default function QuackeryPage() {
  return (
    <div className="quackery-bg min-h-screen relative">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Floating blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {blobs.map((b, i) => (
          <div
            key={i}
            className={`absolute rounded-full blur-[80px] opacity-15 ${b.color} ${b.size} ${b.pos} ${b.anim}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">

        {/* ===== THE GATE ===== */}
        <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 relative overflow-hidden">
          <h1 className="font-display leading-[0.85] tracking-tight -ml-[0.05em]" style={{ fontSize: 'clamp(6rem, 18vw, 16rem)' }}>
            <span className="text-gold">Q</span>
            <span className="text-cream">U</span>
            <span className="text-ember">A</span>
            <span className="text-magenta">C</span>
            <span className="text-cream">K</span>
            <span className="text-violet">E</span>
            <span className="text-gold">R</span>
            <span className="text-ember">Y</span>
          </h1>
          <p className="font-mono text-[clamp(1rem,2.5vw,1.5rem)] text-ember mt-6 lowercase tracking-wider">
            welcome to the rabbit hole
          </p>
          <div className="absolute bottom-8 left-1/2 animate-scroll-hint font-mono text-xs text-rust/60 lowercase tracking-widest">
            ↓ scroll ↓
          </div>
        </section>

        {/* Glyph divider */}
        <QuackGlyphs count={5} />

        {/* ===== MARQUEE STRIP ===== */}
        <div className="overflow-hidden whitespace-nowrap py-6 border-y-[4px] border-rust hatch-quack mb-16">
          <div className="inline-block animate-marquee-quack">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className={`font-display text-[0.85rem] uppercase tracking-[0.15em] ${item.color} opacity-40 px-8`}
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>

        {/* ===== ENTRIES ===== */}
        <div className="px-4 md:px-8 pb-16 max-w-[1100px] mx-auto">
          {entries.map((entry, i) => (
            <div key={entry.id}>
              <Entry entry={entry} />
              {i < entries.length - 1 && (
                <div className="my-16">
                  <QuackGlyphs count={3} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ===== EXIT ===== */}
        <QuackGlyphs count={5} />
        <section className="text-center px-8 pt-12 pb-32">
          <Link
            href="/"
            className="font-mono text-[clamp(0.9rem,1.5vw,1.1rem)] text-rust lowercase tracking-wider hover:text-gold transition-colors duration-200 relative group"
          >
            ← back to the work that ships
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-300" />
          </Link>
        </section>

      </div>
    </div>
  );
}
