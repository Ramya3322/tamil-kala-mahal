const events = [
  { era: "300 BCE", title: "Sangam Era", body: "The flowering of classical Tamil literature — Akananuru, Purananuru, Thirukkural." },
  { era: "850 CE", title: "Chola Renaissance", body: "Bronze sculpture, monumental temples, and naval expeditions across Southeast Asia." },
  { era: "1200 CE", title: "Bhakti Movement", body: "Tamil devotional poetry of the Alvars and Nayanars transforms South Indian spirituality." },
  { era: "1900s", title: "Tamil Renaissance", body: "Bharathiyar's poetry awakens a modern Tamil consciousness across the diaspora." },
  { era: "Today", title: "Global Tamil Identity", body: "From Silicon Valley to Singapore, a 80-million-strong diaspora carries the language forward." },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="text-gold text-[11px] font-bold tracking-[0.3em] uppercase mb-4">
          Two Thousand Years
        </p>
        <h2 className="text-4xl md:text-5xl font-serif text-maroon text-balance">
          A timeline of <span className="italic text-clay">enduring identity</span>
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0 md:-translate-x-px" />
        <ol className="space-y-16">
          {events.map((e, i) => {
            const right = i % 2 === 1;
            return (
              <li
                key={e.title}
                className={`relative md:grid md:grid-cols-2 md:gap-12 items-center pl-12 md:pl-0`}
              >
                <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 size-3 rounded-full bg-gold ring-4 ring-maroon/10" />
                <div className={`${right ? "md:col-start-2 md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <p className="font-serif text-3xl text-maroon mb-2">{e.era}</p>
                  <h3 className="text-clay text-[11px] font-bold tracking-[0.25em] uppercase mb-3">
                    {e.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-pretty">
                    {e.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
