export default function GlyphDivider() {
  return (
    <div className="flex items-center justify-center gap-8 py-8">
      {/* Circle with radiating lines */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="animate-radiate text-ember"
        style={{ animationDelay: '0s' }}
      >
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <line x1="12" y1="0" x2="12" y2="5" stroke="currentColor" strokeWidth="2" />
        <line x1="12" y1="19" x2="12" y2="24" stroke="currentColor" strokeWidth="2" />
        <line x1="0" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="2" />
        <line x1="19" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="2" />
      </svg>

      {/* Rotated diamond */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="animate-radiate text-gold"
        style={{ animationDelay: '0.4s' }}
      >
        <rect
          x="12"
          y="2"
          width="14"
          height="14"
          transform="rotate(45 12 12)"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      {/* Bullseye */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="animate-radiate text-rust"
        style={{ animationDelay: '0.8s' }}
      >
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="currentColor" />
      </svg>
    </div>
  );
}
