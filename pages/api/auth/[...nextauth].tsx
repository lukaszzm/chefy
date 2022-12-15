import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (email !== "test@test.com" && password !== "testtest")
          throw new Error("invalid credentials.");
        return { id: "1" };
      },
    }),
  ],
  // TODO: real secret from .env
  secret: process.env.SECRET,
};

export default NextAuth(authOptions);
