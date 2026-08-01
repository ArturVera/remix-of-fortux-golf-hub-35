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
import heroImg from "@/assets/servicios-v2/shaft-hero-v2.jpg.asset.json";
import secondaryImg from "@/assets/servicios-v2/shaft-secondary-v2.jpg.asset.json";


export const Route = createFileRoute("/servicios/ajustes-de-varillas")({
  head: () => ({
    meta: [
      { title: "Ajuste de varillas — Fortux" },
      {
        name: "description",
        content:
          "Ajuste y cambio de varillas de palos de golf (driver, hierros y putters). Asesoramiento profesional para grafito y acero en Fortux.",
      },
      { property: "og:title", content: "Ajuste de varillas — Fortux" },
      {
        property: "og:description",
        content:
          "Reparamos, ajustamos y cambiamos las varillas de tus palos para recuperar control y distancia.",
      },
      { property: "og:url", content: "/servicios/ajustes-de-varillas" },
      { property: "og:image", content: heroImg.url },
    ],
    links: [{ rel: "canonical", href: "/servicios/ajustes-de-varillas" }],
  }),
  component: Page,
});

const WHEN = [
  { t: "Pérdida de distancia", d: "La bola no alcanza el carry que tenías hace una temporada." },
  { t: "Control irregular", d: "Aparecen dispersiones que antes no tenías en el mismo palo." },
  { t: "Cambio físico o de swing", d: "Tu velocidad de swing o tu fuerza han cambiado con el tiempo." },
  { t: "Rotura o fisura", d: "La varilla está dañada, doblada o muestra signos de fatiga." },
];

const TIPOS = [
  { t: "Drivers, hierros y putters", d: "Ajustamos y reemplazamos varillas en todos los palos del set." },
  { t: "Grafito o acero", d: "Te asesoramos en la elección según tu experiencia y estilo de juego." },
  { t: "Flex y peso", d: "Revisamos que el flex y peso real se ajusten a tu swing actual." },
  { t: "Senior y stiff", d: "Opciones más ligeras o más exigentes según tu velocidad y físico." },
];

const PROCESS = [
  { t: "Medición", d: "Analizamos varilla, flex, peso, longitud y comportamiento." },
  { t: "Recomendación", d: "Proponemos la varilla ideal o el ajuste mínimo necesario." },
  { t: "Trabajo en taller", d: "Reemplazo o ajuste con maquinaria específica y precisión." },
  { t: "Validación", d: "Probamos resultado y te entregamos el palo listo para jugar." },
];

function Page() {
  return (
    <div className="bg-surface text-primary-foreground">
      <ServiceHero
        title="Ajuste de varillas"
        description="Reparamos, ajustamos y cambiamos las varillas de tus palos para recuperar control, distancia y confianza en cada golpe."
        image={heroImg.url}
        imageAlt="Ajuste de varillas — Fortux Golf"
        ctaMsg="Hola, necesito un ajuste de varillas."
      />

      <ServiceSection eyebrow="¿Cuándo revisarlas?" title="Tu varilla también cambia con el tiempo">
        <ServiceProse>
          <p>
            Con el tiempo, el material pierde propiedades — y muchas veces lo que necesitas ahora no es
            lo mismo que hace unos años. Ajustar o cambiar la varilla es{" "}
            <strong>adaptar el palo a ti</strong>, a tu físico y a tu estilo de juego actual.
          </p>
        </ServiceProse>
        <ServiceMedia src={secondaryImg.url} alt="Varillas premium" caption="Varillas premium — grafito y acero" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {WHEN.map((p, i) => (
            <ServiceCard key={p.t} index={String(i + 1).padStart(2, "0")} title={p.t}>
              {p.d}
            </ServiceCard>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection eyebrow="Qué ajustamos" title="Materiales y opciones" tone="alt">
        <div className="grid gap-4 md:grid-cols-2">
          {TIPOS.map((p, i) => (
            <ServiceCard key={p.t} index={String(i + 1).padStart(2, "0")} title={p.t}>
              {p.d}
            </ServiceCard>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection eyebrow="Proceso" title="Cómo trabajamos">
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
        title="¿Listos para ajustar tus varillas?"
        subtitle="Cuéntanos qué necesitas y te devolvemos los palos listos para el siguiente partido."
        msg="Hola, querría información sobre el ajuste de varillas."
      />
    </div>
  );
}
