import Image from "next/image";
import { ArrowUpRight, GitBranch } from "lucide-react";

import { BrutalCard } from "@/components/shared/brutal-card";
import { MotionAnchor, Stagger, StaggerItem } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectSection() {
  return (
    <section id="projects" className="border-y-2 border-black bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          description="Contoh project yang saya bangun menggunakan Next.js, Tailwind CSS, shadcn/ui, dan integrasi API."
          eyebrow="Projects"
          title="Halaman Project Web."
        />
        <Stagger className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <StaggerItem key={project.title}>
            <BrutalCard className="h-full bg-background" data-gsap-float>
              {project.image ? (
                <div className="m-4 overflow-hidden border-2 border-black bg-background shadow-[4px_4px_0_0_#000]">
                  <div className="relative aspect-video w-full">
                    <Image
                      alt={project.imageAlt}
                      className="object-cover"
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      src={project.image}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={cn(
                    "m-4 grid aspect-video place-items-center border-2 border-black text-center text-5xl font-black shadow-[4px_4px_0_0_#000]",
                    project.accent
                  )}
                >
                  0{index + 1}
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-black leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 p-4 pt-0">
                <p className="font-medium leading-7 text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      className="rounded-none border-2 border-black bg-card px-2 py-1 font-black"
                      variant="outline"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <MotionAnchor
                    className={cn(
                      buttonVariants({ size: "sm" }),
                      "rounded-none border-2 border-black bg-primary font-black text-primary-foreground shadow-[3px_3px_0_0_#000]"
                    )}
                    href={project.demo}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Demo
                    <ArrowUpRight />
                  </MotionAnchor>
                  <MotionAnchor
                    className={cn(
                      buttonVariants({ size: "sm", variant: "outline" }),
                      "rounded-none border-2 border-black bg-background font-black shadow-[3px_3px_0_0_#000]"
                    )}
                    href={project.github}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Code
                    <GitBranch />
                  </MotionAnchor>
                </div>
              </CardContent>
            </BrutalCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
