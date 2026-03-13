import { notFound } from 'next/navigation'

const registry = {
  'canon-law': () => import('@/content/notes/canon-law.mdx'),
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

export default async function NotePage({ params }) {
  const loader = registry[params.slug]
  if (!loader) notFound()

  const { default: Content, metadata } = await loader()

  return (
    <main className="min-h-screen bg-void pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">

        {/* Date + tag */}
        <div className="flex items-center gap-4 mb-6">
          {metadata.date && (
            <span className="font-mono text-xs text-cream/50">{metadata.date}</span>
          )}
          {metadata.tag && (
            <span className="inline-block font-display text-xs tracking-widest uppercase px-3 py-1 border-[3px] border-rust text-rust">
              {metadata.tag}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl md:text-4xl text-gold uppercase leading-tight mb-6">
          {metadata.title}
        </h1>

        {/* Subtitle */}
        {metadata.subtitle && (
          <p className="font-mono text-cream/70 text-sm mb-8">{metadata.subtitle}</p>
        )}

        {/* Divider */}
        <div className="border-t-[3px] border-wine mb-10" />

        {/* MDX body */}
        <article className="prose-none">
          <Content />
        </article>

        {/* Back link */}
        <div className="border-t-[3px] border-wine mt-16 pt-8">
          <a href="/notes" className="font-display text-sm text-ember hover:text-gold uppercase tracking-wide transition-colors duration-200">
            ← All Notes
          </a>
        </div>
      </div>
    </main>
  )
}
