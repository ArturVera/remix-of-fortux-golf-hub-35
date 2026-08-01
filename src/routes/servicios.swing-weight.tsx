import { createFileRoute } from "@tanstack/react-router";
import {
  ServiceHero,
  ServiceSection,
  ServiceCard,
  ServiceProse,
  ServiceFinalCTA,
  ServiceBackLink,
  ServiceMedia,
} from "@/components/site/ServiceShell";
import heroImg from "@/assets/servicios-v2/02-mantenimiento.jpg.asset.json";
import secondaryImg from "@/assets/servicios-v2/sw-secondary-v5.jpg.asset.json";
import detailImg from "@/assets/servicios-v2/sw-detail.jpg";



export const Route = createFileRoute("/servicios/swing-weight")({
  head: () => ({
    meta: [
      { title: "Swing Weight — Fortux" },
      {
        name: "description",
        content:
          "Ajuste de swing weight de palos de golf. Equilibrio, consistencia y prevención de lesiones en Fortux.",
      },
      { property: "og:title", content: "Swing Weight — Fortux" },
      {
        property: "og:description",
        content:
          "Modificamos el swing weight de tus palos para mejorar el equilibrio, la consistencia y la sensación.",
      },
      { property: "og:url", content: "/servicios/swing-weight" },
      { property: "og:image", content: heroImg.url },
    ],
    links: [{ rel: "canonical", href: "/servicios/swing-weight" }],
  }),
  component: Page,
});

const FACTORS = [
  { t: "Grip", d: "Un grip más pesado o ligero altera el equilibrio del palo." },
  { t: "Varilla", d: "Cambiar la varilla modifica el peso y la distribución global." },
  { t: "Cabeza", d: "Añadir o quitar peso en la cabeza cambia el swing weight directamente." },
  { t: "Desgaste", d: "Con el uso, los materiales pierden propiedades y alteran el balance." },
];

const PROCESS = [
  { t: "Evaluación", d: "Medimos el swing weight actual de cada palo con instrumentos profesionales." },
  { t: "Asesoramiento", d: "Te recomendamos el swing weight ideal (D2, D3…) según tu físico y juego." },
  { t: "Ajuste", d: "Añadimos o quitamos peso en cabeza, grip o varilla con precisión." },
  { t: "Coherencia", d: "Aseguramos que todo el set tenga el mismo balance para un juego consistente." },
];

function Page() {
  return (
    <div className="bg-surface text-primary-foreground">
      <ServiceHero
        title="Swing Weight"
        description="Modificamos el swing weight de tus palos para mejorar el equilibrio, la consistencia y la sensación en cada golpe."
        image={heroImg.url}
        imageAlt="Swing Weight — Fortux Golf"
        ctaMsg="Hola, necesito ajustar el swing weight de mis palos."
      />

      <ServiceSection eyebrow="¿Qué es?" title="El equilibrio real de cada palo">
        <ServiceProse>
          <p>
            El <strong>swing weight</strong> mide cómo se siente el peso del palo cuando haces el swing.
            No es el peso total en gramos, sino cómo se reparte entre la cabeza y el grip.
          </p>
          <p>
            Un <strong>swing weight D2</strong> es habitual en jugadores que buscan control y potencia
            equilibrados. Si el peso del palo está mal distribuido, puedes perder velocidad,
            consistencia e incluso forzar lesiones.
          </p>
        </ServiceProse>
        <ServiceMedia src={secondaryImg.url} alt="Báscula de swing weight" caption="Medición sobre báscula profesional" />
      </ServiceSection>

      <ServiceSection eyebrow="Qué lo modifica" title="Factores que cambian el swing weight" tone="alt">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {FACTORS.map((p, i) => (
            <ServiceCard key={p.t} index={String(i + 1).padStart(2, "0")} title={p.t}>
              {p.d}
            </ServiceCard>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection eyebrow="Proceso" title="Evaluación y ajuste">
        <ServiceMedia src={detailImg} alt="Ajuste fino de pesos en la cabeza del palo" caption="Pesos de tungsteno — ajuste fino" ratio="3/2" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <ServiceCard key={p.t} index={String(i + 1).padStart(2, "0")} title={p.t}>
              {p.d}
            </ServiceCard>
          ))}
        </div>
        <div className="mt-10">
          <ServiceBackLink />
        </div>
      </ServiceSection>

      <ServiceFinalCTA
        title="¿Sientes que tu swing ya no es el mismo?"
        subtitle="Comprobamos que tus palos están perfectamente ajustados."
        msg="Hola, querría información sobre el ajuste de swing weight."
      />
    </div>
  );
}
