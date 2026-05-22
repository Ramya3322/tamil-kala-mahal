const testimonials = [
  {
    quote: "Uyarvu gave my children a window into a Tamil identity I feared they'd never know living abroad. It is a gift to the diaspora.",
    name: "Lakshmi Iyer",
    role: "Software architect, Toronto",
  },
  {
    quote: "Seeing farmers, weavers, and dancers honoured beside scientists — that is the Tamil story I always wanted to be told.",
    name: "Prof. R. Kalyanaraman",
    role: "University of Madras",
  },
  {
    quote: "The storytelling is documentary-grade. Every profile feels like an heirloom.",
    name: "Devika Subramanian",
    role: "Filmmaker, Mumbai",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <p className="text-gold text-[11px] font-bold tracking-[0.3em] uppercase mb-4">
          From the Community
        </p>
        <h2 className="text-4xl md:text-5xl font-serif text-maroon text-balance">
          What our circle is saying
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="bg-ivory p-8 ring-1 ring-maroon/10 hover:ring-gold/50 transition-all relative"
          >
            <span className="absolute -top-4 left-8 text-6xl font-serif text-gold/40 leading-none">
              “
            </span>
            <blockquote className="font-serif italic text-lg text-foreground/85 leading-relaxed text-pretty">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 pt-6 border-t border-maroon/10">
              <p className="font-serif text-maroon">{t.name}</p>
              <p className="text-clay text-[10px] font-bold tracking-[0.25em] uppercase mt-1">
                {t.role}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
