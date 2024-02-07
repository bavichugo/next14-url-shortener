"use client";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import WhiteCard from "@/components/WhiteCard";

export default function SignIn() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirect to home if already signed in
    if (session) {
      router.push("/");
    }
  }, [session]);

  return (
    <div className="flex w-full h-full justify-center items-center px-4">
      <WhiteCard className="max-w-md">
        <span className="text-xl">Sign In</span>
        <span className="text-black/50 mb-4">
          Please sign in to your account
        </span>
        <button
          className="flex gap-2 border border-gray-400 py-3 hover:bg-black/15 rounded-xl items-center justify-center"
          onClick={() => signIn("google")}
        >
          <FcGoogle className="text-2xl" /> <span>Sign in with Google</span>
        </button>
      </WhiteCard>
    </div>
  );
}
