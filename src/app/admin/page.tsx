"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ApplicationsDashboard from "@/components/ApplicationsDashboard";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // Simple password protection (in production, use proper authentication)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[radial-gradient(ellipse_200%_100%_at_top_center,#EAEEFE,#F8F9FF_100%)] pt-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-md mx-auto mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1A3EC3] to-[#4F46E5] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mb-4">
                  Admin Access
                </h2>
                <p className="text-gray-600">
                  Enter password to access applications dashboard
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#1A3EC3]/20 focus:border-[#1A3EC3] outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300"
                    placeholder="Enter admin password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] bg-gradient-to-r from-[#1A3EC3] to-[#4F46E5] text-white hover:from-[#4F46E5] hover:to-[#7C3AED]"
                >
                  Access Dashboard
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/>
                  </svg>
                  <p className="text-sm text-blue-800">
                    <strong>Demo Password:</strong> admin123
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_200%_100%_at_top_center,#EAEEFE,#F8F9FF_100%)] pt-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            ← Back to Login
          </button>
        </div>
        
        <ApplicationsDashboard />
      </div>
    </div>
  );
}
