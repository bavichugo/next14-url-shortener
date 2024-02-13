"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";

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
        <Button color="orange" onClick={signOut}>
          Sign Out
        </Button>
      )}
    </header>
  );
}
