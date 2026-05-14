import { BriefcaseBusiness } from "lucide-react";

import { BrutalCard } from "@/components/shared/brutal-card";
import { Stagger, StaggerItem } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { CardContent } from "@/components/ui/card";
import { experiences } from "@/data/experiences";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        description="Riwayat ini bisa diganti dengan pengalaman asli, sertifikasi, internship, atau milestone freelance."
        eyebrow="Experience"
        title="Pengalaman membangun web dari landing page sampai dashboard."
      />
      <Stagger className="mt-10 grid gap-5">
        {experiences.map((experience) => (
          <StaggerItem key={`${experience.period}-${experience.role}`}>
          <BrutalCard data-gsap-float>
            <CardContent className="grid gap-5 p-6 md:grid-cols-[180px_1fr]">
              <div className="flex items-start gap-3">
                <div className="grid size-11 place-items-center border-2 border-black bg-accent text-accent-foreground shadow-[4px_4px_0_0_#000]">
                  <BriefcaseBusiness className="size-5" />
                </div>
                <p className="text-sm font-black uppercase">{experience.period}</p>
              </div>
              <div>
                <h3 className="text-2xl font-black">{experience.role}</h3>
                <p className="mt-1 font-black uppercase text-primary">
                  {experience.company}
                </p>
                <p className="mt-4 font-medium leading-7 text-muted-foreground">
                  {experience.description}
                </p>
              </div>
            </CardContent>
          </BrutalCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
