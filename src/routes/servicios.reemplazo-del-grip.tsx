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
import heroImg from "@/assets/servicios-v2/03-grips.jpg.asset.json";
import secondaryImg from "@/assets/servicios-v2/grip-secondary.jpg";
import detailImg from "@/assets/servicios-v2/grip-detail.jpg";

export const Route = createFileRoute("/servicios/reemplazo-del-grip")({
  head: () => ({
    meta: [
      { title: "Reemplazo del grip — Fortux" },
      {
        name: "description",
        content:
          "Servicio profesional de reemplazo de grips de palos de golf. Recupera control, sensación y comodidad en cada swing.",
      },
      { property: "og:title", content: "Reemplazo del grip — Fortux" },
      {
        property: "og:description",
        content: "Cambia el grip de tus palos con Fortux: rápido, profesional y adaptado a tu juego.",
      },
      { property: "og:url", content: "/servicios/reemplazo-del-grip" },
      { property: "og:image", content: heroImg.url },
    ],
    links: [{ rel: "canonical", href: "/servicios/reemplazo-del-grip" }],
  }),
  component: Page,
});

const SIGNS = [
  { t: "El palo resbala", d: "Sientes que el palo se te escapa incluso jugando con guantes." },
  { t: "Material desgastado", d: "El grip está liso, endurecido o presenta grietas visibles." },
  { t: "Pierdes control", d: "No tienes la misma sensación en los golpes cortos y de precisión." },
  { t: "Molestias en las manos", d: "Aparecen tensiones o dolor en manos y muñecas tras jugar." },
  { t: "Putter sin tacto", d: "El grip del putter está apelmazado y has perdido feedback." },
  { t: "Cambio de juego", d: "Tu mano, presión o estilo ha cambiado y el grip ya no acompaña." },
];

const PROCESS = [
  { t: "Diagnóstico", d: "Revisamos el estado de cada grip, su material y desgaste real." },
  { t: "Asesoramiento", d: "Te recomendamos el grip que mejor se adapta a tu mano y presión." },
  { t: "Instalación", d: "Reemplazo profesional con materiales premium y acabado preciso." },
  { t: "Entrega", d: "Te devolvemos los palos listos, con servicio a domicilio si lo prefieres." },
];

function Page() {
  return (
    <div className="bg-surface text-primary-foreground">
      <ServiceHero
        title="Reemplazo del grip"
        description="Recupera el control, la sensación y la comodidad de tus palos con un reemplazo de grips profesional, rápido y adaptado a tu juego."
        image={heroImg.url}
        imageAlt="Reemplazo del grip — Fortux Golf"
        ctaMsg="Hola, necesito un reemplazo de grips."
      />

      <ServiceSection eyebrow="¿Por qué cambiarlo?" title="El grip de tus palos también se desgasta">
        <ServiceProse>
          <p>
            Humedad, sudor, polvo del campo… con el tiempo el grip pierde adherencia y sensación. Si el
            palo se te resbala o pierdes control en el golpeo, ha llegado el momento de cambiarlo.
          </p>
          <p>
            En <strong>Fortux</strong> te ofrecemos un servicio de reemplazo de grips profesional,
            rápido y adaptado a tu juego. Un grip desgastado obliga a tus manos a hacer más fuerza de la
            cuenta, perjudicando tu swing, precisión y comodidad — e incluso provocando lesiones.
          </p>
        </ServiceProse>
        <ServiceMedia src={secondaryImg} alt="Selección de grips premium" caption="Selección de grips premium — taller Fortux" />
      </ServiceSection>

      <ServiceSection eyebrow="Señales claras" title="¿Cuándo cambiar el grip?" tone="alt">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SIGNS.map((s, i) => (
            <ServiceCard key={s.t} index={String(i + 1).padStart(2, "0")} title={s.t}>
              {s.d}
            </ServiceCard>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection eyebrow="Proceso" title="Cómo trabajamos cada reemplazo">
        <ServiceMedia src={detailImg} alt="Instalación profesional de grip" caption="Instalación precisa — paso a paso" ratio="3/2" />
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
        title="Si notas que es el momento, contáctanos"
        subtitle="Te dejamos los palos listos para el siguiente partido."
        msg="Hola, querría información sobre el reemplazo de grips."
      />
    </div>
  );
}
