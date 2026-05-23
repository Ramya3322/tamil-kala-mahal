// src/components/Values.tsx
import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

// Point the worker at the bundled worker file
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

// ── swap this path for your actual PDF asset ──────────────────────────
const PDF_URL = "src/assets/Our Vision.pdf";
// ─────────────────────────────────────────────────────────────────────

function PdfPage({
  pdf,
  pageNumber,
}: {
  pdf: pdfjsLib.PDFDocumentProxy;
  pageNumber: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const page = await pdf.getPage(pageNumber);
      const viewport = page.getViewport({ scale: 1.6 });
      const canvas = canvasRef.current;
      if (!canvas || cancelled) return;
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      await page.render({
        canvasContext: canvas.getContext("2d")!,
        viewport,
      }).promise;
      if (!cancelled) setLoaded(true);
    })();
    return () => { cancelled = true; };
  }, [pdf, pageNumber]);

  return (
    <div className="relative group overflow-hidden rounded-sm border border-gold/20 bg-ivory/5">
      {/* page number badge */}
      <span className="absolute top-2 left-2 z-10 text-[10px] font-bold tracking-[0.2em] uppercase text-gold bg-maroon/80 px-2 py-0.5 rounded-sm">
        {pageNumber}
      </span>

      {/* skeleton while rendering */}
      {!loaded && (
        <div className="aspect-[3/4] animate-pulse bg-ivory/10" />
      )}

      <canvas
        ref={canvasRef}
        className={`w-full h-auto transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0 absolute inset-0"
        }`}
      />
    </div>
  );
}

export function Values() {
  const [pdf, setPdf] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    pdfjsLib
      .getDocument(PDF_URL)
      .promise.then((doc) => {
        setPdf(doc);
        setNumPages(doc.numPages);
      })
      .catch(() => setError("Could not load PDF. Check the file path."));
  }, []);

  return (
    <section
      id="values"
      className="relative bg-maroon text-ivory py-28 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 kolam-pattern opacity-15" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* heading */}
        <div className="text-center mb-16">
          <p className="text-gold text-[28px] font-bold tracking-[0.3em] uppercase mb-4">
            Our Vision
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory text-balance">
            The Vision that defines our team{" "}
            <span className="italic text-gold"></span>
          </h2>
          {numPages > 0 && (
            <p className="text-ivory/50 text-sm mt-4">
              {numPages} pages
            </p>
          )}
        </div>

        {/* error state */}
        {error && (
          <p className="text-center text-gold/70 text-sm">{error}</p>
        )}

        {/* loading state */}
        {!pdf && !error && (
          <p className="text-center text-ivory/50 text-sm animate-pulse">
            Loading document…
          </p>
        )}

        {/* 3-column page grid */}
        {pdf && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: numPages }, (_, i) => (
              <PdfPage key={i + 1} pdf={pdf} pageNumber={i + 1} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}