export function Footer() {
  return (
    <footer className="bg-maroon text-ivory pt-24 pb-12 px-6 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 kolam-pattern opacity-10" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-gold rotate-45 grid place-items-center">
                <span className="text-maroon font-serif -rotate-45 font-bold text-lg">உ</span>
              </div>
              <div className="leading-none">
                <p className="font-serif text-2xl tracking-tight">UYARVU</p>
                <p className="text-[10px] tracking-[0.25em] text-gold uppercase mt-1">
                  Tamil Collective
                </p>
              </div>
            </div>
            <p className="text-ivory/65 max-w-sm leading-relaxed text-pretty">
              A digital sanctuary dedicated to the documentation and celebration
              of Tamil excellence — built with pride, threaded with gold.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-5">
              Navigate
            </h4>
            <ul className="space-y-3 text-sm text-ivory/80">
              <li><a href="#archive" className="hover:text-gold transition-colors">The Archive</a></li>
              <li><a href="#values" className="hover:text-gold transition-colors">Cultural Values</a></li>
              <li><a href="#timeline" className="hover:text-gold transition-colors">Historical Timeline</a></li>
              <li><a href="#events" className="hover:text-gold transition-colors">Community Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-5">
              Newsletter
            </h4>
            <p className="text-ivory/60 text-sm mb-4 leading-relaxed italic">
              Quarterly stories from the global Tamil community.
            </p>
            <form className="flex border-b border-ivory/20 pb-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent text-sm w-full outline-none placeholder:text-ivory/30 text-ivory"
              />
              <button type="submit" className="text-gold hover:text-ivory text-xs font-bold">
                →
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.25em] uppercase">
          <p className="text-ivory/40">© 2026 Uyarvu Collective. Crafted with reverence.</p>
          <div className="flex gap-8 text-ivory/60">
            <a href="#" className="hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors">YouTube</a>
            <a href="#" className="hover:text-gold transition-colors">Archive</a>
            <a href="#" className="hover:text-gold transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
