import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { Profile } from "@/data/profiles";

type Props = { profile: Profile | null; onClose: () => void };

export function ProfileDialog({ profile, onClose }: Props) {
  const open = !!profile;
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-ivory border-maroon/20 max-h-[90vh] overflow-y-auto">
        {profile && (
          <div>
            <div className="relative h-72 md:h-96 overflow-hidden">
              <img
                src={profile.image}
                alt={profile.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon via-maroon/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-ivory">
                <p className="text-gold text-[11px] font-bold tracking-[0.25em] uppercase mb-3">
                  {profile.domain}
                </p>
                <DialogTitle className="font-serif text-4xl md:text-5xl text-ivory text-balance">
                  {profile.name}
                </DialogTitle>
                <DialogDescription className="text-ivory/80 mt-2 text-base">
                  {profile.role}
                </DialogDescription>
              </div>
            </div>

            <div className="p-8 md:p-12 grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-10">
                <blockquote className="font-serif italic text-2xl md:text-3xl text-maroon border-l-2 border-gold pl-6 text-balance">
                  “{profile.quote}”
                </blockquote>

                <section>
                  <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-4">
                    Biography
                  </h4>
                  <p className="text-foreground/80 leading-relaxed text-pretty">
                    {profile.bio}
                  </p>
                </section>

                <section>
                  <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-4">
                    Contribution
                  </h4>
                  <p className="text-foreground/80 leading-relaxed text-pretty">
                    {profile.contributions}
                  </p>
                </section>

                <section>
                  <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-4">
                    Achievements
                  </h4>
                  <ul className="space-y-3">
                    {profile.achievements.map((a) => (
                      <li key={a} className="flex gap-3 text-foreground/80">
                        <span className="text-gold mt-1.5 size-1.5 rounded-full bg-gold shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <aside className="space-y-10 md:border-l md:border-maroon/10 md:pl-12">
                <section>
                  <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-6">
                    Journey
                  </h4>
                  <ol className="space-y-5">
                    {profile.timeline.map((t) => (
                      <li key={t.year} className="relative pl-6">
                        <span className="absolute left-0 top-1.5 size-2 rounded-full bg-maroon ring-4 ring-gold/20" />
                        <p className="font-serif text-maroon text-lg">{t.year}</p>
                        <p className="text-foreground/70 text-sm">{t.event}</p>
                      </li>
                    ))}
                  </ol>
                </section>

                <section>
                  <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-4">
                    Connect
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {profile.social.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className="px-4 py-2 text-xs uppercase tracking-widest border border-maroon/20 text-maroon hover:bg-maroon hover:text-gold transition-colors"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </section>
              </aside>
            </div>
            {profile.images && profile.images.length > 0 && (
              <section>
                <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-4 pl-10">
                  Gallery
                </h4>
                <div className="grid grid-cols-4 gap-2 pl-10">
                  {profile.images.map((src, i) => (
                    <div
                      key={i}
                      className="aspect-square overflow-hidden rounded-sm"
                    >
                      <img
                        src={src}
                        alt={`${profile.name} photo ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
