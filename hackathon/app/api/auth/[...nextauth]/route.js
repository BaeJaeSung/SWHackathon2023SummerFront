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
      authorize: async (credentials) => {
        const res = await axios.post('http://3.39.72.59:3000/user/login', {
          id: credentials?.id,
          pw: credentials?.password,
        })
        if (res.data) {
          return {}
        }
        return null
      },
    }),
  ],
  secret: 'test',
}

const handler = NextAuth(authOption)
export { handler as GET, handler as POST }
