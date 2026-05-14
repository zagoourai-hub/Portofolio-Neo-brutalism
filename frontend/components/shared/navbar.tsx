"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems, profile } from "@/data/profile";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-black bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a
          href="#home"
          className="border-2 border-black bg-primary px-3 py-2 text-sm font-black uppercase text-primary-foreground shadow-[4px_4px_0_0_#000]"
        >
          {profile.name}
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-2 border-transparent px-3 py-2 text-sm font-black uppercase transition-colors hover:border-black hover:bg-secondary"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                aria-label="Open navigation menu"
                className="rounded-none border-2 border-black bg-background text-foreground shadow-[4px_4px_0_0_#000] md:hidden"
                size="icon"
                variant="outline"
              />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent
            className="w-[min(88vw,360px)] rounded-none border-l-2 border-black bg-background shadow-[8px_0_0_0_#000]"
            side="right"
          >
            <SheetHeader className="border-b-2 border-black">
              <SheetTitle className="text-xl font-black uppercase">
                Navigation
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-3 p-4">
              {navItems.map((item) => (
                <SheetClose
                  key={item.href}
                  render={
                    <a
                      className="border-2 border-black bg-card px-4 py-3 text-base font-black uppercase shadow-[4px_4px_0_0_#000]"
                      href={item.href}
                    />
                  }
                >
                  {item.label}
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
