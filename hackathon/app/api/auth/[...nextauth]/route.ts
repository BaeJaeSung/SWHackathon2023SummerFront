import { Awaitable, User } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

export const authOption = {
  providers: [
    Credentials({ id: "custom", name: "custom", credentials: { id: { label: "Id", type: "id" }, password: { label: "Password", type: "password" } }, authorize: async (credentials) => { return { name: "hello" } as Awaitable<User | null> } })
  ],
  secret: "test"
}

const handler = NextAuth(authOption)
export { handler as GET, handler as POST }