import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      credentials: {
        email: {
          label: "email",
          type: "email",
          required: true,
        },
        password: {
          label: "password",
          type: "password",
          required: true,
        },
      },
      async authorize(credentials) {
        // проверить авторизованны мы или нет
        // либо запрос на другой бек либо запрос в базу
        if (!credentials?.email || !credentials.password) return null;

        if (
          credentials.email === "test@test.ru" &&
          credentials.password === "123"
        )
          return {
            email: credentials.email,
            img: "/person.png",
            name: "Тест",
          };

        return null;
      },
    }),
  ],
};
