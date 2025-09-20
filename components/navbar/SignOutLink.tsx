"use client";

import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { toast } from "sonner";

const SignOutLink = () => {
  const handleLogout = () => {
    toast("", {
      description: "Logout Successful",
    });
  };

  return (
    <SignInButton>
      <Link href={"/"} className="w-full text-left" onClick={handleLogout}>
        Logout
      </Link>
    </SignInButton>
  );
};

export default SignOutLink;
