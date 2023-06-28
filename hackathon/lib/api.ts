import { getServerSession } from "next-auth"
import { authOption } from "@/app/api/auth/[...nextauth]/route"

export const getSession = async () => {
  return await getServerSession(authOption)
}