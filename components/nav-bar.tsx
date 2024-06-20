import React from "react";
import { Button } from "./ui/button";
import logo from "@/public/logo.svg";
import Image from "next/image";

const navItems = [
  "Home",
  "Service",
  "Feature",
  "Products",
  "Testimonal",
  "FAQ",
];

export default function NavBar() {
  return (
    <nav className="container flex h-[84px] items-center gap-8">
      <div className="relative h-full w-28 shrink-0 md:w-36">
        <Image src={logo} fill className="object-contain" alt="logo" />
      </div>
      <ul className="body2 flex flex-1 justify-center gap-4 md:gap-8">
        {navItems.map((item, i) => (
          <li
            key={i}
            className="hidden cursor-pointer border-b border-transparent antialiased transition-colors duration-500 first:font-medium hover:border-b hover:border-primary md:block"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="shrink-0 space-x-4">
        <Button variant="tertiary" size="md" className="h-[40px]">
          Login
        </Button>
        <Button size="md" className="h-[40px]">
          Sign Up
        </Button>
      </div>
    </nav>
  );
}
