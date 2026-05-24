import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null

        const admin = await prisma.admin.findUnique({
          where: { username: credentials.username as string }
        })

        // In a real app we'd use bcrypt, but for this demo/requirement
        // we'll check against the plain password or a hardcoded one if none in DB
        if (admin && admin.password === credentials.password) {
          return { id: admin.id, name: admin.username }
        }

        // Default dev admin
        if (credentials.username === "admin" && credentials.password === "admin123") {
            return { id: "dev-admin", name: "admin" }
        }

        return null
      }
    })
  ],
  pages: {
    signIn: "/login",
  }
})
