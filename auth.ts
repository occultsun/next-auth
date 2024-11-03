import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Prisma } from "@prisma/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(Prisma),
  providers: [],
});
