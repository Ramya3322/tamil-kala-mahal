import { useEffect, useState } from "react";

const quotes = [
  {
    tamil: "யாதும் ஊரே யாவரும் கேளிர்",
    english: "To us, every town is home; every soul our kin.",
    author: "Kaniyan Pungundranar — Purananuru",
  },
  {
    tamil: "கற்க கசடற கற்பவை கற்றபின்",
    english: "Learn flawlessly what is worth learning, and live by what you learn.",
    author: "Thiruvalluvar — Thirukkural",
  },
  {
    tamil: "எண்ணிய எண்ணியாங்கு எய்துப",
    english: "Those who hold to their purpose will reach what they have envisioned.",
    author: "Thiruvalluvar — Thirukkural",
  },
];

export function Quotes() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % quotes.length), 6500);
    return () => clearInterval(t);
  }, []);
  const q = quotes[i];

  return (
    <section className="bg-earth text-ivory py-28 md:py-36 px-6 overflow-hidden relative">
      <div className="absolute inset-0 kolam-pattern opacity-10" />
      <div className="relative max-w-4xl mx-auto">
        <div className="relative p-10 md:p-20 border border-gold/30">
          <span className="absolute -top-px -left-px w-10 h-10 border-t-2 border-l-2 border-gold" />
          <span className="absolute -top-px -right-px w-10 h-10 border-t-2 border-r-2 border-gold" />
          <span className="absolute -bottom-px -left-px w-10 h-10 border-b-2 border-l-2 border-gold" />
          <span className="absolute -bottom-px -right-px w-10 h-10 border-b-2 border-r-2 border-gold" />

          <div className="text-center" key={q.tamil}>
            <p className="text-gold/60 font-bold text-[10px] tracking-[0.4em] uppercase mb-10">
              Voices of the Sangam
            </p>
            <p className="font-serif italic text-3xl md:text-5xl text-ivory leading-tight mb-8 text-balance animate-fade-up">
              {q.tamil}
            </p>
            <p className="text-ivory/70 text-base md:text-lg italic mb-6 max-w-2xl mx-auto text-pretty">
              “{q.english}”
            </p>
            <p className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">
              {q.author}
            </p>

            <div className="mt-12 flex justify-center gap-2">
              {quotes.map((_, j) => (
                <button
                  key={j}
                  onClick={() => setI(j)}
                  aria-label={`Show quote ${j + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    j === i ? "w-10 bg-gold" : "w-1.5 bg-gold/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
