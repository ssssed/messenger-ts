import type { AuthOptions, User as NextUser } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { IFetchUser } from "@/types";

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

        const response = await fetch(`${process.env.BASE_URL}/users`);
        const data: IFetchUser[] = await response.json();

        const user = data.find((el) => el.email === credentials.email && el.password === credentials.password);

        if (user) {
          return { name: user.name, email: user.email, image: user.image || "/person.png" } as NextUser;
        }

        return null;
      },
    }),
  ],
};
