import { useState } from "react";
import Head from "next/head";

export default function Install() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    goal: "",
    revenue: "",
    ready: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://hooks.zapier.com/hooks/catch/23501833/ub5wicj/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Install Your System | NoSleep Systems</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white px-4 py-12 flex items-center justify-center">
        <div className="max-w-xl w-full space-y-8">
          {submitted ? (
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-accent">You're Locked In ✅</h2>
              <p className="text-slate-300">
                We’ll review your info and follow up within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-lg shadow-lg space-y-6">
              <h1 className="text-2xl font-bold">Let's Install Your System</h1>
              <p className="text-slate-400 text-sm">
                Answer a few quick questions so we can tailor your build.
              </p>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="text"
                name="businessType"
                placeholder="Type of Business (e.g. agency, coaching, trades)"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="text"
                name="goal"
                placeholder="What's your #1 goal with automation?"
                value={formData.goal}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <select
                name="revenue"
                value={formData.revenue}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Monthly Revenue</option>
                <option value="<5k">Less than $5k</option>
                <option value="5k-20k">$5k–$20k</option>
                <option value="20k+">$20k+</option>
              </select>
              <label className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  name="ready"
                  checked={formData.ready}
                  onChange={handleChange}
                  className="accent-accent"
                />
                <span>I’m ready to grow fast with AI</span>
              </label>

              <button
                type="submit"
                className="w-full py-3 bg-accent text-black font-semibold rounded hover:opacity-90 transition"
              >
                Submit My System Request
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}