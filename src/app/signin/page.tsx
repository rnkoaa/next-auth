
'use client'

import { useSession, signIn, signOut } from "next-auth/react"

const SignInButton = () => {
  // const { data: session } = useSession()
  return (
    <>
      {/* {session ? ( */}
      {/*   <> */}
      {/*     <div> */}
      {/*       <span>Hello {session.user?.name}</span> */}
      {/*     </div> */}
      {/*     <div> */}
      {/*       <button onClick={() => signOut({ callbackUrl: "/" })}>sign out </button> */}
      {/*     </div> */}
      {/*   </> */}
      {/* ) : ( */}
      <>
        <button onClick={() => signIn('github', { callbackUrl: "http://localhost:3000" })}> Sign In using Github</button>
      </>
      {/* ) */}
      {/* } */}
    </>
  )
}

export default SignInButton
