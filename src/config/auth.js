import NextAuth from "next-auth";
// import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { User } from "../app/models/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    // Google({
    //   clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.AUTH_GOOGLE_SECRET,
    // }),
    Credentials({
      credentials: {
        name: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials.name || !credentials.password) return null;

        let user = null;

        user = await User.findOne({ name: credentials.name }).exec();

        return JSON.parse(JSON.stringify(user));
      },
    }),
  ],
});
