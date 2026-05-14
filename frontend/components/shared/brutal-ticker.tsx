export function BrutalTicker() {
  const items = [
    "Next.js",
    "shadcn/ui",
    "Framer Motion",
    "GSAP",
    "Static SEO",
    "Neo Brutalism",
  ];
  const repeatedItems = [...items, ...items];

  return (
    <div className="overflow-hidden border-y-2 border-black bg-foreground py-3 text-background">
      <div
        className="flex w-max items-center gap-4 whitespace-nowrap will-change-transform"
        data-gsap-marquee
      >
        {repeatedItems.map((item, index) => (
          <span
            className="border-2 border-background px-4 py-2 text-sm font-black uppercase shadow-[4px_4px_0_0_#fff]"
            key={`${item}-${index}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
