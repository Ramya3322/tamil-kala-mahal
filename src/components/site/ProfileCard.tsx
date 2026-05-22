import type { Profile } from "@/data/profiles";

type Props = { profile: Profile; onOpen: () => void };

export function ProfileCard({ profile, onOpen }: Props) {
  return (
    <button
      onClick={onOpen}
      className="group text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      aria-label={`Open profile of ${profile.name}`}
    >
      <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-secondary ring-1 ring-maroon/10">
        <img
          src={profile.image}
          alt={`Portrait of ${profile.name}`}
          loading="lazy"
          width={800}
          height={1000}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 border-[10px] border-transparent group-hover:border-gold/30 transition-all duration-500" />
        <div className="absolute inset-0 bg-maroon/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
          <span className="px-5 py-2 bg-gold text-maroon text-[10px] font-bold tracking-[0.2em] uppercase">
            View Story
          </span>
        </div>
      </div>
      <div className="border-l-2 border-gold pl-5">
        <h3 className="text-xl md:text-2xl font-serif text-maroon group-hover:translate-x-1 transition-transform">
          {profile.name}
        </h3>
        <p className="text-clay text-[11px] font-semibold tracking-[0.2em] uppercase mt-2 mb-3">
          {profile.role}
        </p>
        <p className="text-foreground/70 italic text-sm leading-relaxed text-pretty">
          “{profile.quote}”
        </p>
      </div>
    </button>
  );
}
