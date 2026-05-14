import { Check, MessageCircle } from "lucide-react";

import { BrutalCard } from "@/components/shared/brutal-card";
import { MotionAnchor, Stagger, StaggerItem } from "@/components/shared/motion-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pricingPlans } from "@/data/pricing";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function PriceSection() {
  return (
    <section id="price" className="border-y-2 border-black bg-accent py-20 text-accent-foreground">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          className="[&_p]:text-accent-foreground/80"
          description="Harga dibuat sebagai patokan awal. Untuk fitur yang lebih custom, scope bisa dibahas dulu lewat WhatsApp."
          eyebrow="Price"
          title="Paket jasa web yang bisa langsung dipilih."
        />
        <Stagger className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <StaggerItem key={plan.name}>
              <BrutalCard
                className={cn(
                  "h-full text-foreground",
                  plan.highlighted ? "bg-secondary" : "bg-background"
                )}
                data-gsap-float
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-2xl font-black uppercase">
                      {plan.name}
                    </CardTitle>
                    {plan.highlighted ? (
                      <Badge className="rounded-none border-2 border-black bg-primary px-2 py-1 font-black text-primary-foreground shadow-[3px_3px_0_0_#000]">
                        Popular
                      </Badge>
                    ) : null}
                  </div>
                  <p className="mt-4 text-4xl font-black">{plan.price}</p>
                </CardHeader>
                <CardContent className="flex h-full flex-col gap-5 p-4 pt-0">
                  <p className="font-medium leading-7 text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="grid gap-3">
                    {plan.features.map((feature) => (
                      <div className="flex gap-3" key={feature}>
                        <span className="grid size-6 shrink-0 place-items-center border-2 border-black bg-primary text-primary-foreground">
                          <Check className="size-4" />
                        </span>
                        <p className="font-bold leading-6">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <MotionAnchor
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "mt-auto h-12 rounded-none border-2 border-black bg-primary text-base font-black text-primary-foreground shadow-[4px_4px_0_0_#000]"
                    )}
                    href={profile.whatsapp}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {plan.cta}
                    <MessageCircle />
                  </MotionAnchor>
                </CardContent>
              </BrutalCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
