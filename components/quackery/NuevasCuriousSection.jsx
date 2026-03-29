'use client';

import { useMemo, useState } from 'react';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export default function NuevasCuriousSection() {
  const [r, setR] = useState(0.5);

  const response = useMemo(() => Math.tanh(2 * r), [r]);
  const responsePct = ((response + 1) / 2) * 100;
  const rPct = (clamp(r, 0, 4) / 4) * 100;

  const regime = useMemo(() => {
    if (r < 0.8) return 'Classical / rate-dominant';
    if (r <= 1.6) return 'Crossover / high sensitivity';
    return 'Quantum / map-dominant';
  }, [r]);

  return (
    <section
      aria-labelledby="glue-explorer-title"
      className="mt-14 border-[4px] border-wine hatch-quack bg-wine/15 p-5 md:p-7 corner-mark-quack"
      style={{
        '--corner-color-top': 'rgba(243, 116, 43, 0.24)',
        '--corner-color-bottom': 'rgba(232, 62, 140, 0.16)',
      }}
    >
      <h2 id="glue-explorer-title" className="font-display text-[1.15rem] md:text-[1.4rem] text-gold uppercase tracking-[0.08em]">
        Glue Explorer
      </h2>
      <p className="font-mono text-[11px] text-cream/65 leading-relaxed mt-2.5 max-w-2xl">
        A small instrument for reading the curve beneath this essay: tanh(2R), with R = M / H.
      </p>

      <div className="mt-6 grid gap-5">
        <div>
          <label htmlFor="glue-r-slider" className="font-display text-[0.68rem] uppercase tracking-[0.14em] text-ember block mb-1.5">
            Ratio R = M / H
          </label>
          <div className="font-mono text-[11px] text-gold mb-2.5">R = {r.toFixed(2)}</div>
          <input
            id="glue-r-slider"
            name="glue-r-slider"
            type="range"
            min="0"
            max="4"
            step="0.01"
            value={r}
            onChange={(e) => setR(Number(e.target.value))}
            className="w-full accent-ember cursor-ew-resize"
          />
          <div className="mt-2 flex justify-between font-mono text-[10px] text-cream/50">
            <span>0.0</span>
            <span>2.0</span>
            <span>4.0</span>
          </div>
        </div>

        <div className="border-[3px] border-wine p-3.5 bg-void/20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-2">
            <span className="font-display text-[0.68rem] uppercase tracking-[0.14em] text-cream/70">Response</span>
            <span className="font-mono text-[11px] text-gold">tanh(2R) = {response.toFixed(4)}</span>
          </div>

          <div className="h-2.5 relative border border-wine bg-void/60">
            <div className="absolute inset-y-0 left-0 bg-ember/70" style={{ width: `${responsePct}%` }} />
            <div className="absolute inset-y-0 w-[2px] bg-gold/90" style={{ left: `${responsePct}%` }} />
          </div>
          <div className="mt-2 flex justify-between font-mono text-[10px] text-cream/50">
            <span>-1.0</span>
            <span>0.0</span>
            <span>+1.0</span>
          </div>
        </div>

        <div className="border-[3px] border-wine p-3.5 bg-void/20">
          <div className="font-display text-[0.68rem] uppercase tracking-[0.14em] text-cream/70 mb-2.5">
            Regime map
          </div>
          <div className="relative h-7 border border-wine overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-[35%] bg-gold/15" />
            <div className="absolute inset-y-0 left-[35%] w-[25%] bg-magenta/18" />
            <div className="absolute inset-y-0 right-0 w-[40%] bg-ember/15" />
            <div className="absolute inset-y-0 w-[2px] bg-cream" style={{ left: `${rPct}%` }} aria-hidden="true" />
          </div>
          <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.08em] text-cream/65">
            <span>Classical / rate-dominant</span>
            <span className="sm:text-center">Crossover / high sensitivity</span>
            <span className="sm:text-right">Quantum / map-dominant</span>
          </div>
          <p className="mt-2.5 font-display text-[0.72rem] uppercase tracking-[0.12em] text-ember">Current regime: {regime}</p>
        </div>
      </div>

      <p className="mt-5 font-mono text-[10px] text-cream/50 leading-relaxed">
        Note: this panel is a reading aid for the proposed framework, not experimental validation.
      </p>
    </section>
  );
}
