/* eslint-disable @next/next/no-img-element */
import { authConfig } from "@/configs/auth";
import { Metadata } from "next";
// import { getServerSession } from "next-auth/next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Profile | Next App",
};

export default async function Profile() {
  const session = await getServerSession(authConfig);
  return (
    <div>
      <p>
        Your profile info: <strong>{session?.user?.name}</strong>
      </p>
      {session?.user?.image && (
        <img src={session.user.image} alt="profile image" />
      )}
    </div>
  );
}
