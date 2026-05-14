import { CheckCircle2 } from "lucide-react";

import { BrutalCard } from "@/components/shared/brutal-card";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { CardContent } from "@/components/ui/card";

const highlights = [
  "Gwe Ris, kelahiran 2005 dan sekolah di jurusan RPL.",
  "Lagi fokus ngembangin skill yang stuck",
  "Suka gabut terus bikin  web yang seadanya, responsif, dan punya karakter.",
  
];

const profileFacts = [
  { label: "Birth", value: "2005" },
  { label: "school", value: "RPL" },
  { label: "Focus", value: "Frontend + Fullstuck" },
  { label: "Tema ? :", value: "Neo Brutalism" },
];

export function AboutSection() {
  return (
    <section id="about" className="border-y-2 border-black bg-muted py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          description="Bagian ini dibuat lebih personal, jadi orang yang mampir bisa langsung tahu siapa Bigboss, lagi belajar apa, dan arah skill yang sedang dibangun."
          eyebrow="Tentang Kita"
          title="Profil singkat tentang Bigboss dan perjalanan di dunia web."
        />
        <Reveal delay={0.12} direction="right">
        <BrutalCard className="bg-background" data-gsap-float>
          <CardContent className="space-y-5 p-6">
            <div className="border-2 border-black bg-secondary p-4 shadow-[4px_4px_0_0_#000]">
              <p className="text-sm font-black uppercase text-secondary-foreground">
                Profile
              </p>
              <h3 className="mt-2 text-3xl font-black leading-tight text-secondary-foreground md:text-4xl">
               I`M Create Web Portofolio Tema Neo Brutalism`
              </h3>
            </div>
            <p className="text-lg font-semibold leading-8">
              Gwe Riss, kelahiran 2005 dan sekolah jurusan RPL. Dari situ
              gwe mulai kenal dunia coding, desain tampilan, logika aplikasi,
              sampai gimana cara bikin website yang enak dilihat dan tetap
              rapi secara struktur.
            </p>
            <p className="font-medium leading-7 text-muted-foreground">
              Sekarang fokus ngembangin kemampuan di frontend dan fullstack :
              mulai dari Next.js, Tailwind CSS, shadcn/ui, sampai integrasi API.
              Portfolio ini jadi tempat buat nunjukin proses, karakter visual,
              dan project yang pelan-pelan dibangun jadi lebih matang.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {profileFacts.map((fact) => (
                <div
                  className="border-2 border-black bg-card p-3 shadow-[4px_4px_0_0_#000]"
                  key={fact.label}
                >
                  <p className="text-xs font-black uppercase text-muted-foreground">
                    {fact.label}
                  </p>
                  <p className="mt-1 text-lg font-black">{fact.value}</p>
                </div>
              ))}
            </div>
            <Stagger className="grid gap-4">
              {highlights.map((highlight) => (
                <StaggerItem key={highlight} className="flex gap-3">
                  <CheckCircle2 className="mt-1 size-5 shrink-0" />
                  <p className="font-bold leading-7">{highlight}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </CardContent>
        </BrutalCard>
        </Reveal>
      </div>
    </section>
  );
}
