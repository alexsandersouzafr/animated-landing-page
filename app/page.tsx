"use client";

import NavBar from "@/components/nav-bar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  useGSAP(() => {
    gsap.to("main", { opacity: 1, duration: 2 });
  });

  return (
    <main className="opacity-0">
      <NavBar />
    </main>
  );
}
