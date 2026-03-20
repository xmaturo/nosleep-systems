export function useMDXComponents(components) {
  return {
    h1: ({ children }) => (
      <h1 className="font-display text-[28px] text-gold uppercase mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-[20px] text-ember uppercase mb-3 mt-8">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-[14px] text-cream uppercase mb-2 mt-6">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="font-mono text-[11px] text-cream/60 leading-relaxed mb-4">{children}</p>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-gold hover:text-ember transition-colors underline">
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="font-mono text-[10px] bg-wine/40 text-gold px-1.5 py-0.5">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="bg-wine/30 border-[3px] border-wine p-4 overflow-x-auto mb-4">{children}</pre>
    ),
    ul: ({ children }) => (
      <ul className="font-mono text-[10px] text-cream/50 list-disc list-inside mb-4 space-y-1">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="font-mono text-[10px] text-cream/50 list-decimal list-inside mb-4 space-y-1">{children}</ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-[3px] border-gold pl-4 mb-4 italic">{children}</blockquote>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="font-mono text-[10px] text-cream/70 border-[3px] border-wine w-full">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => <thead>{children}</thead>,
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => <tr className="border-b border-wine/50">{children}</tr>,
    th: ({ children }) => (
      <th className="border border-wine px-3 py-1.5 text-gold text-left font-display">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-wine px-3 py-1.5">{children}</td>
    ),
    ...components,
  };
}
