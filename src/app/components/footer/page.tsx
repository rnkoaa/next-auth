'use client'

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import SignInButton from "@/app/signin/page"
import { signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation"

const Footer = async () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      // redirect("/")
    }
  })

  if (status === "loading") {
    return "Loading or not authenticated..."
    return <a href="/api/auth/signin">Sign in</a>
  }

  return <p>Signed in as {session.user?.email}</p>


  // return (
  //   <footer className="page-footer">
  //     <button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</button>
  //     <span>made by </span>
  //     {/* <a href="https://georgemartsoukos.com/" target="_blank"> */}
  //     {/*   <img */}
  //     {/*     width="24" */}
  //     {/*     height="24" src="https://assets.codepen.io/162656/george-martsoukos-small-logo.svg" */}
  //     {/*     alt="George Martsoukos logo" /> */}
  //     {/* </a> */}
  //   </footer>
  // )
}

export default Footer;
