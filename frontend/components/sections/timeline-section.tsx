import { CalendarDays } from "lucide-react";

import { BrutalCard } from "@/components/shared/brutal-card";
import { Stagger, StaggerItem } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import { timelineItems } from "@/data/timeline";

export function TimelineSection() {
  return (
    <section id="timeline" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        description="Timeline ini merangkum perjalanan Bigboss dari latar belakang RPL sampai mulai membangun portfolio dan project web."
        eyebrow="Timeline"
        title="Perjalanan belajar dan membangun skill web."
      />
      <Stagger className="relative mt-12 grid gap-20">
        <div className="absolute bottom-0 left-5 top-0 hidden w-1 border-x-2 border-black bg-primary md:block" />
        {timelineItems.map((item, index) => (
          <StaggerItem key={`${item.year}-${item.title}`}>
            <div className="grid gap-4 md:grid-cols-[96px_4fr] md:gap-18">
              <div className="relative z-10 grid grid-cols-2  gap-4 ">
                <div className="grid w-11 h-11 place-items-center border-2 border-black bg-secondary text-secondary-foreground shadow-[4px_4px_0_0_#000]">
                  <CalendarDays className="size-" />
                </div>
                <p className="mt-3 text-[1.1rem] font-black uppercase md:text-center">
                  {item.year}
                </p>
              </div>
              <BrutalCard
                className={index % 2 === 0 ? "bg-background" : "bg-secondary"}
                data-gsap-float
              >
                <CardContent className="space-y-4 p-6">
                  <Badge className="rounded-none border-2 border-black bg-primary px-3 py-1 text-xs font-black uppercase text-primary-foreground shadow-[3px_3px_0_0_#000]">
                    {item.tag}
                  </Badge>
                  <h3 className="text-2xl font-black leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-medium leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </BrutalCard>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
