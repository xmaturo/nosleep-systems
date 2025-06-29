// pages/install.js
import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function InstallPage() {
  const [companySize, setCompanySize] = useState(1);
  const [revenue, setRevenue] = useState(1);
  const [budget, setBudget] = useState(1);

  const companySizeLabels = ["1–5 employees", "6–20 employees", "21–50 employees", "50+ employees"];
  const revenueLabels = ["Less than $100k", "$100k – $500k", "$500k – $1M", "Over $1M"];
  const budgetLabels = ["Less than $1,000", "$1,000 – $3,000", "$3,000 – $10,000", "$10,000+"];

  return (
    <>
      <Head>
        <title>Install | NoSleep Systems</title>
      </Head>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-black to-neutral-900 text-white flex items-center justify-center px-6 py-32">
        <div className="w-full max-w-3xl bg-white/5 backdrop-blur-xl p-10 md:p-12 border border-white/10 rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.3)] animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            System Install Application
          </h1>
          <p className="text-neutral-400 mb-10 text-sm md:text-base max-w-xl">
            This isn’t a contact form — it’s your gateway to a backend that works while you sleep.
            Fill this out to qualify.
          </p>

          <form
            action="https://hooks.zapier.com/hooks/catch/23501833/ub5wicj/"
            method="POST"
            className="space-y-8"
          >
            {[{
              name: "name",
              type: "text",
              label: "Full Name",
              placeholder: "Full Name"
            }, {
              name: "email",
              type: "email",
              label: "Email Address",
              placeholder: "Email Address"
            }, {
              name: "website",
              type: "url",
              label: "Business Website",
              placeholder: "Business Website"
            }].map(({ name, type, label, placeholder }) => (
              <div className="relative" key={name}>
                <input
                  type={type}
                  name={name}
                  required
                  className="peer w-full bg-neutral-800 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition placeholder-transparent"
                  placeholder={placeholder}
                />
                <label className="absolute left-4 top-2 text-sm text-neutral-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-neutral-400">
                  {label}
                </label>
              </div>
            ))}

            {[{
              label: "Company Size",
              value: companySize,
              setValue: setCompanySize,
              options: companySizeLabels,
              name: "companySize"
            }, {
              label: "Annual Revenue",
              value: revenue,
              setValue: setRevenue,
              options: revenueLabels,
              name: "revenue"
            }, {
              label: "Budget Range",
              value: budget,
              setValue: setBudget,
              options: budgetLabels,
              name: "budget"
            }].map(({ label, value, setValue, options, name }) => (
              <div key={label}>
                <label className="block text-sm font-medium text-neutral-400 mb-2">{label}</label>
                <input
                  type="range"
                  min="1"
                  max="4"
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  className="w-full accent-accent"
                />
                <p className="text-sm text-neutral-300 mt-2 font-medium">{options[value - 1]}</p>
                <input type="hidden" name={`${name}Text`} value={options[value - 1]} />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-accent text-black font-bold py-4 rounded-xl hover:brightness-110 hover:scale-[1.02] transition-all duration-300 shadow-xl"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </>
  );
}