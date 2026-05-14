import { Separator } from "@/components/ui/separator";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t-2 border-black bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-black uppercase">{profile.name}</p>
          <p className="mt-1 text-sm font-medium text-background/70">
            Static portfolio built with Next.js and shadcn/ui.
          </p>
        </div>
        <Separator className="bg-background/30 md:hidden" />
        <p className="text-sm font-bold text-background/80">
          Ready for Vercel deployment.
        </p>
      </div>
    </footer>
  );
}
