import { useEffect, useState } from "react";

const links = [
  { label: "The Archive", href: "#archive" },
  { label: "Culture", href: "#values" },
  { label: "Timeline", href: "#timeline" },
  { label: "Events", href: "#events" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/80 backdrop-blur-md border-b border-maroon/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-maroon rotate-45 flex items-center justify-center shadow-md">
            <span className="text-gold font-serif -rotate-45 font-bold text-lg">உ</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xl font-bold tracking-tight text-maroon">
              UYARVU
            </span>
            <span className="text-[10px] tracking-[0.25em] text-clay uppercase mt-0.5">
              Tamil Collective
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-10 text-[11px] font-semibold tracking-[0.2em] uppercase text-maroon/80">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative hover:text-clay transition-colors after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#archive"
          className="hidden sm:inline-flex px-5 py-2.5 bg-maroon text-gold text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-charcoal transition-all shadow-md hover:shadow-lg"
        >
          Join the Circle
        </a>
      </div>
    </nav>
  );
}
