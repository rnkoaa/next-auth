
'use client'

import { useSession, signIn, signOut } from "next-auth/react"

const SignInButton = () => {
  const { data: session } = useSession()
  return (
    <>
      {session ? (
        <>
          <span>Hello {session.user?.name}</span>
          <button onClick={() => signOut()}>sign out </button>
        </>
      ) : (
        <>
          <button onClick={() => signIn()}> Sign In</button>
        </>
      )
      }
    </>
  )
}
