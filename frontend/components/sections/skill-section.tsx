import { BrutalCard } from "@/components/shared/brutal-card";
import { Stagger, StaggerItem } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillGroups } from "@/data/skills";

export function SkillSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        description="Stack dipilih untuk membangun produk web yang cepat dibuat, mudah diuji, dan siap dipublikasikan."
        eyebrow="Skills"
        title="Toolbox utama untuk frontend, backend, dan workflow."
      />
      <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <StaggerItem key={group.title}>
          <BrutalCard className="h-full bg-card" data-gsap-float>
            <CardHeader>
              <CardTitle className="text-2xl font-black uppercase">
                {group.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 p-4 pt-0">
              <p className="font-medium leading-7 text-muted-foreground">
                {group.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="rounded-none border-2 border-black bg-secondary px-3 py-1 text-sm font-black text-secondary-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </BrutalCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
