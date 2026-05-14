"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function GsapEffects() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleX: 0 },
          {
            ease: "none",
            scaleX: 1,
            scrollTrigger: {
              end: "bottom bottom",
              scrub: 0.2,
              start: "top top",
              trigger: document.documentElement,
            },
          }
        );
      }

      gsap.utils.toArray<HTMLElement>("[data-gsap-float]").forEach((el, index) => {
        gsap.to(el, {
          ease: "none",
          rotate: index % 2 === 0 ? 2 : -2,
          scrollTrigger: {
            end: "bottom top",
            scrub: true,
            start: "top bottom",
            trigger: el,
          },
          y: index % 2 === 0 ? -26 : 26,
        });
      });

      gsap.utils
        .toArray<HTMLElement>("[data-gsap-hero-card]")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { rotate: 2, y: 0 },
            {
              ease: "none",
              rotate: -2,
              scrollTrigger: {
                end: "bottom top",
                scrub: true,
                start: "top top",
                trigger: el,
              },
              y: -44,
            }
          );
        });

      gsap.utils.toArray<HTMLElement>("[data-gsap-marquee]").forEach((el) => {
        gsap.to(el, {
          duration: 18,
          ease: "none",
          repeat: -1,
          xPercent: -50,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-2 border-b-2 border-black bg-background">
      <div
        ref={progressRef}
        className="h-full origin-left scale-x-0 bg-primary"
      />
    </div>
  );
}
