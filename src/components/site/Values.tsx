const values = [
  {
    tamil: "அன்பு",
    title: "Anbu — Heritage",
    body: "Safeguarding two millennia of Sangam poetry, Chola bronzes, and living traditions for the generations yet to come.",
  },
  {
    tamil: "அறிவு",
    title: "Arivu — Excellence",
    body: "Championing Tamil achievement in science, business, and the creative arts across every continent.",
  },
  {
    tamil: "ஒற்றுமை",
    title: "Otrumai — Unity",
    body: "Forging an unbreakable bridge between the soil of Tamil Nadu and the global diaspora that carries it forward.",
  },
];

export function Values() {
  return (
    <section
      id="values"
      className="relative bg-maroon text-ivory py-28 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 kolam-pattern opacity-15" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <p className="text-gold text-[11px] font-bold tracking-[0.3em] uppercase mb-4">
          The Pillars of Uyarvu
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-16 text-balance">
          Three values that shape <span className="italic text-gold">a people</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {values.map((v) => (
            <div key={v.title} className="text-center md:px-4">
              <p className="font-serif text-5xl text-gold mb-4">{v.tamil}</p>
              <h3 className="text-gold text-[11px] font-bold tracking-[0.25em] uppercase mb-4">
                {v.title}
              </h3>
              <p className="text-ivory/75 leading-relaxed text-sm text-pretty">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
