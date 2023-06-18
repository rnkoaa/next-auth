'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

const ClientProtectedPage = () => {
  const { data: session } = useSession({
    required: true,
    // onUnauthenticated() {
    //   redirect("/signin?callback=/protected/client")

    // }
  })
  return (<>
    <div className="container">
      <span>This is a protected client page</span>
      <span>you are logged in as {session?.user?.name}</span>
    </div>
  </>)
}

export default ClientProtectedPage
