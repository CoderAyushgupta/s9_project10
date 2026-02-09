function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
        
        {/* Badge */}
        <span className="inline-block bg-green-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          UI Demo
        </span>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Tailwind + React
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6">
          Utility-first CSS framework for modern UI development 🚀
        </p>

        {/* Feature List */}
        <ul className="text-left text-sm text-gray-700 space-y-2 mb-6">
          <li className="flex items-center gap-2">
            ✅ Fast development
          </li>
          <li className="flex items-center gap-2">
            🎨 Responsive design
          </li>
          <li className="flex items-center gap-2">
            ⚡️ No custom CSS needed
          </li>
        </ul>

        {/* Input */}
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>

          <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition">
            Register
          </button>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-6">
          Built using Tailwind CSS 💙
        </p>
      </div>

    </div>
  )
}
export default App;
