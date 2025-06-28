// pages/install.js
import { useState } from "react";

export default function InstallPage() {
  const [companySize, setCompanySize] = useState(1);
  const [revenue, setRevenue] = useState(1);
  const [budget, setBudget] = useState(1);

  const companySizeLabels = ["1–5 employees", "6–20 employees", "21–50 employees", "50+ employees"];
  const revenueLabels = ["Less than $100k", "$100k – $500k", "$500k – $1M", "Over $1M"];
  const budgetLabels = ["Less than $1,000", "$1,000 – $3,000", "$3,000 – $10,000", "$10,000+"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-neutral-900 text-white flex items-center justify-center px-4 py-20">
      <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-12 rounded-3xl shadow-[0_0_100px_rgba(255,255,255,0.05)] w-full max-w-3xl animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
          System Install Application
        </h1>
        <p className="text-neutral-300 text-lg mb-10 max-w-2xl">
          This isn’t a contact form. It’s your gateway to a backend that scales while you sleep. Fill out the form below to get qualified.
        </p>

        <form
          action="https://hooks.zapier.com/hooks/catch/23501833/ub5wicj/"
          method="POST"
          className="space-y-10"
        >
          <div className="relative">
            <input name="name" required className="peer w-full bg-neutral-800 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/40 transition placeholder-transparent" placeholder="Full Name" />
            <label className="absolute left-4 top-2 text-sm text-neutral-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-neutral-400">
              Full Name
            </label>
          </div>

          <div className="relative">
            <input type="email" name="email" required className="peer w-full bg-neutral-800 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/40 transition placeholder-transparent" placeholder="Email Address" />
            <label className="absolute left-4 top-2 text-sm text-neutral-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-neutral-400">
              Email Address
            </label>
          </div>

          <div className="relative">
            <input type="url" name="website" required className="peer w-full bg-neutral-800 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/40 transition placeholder-transparent" placeholder="Business Website" />
            <label className="absolute left-4 top-2 text-sm text-neutral-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-neutral-400">
              Business Website
            </label>
          </div>

          {/* Company Size Slider */}
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Company Size</label>
            <input type="range" name="companySize" min="1" max="4" value={companySize} onChange={(e) => setCompanySize(Number(e.target.value))} className="w-full accent-white" />
            <p className="text-sm text-neutral-200 mt-2 font-medium">{companySizeLabels[companySize - 1]}</p>
            <input type="hidden" name="companySizeText" value={companySizeLabels[companySize - 1]} />
          </div>

          {/* Revenue Slider */}
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Annual Revenue</label>
            <input type="range" name="revenue" min="1" max="4" value={revenue} onChange={(e) => setRevenue(Number(e.target.value))} className="w-full accent-white" />
            <p className="text-sm text-neutral-200 mt-2 font-medium">{revenueLabels[revenue - 1]}</p>
            <input type="hidden" name="revenueText" value={revenueLabels[revenue - 1]} />
          </div>

          {/* Budget Slider */}
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Budget Range</label>
            <input type="range" name="budget" min="1" max="4" value={budget} onChange={(e) => setBudget(Number(e.target.value))} className="w-full accent-white" />
            <p className="text-sm text-neutral-200 mt-2 font-medium">{budgetLabels[budget - 1]}</p>
            <input type="hidden" name="budgetText" value={budgetLabels[budget - 1]} />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:brightness-110 hover:scale-[1.02] transition-all duration-300 shadow-xl"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}