'use client'

import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

const ClientProtectedPage = () => {
  const { data: session, status } = useSession({
    required: true,
    // onUnauthenticated() {
    //   redirect("/signin?callback=/protected/client")

    // }
  })

  if (status == "authenticated") {
    return (
      <>
        <div className="container">
          <span>This is a protected client page</span>
          <span>you are logged in as {session?.user?.name}</span>
        </div>
      </>
    )
  }
  return (
    <div className="container">
      {/* <button onClick={() => signIn('github', { callbackUrl = '/protected/client' })}>Sign in using Github</button> */}
      <button onClick={() => signIn('github', { callbackUrl: '/' })}>Sign in using Github</button>
    </div>
  )
}

export default ClientProtectedPage
