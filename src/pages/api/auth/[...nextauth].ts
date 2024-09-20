import NextAuth, { User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getConnection, query } from "../../../app/api/db";

interface User extends NextAuthUser {
  id: string;
  password: string;
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        // credentials가 undefined인지 확인
        if (!credentials || !credentials.password) {
          console.log("No credentials or password provided");
          return null;
        } else {
          console.log("password");
        }

        try {
          const connection = await getConnection();
          console.log("Database connection established");

          const sql = "SELECT * FROM login WHERE password = ?";
          const params = [credentials.password];
          console.log("SQL Query:", sql);
          console.log("Parameters:", params);

          const manage = await query<User>(connection, sql, params);
          console.log("Query result:", manage);

          if (manage.length > 0) {
            const manages = manage[0];
            console.log("User found:", manages);
            return { id: manages.password };
          } else {
            console.log("관리자를 찾을 수 없습니다");
            return null;
          }
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
