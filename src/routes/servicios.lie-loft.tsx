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
import heroImg from "@/assets/servicios-v2/ll-hero-v2.jpg.asset.json";
import secondaryImg from "@/assets/servicios-v2/ll-secondary-v3.jpg.asset.json";
import detailImg from "@/assets/servicios-v2/ll-detail.jpg";

export const Route = createFileRoute("/servicios/lie-loft")({
  head: () => ({
    meta: [
      { title: "Lie & Loft — Fortux" },
      {
        name: "description",
        content:
          "Ajuste profesional de lie y loft de palos de golf. Precisión, dirección y consistencia en Fortux.",
      },
      { property: "og:title", content: "Lie & Loft — Fortux" },
      {
        property: "og:description",
        content:
          "Ajustamos el lie y loft de tus palos para mejorar dirección, trayectoria y consistencia.",
      },
      { property: "og:url", content: "/servicios/lie-loft" },
      { property: "og:image", content: heroImg.url },
    ],
    links: [{ rel: "canonical", href: "/servicios/lie-loft" }],
  }),
  component: Page,
});

const EFFECTS = [
  { t: "Lie alto", d: "La punta se levanta y la bola tiende a salir hacia la izquierda (diestros)." },
  { t: "Lie bajo", d: "El talón se levanta y la bola se desvía a la derecha." },
  { t: "Loft bajo", d: "Menos altura, más distancia — ideal si tienes un swing rápido." },
  { t: "Loft alto", d: "Más altura y control, facilita el vuelo de la bola." },
];

const WHEN = [
  { t: "Cambio de juego", d: "Has modificado tu postura, swing o equipo recientemente." },
  { t: "Inconsistencia", d: "Las direcciones varían sin razón aparente golpe tras golpe." },
  { t: "Gaps entre hierros", d: "Pierdes metros entre un hierro y el siguiente sin explicación." },
  { t: "Ajuste de set", d: "Has cambiado grip, varilla o swing weight y todo debe revisarse." },
];

const PROCESS = [
  { t: "Análisis", d: "Evaluamos postura, swing e impacto de cada cabeza de palo." },
  { t: "Medición", d: "Determinamos el lie y loft real frente al óptimo para ti." },
  { t: "Ajuste preciso", d: "Trabajo delicado en máquina específica para resultado exacto." },
  { t: "Coherencia", d: "Verificamos gaps y consistencia entre todos los hierros del set." },
];

function Page() {
  return (
    <div className="bg-surface text-primary-foreground">
      <ServiceHero
        title="Lie & Loft"
        description="Ajustamos el ángulo y el loft de tus palos para mejorar dirección, trayectoria y consistencia en cada golpe."
        image={heroImg.url}
        imageAlt="Lie & Loft — Fortux Golf"
        ctaMsg="Hola, necesito ajustar el lie y loft de mis palos."
      />

      <ServiceSection eyebrow="¿Qué afecta?" title="Cómo el lie y el loft cambian tus golpes">
        <ServiceProse>
          <p>
            El <strong>lie</strong> es el ángulo entre la varilla y el suelo en el impacto. El{" "}
            <strong>loft</strong> es el ángulo de la cara del palo y determina la altura y distancia
            de la bola. Detalles que parecen menores marcan una gran diferencia en trayectoria y
            control.
          </p>
        </ServiceProse>
        <ServiceMedia src={secondaryImg.url} alt="Ajuste de lie & loft" caption="Ajuste de ángulo en máquina específica" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {EFFECTS.map((p, i) => (
            <ServiceCard key={p.t} index={String(i + 1).padStart(2, "0")} title={p.t}>
              {p.d}
            </ServiceCard>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection eyebrow="Cuándo revisarlos" title="Señales para ajustar lie y loft" tone="alt">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {WHEN.map((p, i) => (
            <ServiceCard key={p.t} index={String(i + 1).padStart(2, "0")} title={p.t}>
              {p.d}
            </ServiceCard>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection eyebrow="Proceso" title="Ajuste preciso en taller">
        <ServiceMedia src={detailImg} alt="Calibre digital midiendo ángulos" caption="Medición digital de referencia" ratio="3/2" />
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
        title="¿La bola no vuela como debería?"
        subtitle="Una revisión del lie y loft puede cambiar por completo tu confianza en el campo."
        msg="Hola, querría información sobre el ajuste de lie y loft."
      />
    </div>
  );
}
