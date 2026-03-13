import { notFound } from 'next/navigation';
import Link from 'next/link';

const registry = {
  'vimana':    () => import('@/content/quackery/vimana.mdx'),
  'nuevas':    () => import('@/content/quackery/nuevas.mdx'),
  'gvtex':     () => import('@/content/quackery/gvtex.mdx'),
  'harvester': () => import('@/content/quackery/harvester.mdx'),
};

const tagColors = {
  ember:   'border-ember text-ember',
  magenta: 'border-magenta text-magenta',
  rust:    'border-rust text-rust',
};

/* Blob data — same as quackery index */
const blobs = [
  { color: 'bg-gold',    size: 'w-[600px] h-[600px]', pos: '-top-[10%] -left-[5%]',   anim: 'animate-drift-fast' },
  { color: 'bg-magenta', size: 'w-[500px] h-[500px]', pos: 'top-[20%] -right-[10%]',  anim: 'animate-drift-fast-2' },
  { color: 'bg-ember',   size: 'w-[450px] h-[450px]', pos: 'bottom-[30%] left-[10%]', anim: 'animate-drift-fast-3' },
  { color: 'bg-violet',  size: 'w-[550px] h-[550px]', pos: '-bottom-[5%] right-[15%]', anim: 'animate-drift-fast-4' },
];

export function generateStaticParams() {
  return Object.keys(registry).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const loader = registry[params.slug];
  if (!loader) return {};
  const mod = await loader();
  return {
    title: `${mod.metadata.title} — Quackery — No Sleep Systems`,
    description: mod.metadata.description,
  };
}

export default async function QuackeryDetailPage({ params }) {
  const loader = registry[params.slug];
  if (!loader) notFound();

  const { default: Content, metadata } = await loader();
  const tagStyle = tagColors[metadata.tagColor] || tagColors.ember;

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
      <main className="relative z-10 pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">

          {/* Type tag */}
          <span className={`inline-block font-display text-xs tracking-widest uppercase px-3 py-1 border-[4px] ${tagStyle} mb-6`}>
            {metadata.type}
          </span>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-6xl text-gold uppercase leading-tight mb-4">
            {metadata.title}
          </h1>

          {/* Description */}
          <p className="font-mono text-cream/80 text-sm md:text-base leading-relaxed mb-6">
            {metadata.description}
          </p>

          {/* Hook line */}
          <p className="font-mono text-ember text-sm mb-8">
            → {metadata.hook}
          </p>

          {/* Divider */}
          <div className="border-t-[4px] border-wine mb-10" />

          {/* MDX body content */}
          <article className="prose-none">
            <Content />
          </article>

          {/* Back links */}
          <div className="border-t-[4px] border-wine mt-16 pt-8 flex justify-between items-center">
            <Link
              href="/quackery"
              className="font-display text-sm text-ember hover:text-gold uppercase tracking-wide transition-colors duration-200"
            >
              ← Back to Quackery
            </Link>
            <Link
              href="/"
              className="font-mono text-xs text-rust hover:text-gold lowercase tracking-wider transition-colors duration-200"
            >
              back to the work that ships →
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
