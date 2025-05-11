"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const tabs = ["Intro", "About", "Experiences", "Projects", "Courses", "Contact"];

  // 👇 Force light mode
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Portfolio Admin Panel
        </h1>

        <nav className="flex flex-wrap justify-center gap-3 mb-8 border-b pb-4 border-gray-300">
          {tabs.map((tab) => {
            const slug = tab.toLowerCase();
            const isActive = pathname.includes(`/admin/${slug}`);
            return (
              <Link
                key={tab}
                href={`/admin/${slug}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-blue-600 hover:bg-blue-100"
                }`}
              >
                {tab}
              </Link>
            );
          })}
        </nav>

        <main>{children}</main>
      </div>
    </div>
  );
}
