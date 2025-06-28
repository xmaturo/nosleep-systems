export default function Results() {
  return (
    <section className="w-full bg-[#0A0A0A] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">

        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">
            Already Powering 49+ Businesses — From Solo Founders to Growing Teams
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Whether you’re a one-man army or scaling a team — NoSleep Systems installs done-for-you automation stacks that work around the clock to drive growth.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl py-8 px-6">
            <p className="text-4xl font-bold text-accent">49+</p>
            <p className="text-sm text-gray-400 mt-2">Systems Deployed</p>
          </div>
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl py-8 px-6">
            <p className="text-4xl font-bold text-accent">3,200+</p>
            <p className="text-sm text-gray-400 mt-2">Hours Saved This Year</p>
          </div>
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl py-8 px-6">
            <p className="text-4xl font-bold text-accent">7+</p>
            <p className="text-sm text-gray-400 mt-2">Industries Served</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left">
          <div className="bg-[#181818] border border-white/10 p-6 rounded-xl">
            <p className="text-sm text-gray-300 italic">
              “I run a local service biz and had zero systems. Now follow-ups are automated, and I finally sleep.”
            </p>
            <p className="mt-4 text-sm text-white font-semibold">— Carlos T., Home Services Owner</p>
          </div>
          <div className="bg-[#181818] border border-white/10 p-6 rounded-xl">
            <p className="text-sm text-gray-300 italic">
              “Built my entire backend in a week. Email flows, booking, follow-up — it just works.”
            </p>
            <p className="mt-4 text-sm text-white font-semibold">— Anya D., Startup Founder</p>
          </div>
        </div>

      </div>
    </section>
  );
}