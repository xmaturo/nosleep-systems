export const metadata = {
  title: 'Notes — No Sleep Systems',
  description: 'Thought archive by Omar Medina. Essays on engineering, research, and systems thinking.',
};

export default function NotesPage() {
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

          <div className="border-[3px] border-wine hatch-neg45 p-12 text-center">
            <p className="font-display text-[14px] text-gold uppercase mb-3">
              COMING SOON
            </p>
            <p className="font-mono text-[10px] text-cream/40">
              Notes will be published here as MDX content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
