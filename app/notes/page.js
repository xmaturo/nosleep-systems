import Link from 'next/link';

export const metadata = {
  title: 'Notes — No Sleep Systems',
  description: 'Thought archive by Omar Medina. Essays on engineering, research, and systems thinking.',
}

const registry = {
  'canon-law': () => import('@/content/notes/canon-law.mdx'),
}

export default async function NotesPage() {
  const entries = await Promise.all(
    Object.entries(registry).map(async ([slug, loader]) => {
      const mod = await loader()
      return { slug, ...mod.metadata }
    })
  )

  return (
    <div className="pt-20">
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-[10px] uppercase tracking-[3px] text-ember mb-3">
            THOUGHT ARCHIVE
          </p>
          <h1 className="font-display text-[36px] md:text-[48px] uppercase text-cream mb-4">
            NOTES
          </h1>
          <p className="font-mono text-[11px] text-cream/50 max-w-xl leading-relaxed mb-12">
            Essays, observations, and technical notes. Tagged and chronological.
          </p>

          <div className="flex flex-col gap-[3px]">
            {entries.map((note, i) => (
              <Link
                key={note.slug}
                href={`/notes/${note.slug}`}
                className={`relative corner-mark ${i % 2 === 0 ? 'corner-mark-gold' : 'corner-mark-ember'} block bg-wine p-6 border-[3px] border-transparent hover:border-ember hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-150 ${i % 2 === 0 ? 'hatch-45' : 'hatch-neg45'}`}
              >
                <div className="flex items-center gap-4 mb-3">
                  {note.date && (
                    <span className="font-mono text-[9px] text-cream/40">{note.date}</span>
                  )}
                  {note.tag && (
                    <span className="inline-block font-display text-[8px] uppercase tracking-[1px] px-2 py-0.5 border-[3px] border-rust text-rust">
                      {note.tag}
                    </span>
                  )}
                </div>

                <h2 className="font-display text-[18px] uppercase text-cream mb-2">
                  {note.title}
                </h2>

                {note.subtitle && (
                  <p className="font-mono text-[10px] text-cream/50 leading-relaxed mb-2">
                    {note.subtitle}
                  </p>
                )}

                <p className="font-mono text-[9px] text-ember uppercase mt-3">
                  Read →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
