import Link from 'next/link';

export default function NotePage({ params }) {
  return (
    <div className="pt-20">
      <div className="px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/notes" className="font-mono text-[10px] text-cream/40 hover:text-gold transition-colors uppercase tracking-[2px] mb-8 inline-block">
            ← All notes
          </Link>

          <div className="border-[3px] border-wine hatch-03 p-12 text-center">
            <p className="font-display text-[14px] text-gold uppercase mb-3">
              NOTE NOT FOUND
            </p>
            <p className="font-mono text-[10px] text-cream/40">
              This note hasn&apos;t been published yet. MDX content for <code className="text-gold">{params.slug}</code> will appear here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
