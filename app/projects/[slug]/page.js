import { notFound } from 'next/navigation'
import Link from 'next/link'

// Registry: maps slug to dynamic import
// Each MDX file exports: metadata = { title, type, description, impact, stack, status }
const registry = {
  'contractor-os':   () => import('@/content/projects/contractor-os.mdx'),
  'lacra':           () => import('@/content/projects/lacra.mdx'),
  'ferrum':          () => import('@/content/projects/ferrum.mdx'),
  'glue-program':    () => import('@/content/projects/glue-program.mdx'),
  'molecula':        () => import('@/content/projects/molecula.mdx'),
  'cbf-diagnostics': () => import('@/content/projects/cbf-diagnostics.mdx'),
}

export function generateStaticParams() {
  return Object.keys(registry).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const loader = registry[params.slug]
  if (!loader) return {}
  const mod = await loader()
  return {
    title: `${mod.metadata.title} — No Sleep Systems`,
    description: mod.metadata.description,
  }
}

export default async function ProjectPage({ params }) {
  const loader = registry[params.slug]
  if (!loader) notFound()

  const { default: Content, metadata } = await loader()

  return (
    <main className="min-h-screen bg-void pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">

        {/* Type tag */}
        <span className="inline-block font-display text-xs tracking-widest uppercase px-3 py-1 border-[3px] border-rust text-rust mb-6">
          {metadata.type}
        </span>

        {/* Title */}
        <h1 className="font-display text-4xl md:text-5xl text-gold uppercase leading-tight mb-4">
          {metadata.title}
        </h1>

        {/* Description */}
        <p className="font-mono text-cream/80 text-sm md:text-base leading-relaxed mb-6">
          {metadata.description}
        </p>

        {/* Impact line */}
        <p className="font-mono text-ember text-sm mb-6">
          → {metadata.impact}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {metadata.stack.map((tech) => (
            <span key={tech} className="font-mono text-xs text-cream/60 border border-wine px-2 py-0.5">
              {tech}
            </span>
          ))}
        </div>

        {/* Status badge if present */}
        {metadata.status && (
          <div className="font-mono text-xs text-gold/70 border border-gold/30 px-3 py-1 inline-block mb-10">
            {metadata.status}
          </div>
        )}

        {/* Divider */}
        <div className="border-t-[3px] border-wine mb-10" />

        {/* MDX body content */}
        <article className="prose-none">
          <Content />
        </article>

        {/* Back link */}
        <div className="border-t-[3px] border-wine mt-16 pt-8">
          <Link href="/projects" className="font-display text-sm text-ember hover:text-gold uppercase tracking-wide transition-colors duration-200">
            ← All Projects
          </Link>
        </div>
      </div>
    </main>
  )
}
