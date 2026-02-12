import React from 'react'

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-75"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1950&q=80')",
        }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 via-pink-500/30 to-purple-600/30 mix-blend-multiply"></div>

      {/* Center card */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/40 p-8">
          <div className="text-center mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">UI Demo</span>
          </div>

          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-2">Tailwind + React</h1>
          <p className="text-sm text-gray-500 text-center mb-6">Utility-first CSS framework for modern UI development 🚀</p>

          <ul className="space-y-3 text-sm mb-6">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">✓</span>
              <span className="text-gray-700">Fast development</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-orange-600">⚙️</span>
              <span className="text-gray-700">Responsive design</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-600">⚡</span>
              <span className="text-gray-700">No custom CSS needed</span>
            </li>
          </ul>

          <div className="mb-4">
            <input aria-label="name" placeholder="Enter your name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <div className="flex gap-3 mb-4">
            <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">Login</button>
            <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-50">Register</button>
          </div>

          <p className="text-center text-xs text-gray-400 mb-3">Built using Tailwind CSS</p>

          <div className="flex items-center justify-center gap-4 text-xs">
            <button className="text-blue-600 underline">Upload background</button>
            <button className="text-red-500 underline">Remove</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

