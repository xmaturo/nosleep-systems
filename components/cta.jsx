export default function CTA() {
  return (
    <section
      id="cta"
      className="w-full bg-gradient-to-b from-[#0A0A0A] to-[#0F0F0F] text-white py-24 px-6 border-t border-white/10"
    >
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Install Your 24/7 Growth System?
        </h2>
        <p className="text-sm text-gray-400 max-w-xl mx-auto">
          NoSleep Systems are pre-built, battle-tested, and deploy in minutes — without code or complexity.
        </p>

        <div className="mt-6">
          <button className="bg-accent text-black font-semibold py-3 px-6 rounded-full text-sm transition hover:scale-105 hover:shadow-lg hover:bg-accent/90 focus:outline-none">
            Install My System →
          </button>
          <p className="text-xs text-gray-500 mt-3">Launches in under 3 minutes. No fluff. Just fire.</p>
        </div>
      </div>
    </section>
  );
}