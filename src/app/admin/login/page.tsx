"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    if (auth && auth.login && auth.login(password)) {
      router.push("/admin/contact"); // redirect to any section
    } else {
      setError("Invalid password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 space-y-4">
        <h2 className="text-xl font-bold text-center">Admin Login</h2>
        <input
          type="password"
          value={password}
          placeholder="Enter Admin Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}
