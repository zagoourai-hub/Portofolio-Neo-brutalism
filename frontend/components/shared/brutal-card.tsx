import type * as React from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type BrutalCardProps = React.ComponentProps<typeof Card>;

export function BrutalCard({ className, ...props }: BrutalCardProps) {
  return (
    <Card
      className={cn(
        "rounded-none border-2 border-black bg-card shadow-[6px_6px_0_0_#000] ring-0 transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#000]",
        className
      )}
      {...props}
    />
  );
}
