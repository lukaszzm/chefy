import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  // TODO: add better secret via .env
  secret: "kfdngmkfdnbkdfnb",
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
          throw new Error("Invalid credentials. Try again.");
        return { id: "1" };
      },
    }),
  ],
};

export default NextAuth(authOptions);
