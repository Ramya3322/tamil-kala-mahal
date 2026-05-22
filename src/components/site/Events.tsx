const events = [
  {
    date: "JAN 14",
    title: "Pongal at the Pier",
    place: "Marina Beach, Chennai",
    body: "An open-air harvest celebration with folk arts, traditional cooking, and parai performances.",
  },
  {
    date: "MAR 02",
    title: "Sangam Lit Festival",
    place: "Madurai",
    body: "Three days of readings, translation workshops, and conversations with Tamil writers.",
  },
  {
    date: "MAY 18",
    title: "Diaspora Forum",
    place: "Singapore",
    body: "A gathering of Tamil entrepreneurs, scholars, and artists from across Southeast Asia.",
  },
  {
    date: "AUG 09",
    title: "Bharatanatyam Margam",
    place: "Music Academy, Chennai",
    body: "An evening of classical dance honouring the legacy of Rukmini Devi Arundale.",
  },
];

export function Events() {
  return (
    <section
      id="events"
      className="bg-secondary py-24 md:py-32 px-6 md:px-8 border-y border-maroon/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-gold text-[11px] font-bold tracking-[0.3em] uppercase mb-4">
              The Calendar
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-maroon text-balance">
              Upcoming community gatherings
            </h2>
          </div>
          <a href="#" className="text-clay text-[11px] font-bold tracking-[0.25em] uppercase hover:text-maroon">
            View Full Calendar →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((e) => (
            <article
              key={e.title}
              className="group bg-ivory p-6 ring-1 ring-maroon/10 hover:ring-gold/60 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <p className="font-serif text-3xl text-maroon mb-4">{e.date}</p>
              <h3 className="text-lg font-serif text-charcoal mb-1">{e.title}</h3>
              <p className="text-clay text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                {e.place}
              </p>
              <p className="text-foreground/70 text-sm leading-relaxed text-pretty">
                {e.body}
              </p>
              <div className="mt-6 h-px bg-gradient-to-r from-gold/40 via-gold/10 to-transparent" />
              <a
                href="#"
                className="mt-4 inline-block text-[10px] font-bold tracking-[0.25em] uppercase text-maroon group-hover:text-clay"
              >
                Reserve a seat →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
