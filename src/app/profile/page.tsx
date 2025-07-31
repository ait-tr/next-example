import { authOptions } from "@/lib/auth/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Profile() {
  // пример использования сессии на серверном компоененте
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h2>User profile </h2>
      <p>{session?.user?.email}</p>
      <Image
        src={session?.user?.image || ""}
        alt="avatar"
        unoptimized
        width={200}
        height={200}
      />
    </div>
  );
}
