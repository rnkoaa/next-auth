'use client'

import { redirect } from "next/navigation";
import { LogoutButton } from "../components/LoginButton/page";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin")
    }
  })

  if (status === "authenticated") {
    console.log("user is authenticated")
  }

  return (
    <>
      <div>
        <h1>Welcome to My Awesome Dashboard</h1>
        <h5>{session?.user?.name}</h5>
        <h5>{session?.user?.email}</h5>
        <h5>{session?.user?.image}</h5>
        <LogoutButton />
      </div>

    </>
  )
}
