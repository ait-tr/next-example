import Link from "next/link";
import React from "react";
import ThemeToggler from "../ThemeToggler/ThemeToggles";
import AuthButton from "../AuthButton/AuthButton";

export default function NavBar() {
  return (
    <nav className="flex justify-center gap-6 items-center min-h-12 flex-wrap">
      <Link href={"/"} className="hover:text-amber-300">
        Home
      </Link>
      <Link href={"/about"} className="hover:text-amber-300">
        About
      </Link>
      <Link href={"/settings"} className="hover:text-amber-300">
        Settings
      </Link>
      <Link href={"/sports"} className="hover:text-amber-300">
        Sports
      </Link>
      <Link href={"/users/client-version"} className="hover:text-amber-300">
        Users client
      </Link>
      <Link href={"/users/server-version"} className="hover:text-amber-300">
        Users server
      </Link>
      <Link href={"/products/client-version"} className="hover:text-amber-300">
        Product client
      </Link>
      <Link href={"/products/server-version"} className="hover:text-amber-300">
        Product server
      </Link>
      <Link href={"/products/create"} className="hover:text-amber-300">
        Create produce
      </Link>
      <Link href={"/categories/create"} className="hover:text-amber-300">
        Create category
      </Link>
      <Link href={"/categories"} className="hover:text-amber-300">
        Categories
      </Link>
      <Link href={"/profile"} className="hover:text-amber-300">
        Profile
      </Link>

      <Link href={"/todos/create"} className="hover:text-amber-300">
        Create todo
      </Link>
      <Link href={"/todos"} className="hover:text-amber-300">
        Todos
      </Link>
      <Link href={"/todos/server-component"} className="hover:text-amber-300">
        Server Component
      </Link>


      <AuthButton />
      <ThemeToggler />
    </nav>
  );
}
