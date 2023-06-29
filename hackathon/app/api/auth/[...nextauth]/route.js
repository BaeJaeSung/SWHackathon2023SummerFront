import axios from 'axios'
import { Awaitable, User } from 'next-auth'
import NextAuth from 'next-auth/next'
import Credentials from 'next-auth/providers/credentials'

export const authOption = {
  providers: [
    Credentials({
      id: 'custom',
      name: 'custom',
      credentials: {
        id: { label: 'Id', type: 'id' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials, req) => {
        const res = await axios.post('http://3.39.72.59:3000/user/login', {
          id: credentials?.id,
          pw: credentials?.password,
        })
        console.log(res.data.success)
        if (res.data.success) {
          return { id: credentials.id }
        }
        return null
      },
    }),
  ],
  secret: 'test',
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      session.user.id = token.id
      return session
    },
  },
}
const handler = NextAuth(authOption)
export { handler as GET, handler as POST }
