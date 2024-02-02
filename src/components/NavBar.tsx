"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const { data: session } = useSession();
  const path = usePathname();

  return (
    <header className="flex justify-between items-center px-4 border-b border-black h-12">
      <nav className="flex gap-4">
        <Link href="/">URL Shortener</Link>
        {session && (
          <Link
            className={`${
              path === "/links"
                ? "underline underline-offset-2 decoration-orange-500"
                : ""
            }`}
            href="/links"
          >
            Your Links
          </Link>
        )}
      </nav>
      {session && (
        <button
          className="bg-orange-500 hover:bg-orange-600 rounded px-2 py-1"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      )}
    </header>
  );
}
