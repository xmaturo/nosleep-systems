// components/VisualMockup.jsx

export default function VisualMockup() {
  return (
    <section id="visual-mockup" className="w-full bg-[#0F0F0F] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2">Your Automated Command Center</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Behind the scenes: AI agents booking calls, qualifying leads, and executing workflows.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="bg-[#1c1c1c] px-6 py-4 flex items-center justify-between border-b border-white/10">
            <span className="font-bold text-white">NoSleep OS</span>
            <span className="text-xs text-green-400 bg-green-900/40 px-3 py-1 rounded-full">AI Agent Online</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 bg-[#121212]">

            {/* Sidebar */}
            <aside className="col-span-1 border-r border-white/10 py-6 px-4 space-y-4 text-sm text-gray-400">
              <div className="hover:text-white cursor-pointer">Dashboard</div>
              <div className="hover:text-white cursor-pointer">Agents</div>
              <div className="hover:text-white cursor-pointer">Messages</div>
              <div className="hover:text-white cursor-pointer">Logs</div>
              <div className="hover:text-white cursor-pointer">Settings</div>
            </aside>

            {/* Main Panel */}
            <main className="col-span-3 p-6 space-y-6">

              {/* KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#1e1e2f] p-4 rounded-lg shadow-inner">
                  <p className="text-sm text-gray-400">Leads This Week</p>
                  <p className="text-2xl font-bold text-white">87</p>
                </div>
                <div className="bg-[#1e1e2f] p-4 rounded-lg shadow-inner">
                  <p className="text-sm text-gray-400">Calls Booked</p>
                  <p className="text-2xl font-bold text-white">39</p>
                </div>
                <div className="bg-[#1e1e2f] p-4 rounded-lg shadow-inner">
                  <p className="text-sm text-gray-400">AI Response Time</p>
                  <p className="text-2xl font-bold text-white">2m 13s</p>
                </div>
                <div className="bg-[#1e1e2f] p-4 rounded-lg shadow-inner">
                  <p className="text-sm text-gray-400">Agent Uptime</p>
                  <p className="text-2xl font-bold text-white">99.9%</p>
                </div>
              </div>

              {/* Flow Preview */}
              <div className="mt-8">
                <h4 className="text-md font-semibold mb-2 text-gray-300">Automation Flow</h4>
                <div className="flex flex-wrap gap-3 text-sm items-center">
                  <span className="bg-gray-800 px-3 py-1 rounded-full">Lead Captured</span>
                  <span className="text-gray-500">→</span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full">AI Qualifies</span>
                  <span className="text-gray-500">→</span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full">Follow-Up Sent</span>
                  <span className="text-gray-500">→</span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full">Call Booked</span>
                </div>
              </div>

            </main>

            {/* AI Log Feed */}
            <aside className="col-span-1 p-4 border-l border-white/10 text-sm space-y-2 bg-[#181818]">
              <h4 className="text-white font-semibold text-sm mb-2">Live Logs</h4>
              <div className="text-gray-400">[03:02] Agent_12 assigned to new lead</div>
              <div className="text-gray-400">[03:04] Message sent: "Let’s schedule your call"</div>
              <div className="text-gray-400">[03:06] Call booked: Jul 5, 3:00 PM</div>
              <div className="text-gray-400">[03:08] Confirmation SMS sent</div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}