"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (
      email === process.env.NEXT_PUBLIC_ADMIN_EMAIL &&
      password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      localStorage.setItem("adminLoggedIn", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg p-8 rounded-xl w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>

        <input
          type="email"
          name="email"
          className="input"
          placeholder="Admin Email"
          required
        />

        <input
          type="password"
          name="password"
          className="input mt-4"
          placeholder="Password"
          required
        />

        {error && <p className="text-red-600 mt-2">{error}</p>}

        <button
          type="submit"
          className="bg-blue-700 text-white w-full mt-6 p-3 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}
