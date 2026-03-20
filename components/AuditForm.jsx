'use client';

import { useState } from 'react';

export default function AuditForm() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  function handleSubmit() {
    if (!name.trim() || !company.trim()) {
      setError('Name and company are required.');
      return;
    }
    setError('');

    const subject = encodeURIComponent(`APEX Structural Audit Request — ${company.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nCompany: ${company.trim()}\nRole: ${role.trim()}\n\nWhat prompted you to look:\n${message.trim()}`
    );
    window.location.href = `mailto:omar@nosleepsystems.com?subject=${subject}&body=${body}`;
  }

  const inputClass =
    'block w-full bg-transparent border-b-2 border-brass/30 text-cool-cream font-mono text-sm py-3 px-0 focus:border-brass focus:outline-none placeholder:text-cool-cream/30 transition-colors';

  return (
    <div>
      <div className="space-y-8 text-left">
        <div>
          <label className="text-cool-cream/50 font-mono text-xs uppercase tracking-wider mb-2 block">
            Your name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-cool-cream/50 font-mono text-xs uppercase tracking-wider mb-2 block">
            Company
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Acme Corp"
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-cool-cream/50 font-mono text-xs uppercase tracking-wider mb-2 block">
            Your role
          </label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="VP Engineering"
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-cool-cream/50 font-mono text-xs uppercase tracking-wider mb-2 block">
            What prompted you to look?
          </label>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="We've been growing fast but something feels off structurally..."
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="mt-10 w-full py-4 border-[3px] border-brass text-brass font-display text-sm tracking-wider uppercase hover:bg-brass hover:text-slate-void transition-colors"
      >
        Request Audit
      </button>
      {error && (
        <p className="text-ember text-xs font-mono mt-3">{error}</p>
      )}
      <p className="mt-8 text-center text-cool-cream/40 font-mono text-xs">
        Or email directly:{' '}
        <a
          href="mailto:omar@nosleepsystems.com"
          className="hover:text-brass transition-colors"
        >
          omar@nosleepsystems.com
        </a>
      </p>
    </div>
  );
}
