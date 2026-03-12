import Link from 'next/link';

export default function ProjectCard({ project, index }) {
  const isSystem = project.tag === 'SYSTEM';
  const tagBorder = isSystem ? 'border-ember' : 'border-gold';
  const cornerClass = index % 2 === 0 ? 'corner-mark-gold' : 'corner-mark-ember';

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`relative corner-mark ${cornerClass} block bg-wine p-5 border-[3px] border-transparent hover:border-ember hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-150`}
    >
      <span className={`inline-block font-display text-[8px] uppercase tracking-[1px] px-2 py-0.5 border-[2px] ${tagBorder} text-cream mb-3`}>
        {project.tag}
      </span>

      <h3 className="font-display text-[15px] uppercase text-cream mb-2">
        {project.name}
      </h3>

      <p className="font-mono text-[10px] text-cream/45 leading-relaxed mb-3">
        {project.description}
      </p>

      <p className="font-mono text-[9px] text-ember font-bold uppercase mb-2">
        → {project.impact}
      </p>

      <p className="font-mono text-[8px] text-cream/25">
        {project.stack}
      </p>
    </Link>
  );
}
