"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (
      email === process.env.NEXT_PUBLIC_ADMIN_EMAIL &&
      password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      localStorage.setItem("adminLoggedIn", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid email or password");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#FFFFFF] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        
        {/* LOGO SECTION */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#0A2342] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-[#0A2342]">Admin Portal</h1>
          <p className="text-[#1E3A5F] mt-2">Career Point Shimla</p>
        </div>

        {/* LOGIN FORM */}
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-2xl shadow-xl border border-[#F5F5F5] p-8"
        >
          <h2 className="text-2xl font-bold text-[#0A2342] text-center mb-8">
            Sign In
          </h2>

          {/* EMAIL FIELD */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-[#1E3A5F] mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-[#F5F5F5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A2342] focus:border-transparent transition-all bg-white text-[#1E3A5F] placeholder-[#1E3A5F]/50"
              placeholder="admin@careerpointshimla.com"
              required
            />
          </div>

          {/* PASSWORD FIELD */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-[#1E3A5F] mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 border border-[#F5F5F5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A2342] focus:border-transparent transition-all bg-white text-[#1E3A5F] placeholder-[#1E3A5F]/50"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* ERROR MESSAGE */}
          {error && (
            <div className="mb-6 p-3 bg-[#D62828]/10 border border-[#D62828]/20 rounded-xl">
              <p className="text-[#D62828] text-sm font-medium text-center">
                {error}
              </p>
            </div>
          )}

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[#0A2342] to-[#1E3A5F] text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing In...
              </div>
            ) : (
              "Sign In"
            )}
          </button>

          {/* SECURITY NOTE */}
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center text-[#1E3A5F]/60">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-xs">Secure admin access only</span>
            </div>
          </div>
        </form>

        {/* FOOTER */}
        <div className="text-center mt-8">
          <p className="text-[#1E3A5F]/60 text-sm">
            Career Point Shimla &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}