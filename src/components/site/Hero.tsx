
export function Hero() {
  return (
    <header
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#0B1220]"
    >
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.15),transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#111827] to-[#0B1220]" />

      <div className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12 pt-8 pb-16">

        {/* LEFT CONTENT */}
        <div className="max-w-3xl text-center lg:text-left">
          {/* Tamil Tagline */}
          <span className="inline-block text-gold font-serif italic text-lg md:text-xl mb-4 tracking-wide animate-fade-up">
            ஒருங்கிணைந்த பேரவை அணி — One Vision. One Community.
          </span>

          {/* Heading */}
          <h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-6xl leading-[1] text-ivory mb-8 animate-fade-up font-bold"
            style={{ animationDelay: "150ms" }}
          >
            ONE FeTNA{" "}
          </h1>

          {/* Description */}
          <p
            className="text-lg md:text-md text-ivory/80 leading-relaxed max-w-2xl animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            A united platform driven by{" "}
            <span className="text-gold font-medium">Truth</span>,{" "}
            <span className="text-gold font-medium">Transparency</span>, and{" "}
            <span className="text-gold font-medium">Trust</span> — showcasing
            visionary leaders, achievements, and service to the Tamil community.
          </p>

          {/* Tamil + English values */}
          <div
            className="mt-8 space-y-2 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <p className="text-gold text-lg tracking-wide">
              உண்மை · வெளிப்படைத்தன்மை · நம்பிக்கை
            </p>
            <p className="uppercase tracking-[0.3em] text-sm text-white font-bold">
              Truth · Transparency · Trust
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="mt-6 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start animate-fade-up"
            style={{ animationDelay: "500ms" }}
          >
            <a
              href="#archive"
              className="px-10 py-4 bg-gold text-[#0B1220] rounded-full font-semibold tracking-wide hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all duration-300"
            >
              Explore Leadership
            </a>

            <a
              href="#values"
              className="px-10 py-4 border border-gold/40 text-ivory rounded-full backdrop-blur-sm hover:bg-gold/10 transition-all duration-300"
            >
              Our Vision
            </a>
          </div>

          {/* Website */}
          <p
            className="mt-10 text-sm tracking-[0.25em] text-white animate-fade-up"
            style={{ animationDelay: "600ms" }}
          >
            www.onefetna.com
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-end h-full w-full lg:w-1/2 animate-fade-up">

          {/* Logo Glow */}
          <div className="absolute top-[5%] w-[150px] h-[150px] bg-gold/20 blur-3xl rounded-full z-0" />

          {/* ONE FeTNA Logo */}
          <img
            src={"src/assets/onefetna-logo.png"}
            alt="ONE FeTNA Logo"
            className="
    absolute
    top-[-10px]
    left-[-30px]
    md:left-[-60px]
    lg:left-[-80px]
    z-30
    w-[150px]
    md:w-[180px]
    object-contain
    drop-shadow-[0_0_40px_rgba(212,175,55,0.45)]
    animate-float
  "
          />

          {/* Main Golden Glow */}
          <div className="absolute w-[450px] h-[450px] md:w-[700px] md:h-[700px] bg-gold/20 blur-3xl rounded-full" />

          {/* Statue */}
          <img
            src={"src/assets/thiruvalluvarImg.png"}
            alt="Thiruvalluvar Statue"
            className="
              relative z-10
              h-[95vh]
              md:h-[105vh]
              max-h-[1200px]
              w-auto
              object-contain
              scale-[1.12]
              drop-shadow-[0_20px_80px_rgba(0,0,0,0.75)]
            "
          />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0B1220] to-transparent" />
    </header>
  );
}