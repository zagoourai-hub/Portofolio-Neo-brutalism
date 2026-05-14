import { GitBranch, Link, Mail, MessageCircle } from "lucide-react";

import { BrutalCard } from "@/components/shared/brutal-card";
import { MotionAnchor, Reveal, Stagger, StaggerItem } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const contacts = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: profile.phone,
    href: profile.whatsapp,
    icon: MessageCircle,
  },
  {
    label: "GitHub",
    value: "github.com/username",
    href: profile.github,
    icon: GitBranch,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/username",
    href: profile.linkedin,
    icon: Link,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="border-t-2 border-black bg-accent py-20 text-accent-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          className="[&_p]:text-accent-foreground/80"
          description="Kirim pesan untuk diskusi landing page, dashboard, portfolio, atau integrasi aplikasi web."
          eyebrow="Contact"
          title="Punya ide web yang perlu dibuat lebih nyata?"
        />
        <Reveal delay={0.12} direction="right">
        <BrutalCard className="bg-background text-foreground" data-gsap-float>
          <CardContent className="space-y-4 p-6">
            <Stagger className="space-y-4">
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <StaggerItem key={contact.label}>
                <MotionAnchor
                  className="flex flex-col gap-3 border-2 border-black bg-card p-4 font-bold shadow-[4px_4px_0_0_#000] transition-transform hover:-translate-x-1 hover:-translate-y-1 sm:flex-row sm:items-center sm:justify-between"
                  href={contact.href}
                  rel="noreferrer"
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                >
                  <span className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center border-2 border-black bg-secondary text-secondary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase text-muted-foreground">
                        {contact.label}
                      </span>
                      <span className="break-all">{contact.value}</span>
                    </span>
                  </span>
                  <span
                    className={cn(
                      buttonVariants({ size: "sm" }),
                      "w-fit rounded-none border-2 border-black bg-primary font-black text-primary-foreground"
                    )}
                  >
                    Open
                  </span>
                </MotionAnchor>
                </StaggerItem>
              );
            })}
            </Stagger>
          </CardContent>
        </BrutalCard>
        </Reveal>
      </div>
    </section>
  );
}
