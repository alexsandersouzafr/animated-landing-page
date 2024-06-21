"use client";
import { useGSAP } from "@gsap/react";
import HeroIllustration from "./hero-illustration";
import { Button } from "./ui/button";
import gsap from "gsap";
import { useRef } from "react";

export default function Hero() {
  const scope = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".hero", {
        y: 15,
        opacity: 0,
        duration: 0.3,
        ease: "power1.out",
      }).from(".text, .body2, .button, .illustration", {
        x: -15,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
      });
    },
    { scope: scope },
  );
  return (
    <div className="hero bg-silver" ref={scope}>
      <section className="gap:8 container flex flex-col-reverse items-center justify-center bg-silver px-4 py-16 md:grid md:h-[600px] md:grid-cols-12 md:gap-0">
        <div className="col-span-8 flex flex-col gap-8">
          <h1 className="text text-d_grey">
            The best framework <br />
            <span className="text text-primary">in 10 years</span>
          </h1>
          <p className="body2 text-grey">
            Where to grow your business as a photographer: site or social media?
          </p>
          <span className="button">
            <Button>Register</Button>
          </span>
        </div>
        <div className="illustration">
          <HeroIllustration />
        </div>
      </section>
    </div>
  );
}
