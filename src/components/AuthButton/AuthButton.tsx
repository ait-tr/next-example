"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
    // пример использования сессии в клиентском компоненте
  const { data: session } = useSession();
  // console.log(session);
  return session ? (
    <button onClick={() => signOut()}>Sign out</button>
  ) : (
    <button onClick={() => signIn()}>Sign in with Google</button>
  );
}
