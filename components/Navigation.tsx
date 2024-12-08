"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  const session = useSession();

  return (
    <>
      <Link href="/" className={pathname === "/" ? "active" : ""}>
        Home
      </Link>
      {session?.data && (
        <>
          <Link className={pathname === "/blog" ? "active" : ""} href="/blog">
            Blog
          </Link>
          <Link
            className={pathname === "/profile" ? "active" : ""}
            href="/profile"
          >
            Profile
          </Link>
        </>
      )}
      <Link href="/about" className={pathname === "/about" ? "active" : ""}>
        About
      </Link>

      {session?.data ? (
        <Link
          className={pathname === "#" ? "active auth" : ""}
          href="#"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Sign Out
        </Link>
      ) : (
        <Link
          className={pathname === "/signin" ? "active auth" : ""}
          href="/signin"
        >
          Sign In
        </Link>
      )}
    </>
  );
};

export { Navigation };
