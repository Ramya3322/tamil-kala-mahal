import heroImg from "@/assets/hero-temple.jpg";

export function Hero() {
  return (
    <header
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroImg}
        alt="Cinematic Tamil Nadu temple gopuram at golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-maroon/70 via-maroon/30 to-ivory" />
      <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-transparent" />

      <div className="relative z-10 text-center px-6 max-w-5xl pt-20">
        <span className="inline-block animate-fade-up text-gold font-serif italic text-lg md:text-xl mb-6 tracking-wide">
          உயர்வு — Elevating our legacy
        </span>
        <h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory leading-[1.05] mb-8 text-balance animate-fade-up"
          style={{ animationDelay: "150ms" }}
        >
          Celebrating Tamil <span className="italic text-gold">Heritage</span>,
          Achievements & Identity
        </h1>
        <p
          className="text-base md:text-lg text-ivory/85 max-w-2xl mx-auto font-light leading-relaxed text-pretty animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          A digital sanctuary preserving our ancient roots while empowering the
          modern Tamil identity — connecting generations across the world.
        </p>

        <div
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
          style={{ animationDelay: "450ms" }}
        >
          <a
            href="#archive"
            className="px-10 py-4 bg-gold text-maroon rounded-full font-semibold tracking-wide hover:shadow-2xl hover:scale-[1.02] transition-all"
          >
            Explore the People
          </a>
          <a
            href="#values"
            className="px-10 py-4 border border-ivory/30 text-ivory rounded-full font-serif italic hover:bg-ivory/10 transition-all"
          >
            Read Our Story
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-gold/0 via-gold to-gold/0 z-10" />
    </header>
  );
}
