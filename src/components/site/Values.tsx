const visionPdfUrl = new URL("../../assets/Our Vision.pdf", import.meta.url).toString();

export function Values() {
  return (
    <section
      id="values"
      className="relative bg-maroon text-ivory py-28 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 kolam-pattern opacity-15" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-[28px] font-bold tracking-[0.3em] uppercase mb-4">
            Our Vision
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory text-balance">
            The Vision that defines our team
          </h2>
        </div>

        <div className="overflow-hidden rounded-sm border border-gold/25 bg-ivory shadow-2xl shadow-black/20">
          <iframe
            title="Our Vision PDF"
            src={visionPdfUrl}
            className="h-[80vh] min-h-[520px] w-full"
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href={visionPdfUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-sm border border-gold/40 px-5 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-maroon"
          >
            Open PDF
          </a>
        </div>
      </div>
    </section>
  );
}
