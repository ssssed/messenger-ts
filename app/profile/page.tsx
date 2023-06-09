import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <main>
      <h1>Profile {session?.user?.name}</h1>
      {session?.user?.image && (
        <Image
          src={session.user.image}
          alt={session.user.name!}
          width={100}
          height={100}
        />
      )}
    </main>
  );
}
