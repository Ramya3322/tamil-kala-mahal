import heroImg from "@/assets/hero-temple.jpg";

export function Documentary() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 relative aspect-video group overflow-hidden ring-1 ring-maroon/10">
          <img
            src={heroImg}
            alt="Documentary still"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon/70 via-maroon/20 to-transparent" />
          <button
            aria-label="Play documentary"
            className="absolute inset-0 grid place-items-center"
          >
            <span className="size-20 rounded-full bg-gold/95 text-maroon grid place-items-center shadow-2xl group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" className="size-7 ml-1 fill-current">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
          <p className="absolute bottom-6 left-6 text-ivory text-[10px] font-bold tracking-[0.25em] uppercase">
            Now Streaming — 42 min
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="text-gold text-[11px] font-bold tracking-[0.3em] uppercase mb-4">
            Documentary Showcase
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-maroon mb-6 text-balance leading-[1.1]">
            <span className="italic">Of Stone &amp; Song</span>
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-8 text-pretty">
            A cinematic portrait of the Chola bronze tradition, tracing the
            hands of master sthapatis from the temples of Thanjavur to galleries
            in London — a meditation on what it means to inherit a craft a
            thousand years old.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-7 py-3 bg-maroon text-gold text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-charcoal transition-colors"
          >
            Watch the Film
          </a>
        </div>
      </div>
    </section>
  );
}
