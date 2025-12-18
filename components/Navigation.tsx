'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start gap-8 h-16">
          <Link
            href="/"
            className={`inline-flex items-center px-4 py-2 border-b-2 text-sm font-medium transition-colors ${
              isActive("/")
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Deployment Phases
          </Link>
          <Link
            href="/links"
            className={`inline-flex items-center px-4 py-2 border-b-2 text-sm font-medium transition-colors ${
              isActive("/links")
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Links
          </Link>
        </div>
      </div>
    </nav>
  );
}
