import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Profiles } from "@/components/site/Profiles";
import { Values } from "@/components/site/Values";
import { Timeline } from "@/components/site/Timeline";
import { Events } from "@/components/site/Events";
import { Documentary } from "@/components/site/Documentary";
import { Quotes } from "@/components/site/Quotes";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uyarvu — Celebrating Tamil Heritage, Achievements & Identity" },
      {
        name: "description",
        content:
          "A digital sanctuary celebrating Tamil heritage, people, and culture — stories of artists, scholars, farmers, and leaders who carry our identity forward.",
      },
      { property: "og:title", content: "Uyarvu — Celebrating Tamil Heritage & Identity" },
      {
        property: "og:description",
        content:
          "Stories of Tamil excellence across art, science, soil, and language — a premium archive of the global Tamil community.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <main>
        <Hero />
        <Profiles />
        <Values />
      </main>
    </div>
  );
}
