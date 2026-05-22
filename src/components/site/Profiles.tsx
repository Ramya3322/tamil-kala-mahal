import { useState } from "react";
import { profiles, type Profile } from "@/data/profiles";
import { ProfileCard } from "./ProfileCard";
import { ProfileDialog } from "./ProfileDialog";

export function Profiles() {
  const [active, setActive] = useState<Profile | null>(null);

  return (
    <section id="archive" className="py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div className="max-w-xl">
          <p className="text-gold text-[11px] font-bold tracking-[0.3em] uppercase mb-4">
            The Collective — 01 / 10
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-maroon mb-4 text-balance">
            The Torchbearers
          </h2>
          <p className="text-foreground/65 leading-relaxed text-pretty">
            Ten lives weaving the future of Tamil excellence — through art,
            technology, soil, language, and quiet acts of community.
          </p>
        </div>
        <div className="ornament-divider w-32 hidden md:flex">
          <span className="text-gold text-xl">✦</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        {profiles.map((p) => (
          <ProfileCard key={p.id} profile={p} onOpen={() => setActive(p)} />
        ))}
      </div>

      <ProfileDialog profile={active} onClose={() => setActive(null)} />
    </section>
  );
}
