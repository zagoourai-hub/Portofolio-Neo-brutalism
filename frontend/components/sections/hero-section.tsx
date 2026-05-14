import Image from "next/image";
import { ArrowUpRight, Download, MapPin } from "lucide-react";

import { MotionAnchor, Reveal, Stagger, StaggerItem } from "@/components/shared/motion-wrapper";
import { TypewriterText } from "@/components/shared/typewriter-text";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { profile, stats } from "@/data/profile";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[calc(100vh-74px)] max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20"
    >
      <div>
        <Reveal direction="left">
          <Badge className="mb-5 rounded-none border-2 border-black bg-secondary px-3 py-1 text-sm font-black uppercase text-secondary-foreground shadow-[3px_3px_0_0_#000]">
            {profile.role}
          </Badge>
        </Reveal>
        <Reveal delay={0.08} direction="left">
          <h1 className="max-w-4xl text-4xl font-black uppercase leading-[1.2] text-balance md:text-6xl lg:text-7xl">
            {profile.headline}
          </h1>
        </Reveal>
        <Reveal delay={0.12} direction="left">
          <TypewriterText
            className="mt-5 w-fit border-2 border-black bg-accent px-4 py-2 text-xl font-black uppercase text-accent-foreground shadow-[4px_4px_0_0_#000] md:text-2xl"
            words={["I am Frontend Dev", "I am Fullstuck Dev"]}
          />
        </Reveal>
        <Reveal delay={0.16} direction="left">
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-muted-foreground">
            {profile.bio}
          </p>
        </Reveal>
        <Reveal delay={0.22} direction="left">
          <div className="mt-4 flex items-center gap-2 text-sm font-black uppercase">
            <MapPin className="size-4" />
            {profile.location}
          </div>
        </Reveal>
        <Reveal delay={0.28} direction="up">
          <div className="mt-8 flex flex-wrap gap-4">
          <MotionAnchor
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 rounded-none border-2 border-black bg-primary px-5 text-base font-black text-primary-foreground shadow-[4px_4px_0_0_#000]"
            )}
            href="#projects"
          >
            Lihat Project
            <ArrowUpRight />
          </MotionAnchor>
          <MotionAnchor
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-12 rounded-none border-2 border-black bg-background px-5 text-base font-black text-foreground shadow-[4px_4px_0_0_#000]"
            )}
            href={profile.resume}
          >
            Download CV
            <Download />
          </MotionAnchor>
          </div>
        </Reveal>
      </div>

      <Reveal direction="right">
      <div
        className="relative min-h-[360px] border-2 border-black bg-accent p-5 text-accent-foreground shadow-[10px_10px_0_0_#000]"
        data-gsap-hero-card
      >
        <div className="absolute -left-4 z-1 -rotate-40 top-5 border-2 border-black bg-secondary px-4 py-2 text-sm font-black uppercase text-secondary-foreground shadow-[4px_4px_0_0_#000]">
          Web Builder
        </div>
        <div className="grid h-full min-h-[320px] place-items-center border-2 border-black bg-background p-4 text-foreground">
          <div className="relative aspect-square w-full  max-w-[280px] overflow-hidden border-2 border-black bg-primary shadow-[8px_8px_0_0_#000]">
            <Image
              alt={`${profile.name} web programmer visual`}
              className="object-cover "
              fill
              priority
              sizes="(min-width: 768px) 280px, 70vw"
              src={profile.image}
            />
          </div>
        </div>
        <Stagger className="mt-5 grid gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <StaggerItem
              key={stat.label}
              className="border-2 border-black bg-card p-3 shadow-[4px_4px_0_0_#000]"
            >
              <p className="text-2xl font-black">{stat.value}</p>
              <p className="text-xs font-bold uppercase text-muted-foreground">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
      </Reveal>
    </section>
  );
}
