"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full flex justify-center items-center flex-col p-6">
      <h2 className="font-bold text-3xl">Page not found!</h2>
      <Link
        className="underline mt-8 bg-gradient-to-t from-yellow-400 to-red-500 px-1! py-8! rounded-3xl"
        href={"/"}
      >
        Back to home
      </Link>
    </div>
  );
}
