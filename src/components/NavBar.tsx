"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <header className="flex justify-between items-center px-4 border-b border-black h-12">
      <nav className="flex gap-4">
        <Link href="/">URL Shortener</Link>
        {session && <Link href="/links">Your Links</Link>}
      </nav>
      {session && <button onClick={() => signOut()}>Sign Out</button>}
    </header>
  );
}
