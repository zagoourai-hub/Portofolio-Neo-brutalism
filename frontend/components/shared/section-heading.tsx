import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Reveal } from "./motion-wrapper";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <Badge className="mb-4 rounded-none border-2 border-black bg-secondary px-3 py-1 text-sm font-black uppercase text-secondary-foreground shadow-[3px_3px_0_0_#000]">
        {eyebrow}
      </Badge>
      <h2 className="text-3xl font-black leading-tight text-balance md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base font-medium leading-7 text-muted-foreground md:text-lg">
        {description}
      </p>
    </Reveal>
  );
}
