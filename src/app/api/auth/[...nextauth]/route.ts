import NextAuth from "next-auth/next"

import GithubProviders from 'next-auth/providers/github'


export const authOptions = {
  providers: [
    GithubProviders({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    })
  ],
}

// pages: {
//   signIn: '/signin'
// }

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
