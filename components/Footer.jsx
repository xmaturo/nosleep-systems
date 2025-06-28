export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Left: Logo + Tagline */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">NoSleep<span className="text-accent">Systems</span></h2>
          <p className="text-sm text-gray-500 mt-1">
            AI-powered automation stacks. Built for growth. Running 24/7.
          </p>
        </div>

        {/* Right: Links */}
        <div className="flex space-x-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="mailto:team@nosleepsystems.com" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}