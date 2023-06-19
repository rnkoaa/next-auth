import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { redirect } from 'next/navigation'

const ServerProtectedPage = async () => {
  const session = await getServerSession(authOptions)
  console.log(session)
  if (!session) {
    redirect("/signin")
    // redirect("/signin?callbackUrl=/protected/server")
  }
  return (<>
    <div className="container">
      <span>This is a protected server page</span>
      <span>you are logged in as {session?.user?.name}</span>
    </div>
  </>)
}

export default ServerProtectedPage;
