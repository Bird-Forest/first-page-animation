import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { loginAdmin } from "../app/services/users";
// import bcrypt from "bcrypt";
// import { getUser } from "../app/services/users";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      credentials: {
        name: { label: "name", type: "name", required: true },
        password: { label: "password", type: "password", required: true },
      },
      authorize: async (credentials) => {
        try {
          let user = null;

          // const { email, password } = await signInSchema.parseAsync(
          //   credentials
          // );

          // logic to salt and hash password
          // const pwHash = saltAndHashPassword(password);

          // logic to verify if user exists
          user = await loginAdmin({ email, password });

          if (!user) {
            throw new Error("User not found.");
          }

          // return json object with the user data
          return user;
        } catch (error) {
          return null;
          // if (error) {
          //   // Return `null` to indicate that the credentials are invalid
          //     return null;
          // }
        }
        // let user = null;

        // logic to salt and hash password
        // const saltRounds = 10;
        // const salt = bcrypt.genSaltSync(saltRounds);
        // const hash = bcrypt.hashSync(credentials.password, salt);
        // const pwHash = saltAndHashPassword(credentials.password);

        // logic to verify if user exists
        // user = await getUser(credentials.name);

        // if (!user) {
        // No user found, so this is their first attempt to login
        // meaning this is also the place you could do registration
        //   throw new Error("User not found.");
        // }

        // return user object with the their profile data
        // console.log("AUTH", user);
        // return user;
      },
    }),
  ],

  // pages: {
  //   signIn: "/auth",
  // },
});
