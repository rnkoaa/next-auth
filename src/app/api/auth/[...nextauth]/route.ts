import GithubProviders from 'next-auth/providers/github'
import NextAuth from "next-auth/next"

export const authOptions = {
  providers: [
    GithubProviders({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    })
  ],
  pages: {
    signIn: '/signin',
    signOut: '/'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
