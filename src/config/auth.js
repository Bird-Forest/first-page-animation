import NextAuth from "next-auth";
// import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
// import { loginAdmin } from "../app/services/users";
import bcrypt from "bcrypt";
import { User } from "../app/models/user";
// import { getUser } from "../app/services/users";

export const { handlers, signIn, signOut, auth } = NextAuth({
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
        console.log("Credentials", credentials);
        if (!credentials.name || !credentials.password) return null;

        const userName = credentials.name;
        console.log("Username", userName);

        let user = null;

        user = await User.findOne({ name: credentials.name }).exec();
        console.log("AUTH-1", user);

        // const saltRounds = 10;
        // const salt = bcrypt.genSaltSync(saltRounds);
        // const hash = bcrypt.hashSync(credentials.password, salt);

        // if (user.role === "admin" && user.pwd === hash) {
        //   // const { password, ...userWithoutPass } = user;
        //   console.log("AUTH-2", user);
        //   // return user;
        //   return JSON.parse(JSON.stringify(user));
        // }
        // return null;
        return JSON.parse(JSON.stringify(user));
      },
    }),
  ],

  // pages: {
  //   signIn: "/auth",
  // },
});
