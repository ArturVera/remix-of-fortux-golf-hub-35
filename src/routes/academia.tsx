import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { waLink } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { useParallax } from "@/hooks/useParallax";

export const Route = createFileRoute("/academia")({
  head: () => ({
    meta: [
      { title: "Clases de golf personalizadas — Fortux" },
      {
        name: "description",
        content:
          "Clases individuales y grupales de golf con Marc Fortuny y Gerard Rubio. Tarifas, bonos y formación adaptada a tu nivel.",
      },
      { property: "og:title", content: "Clases de golf personalizadas — Fortux" },
      {
        property: "og:description",
        content: "Aprende golf con instructores apasionados. Tarifas, bonos y experiencia única.",
      },
      { property: "og:url", content: "/academia" },
      {
        property: "og:image",
        content: bonosImg.url,
      },
    ],
    links: [{ rel: "canonical", href: "/academia" }],
  }),
  component: Page,
});

import heroCoaching from "@/assets/academia/hero-coaching.jpg.asset.json";
import bonosImg from "@/assets/academia/bonos-coaching.jpg.asset.json";
import teamImg from "@/assets/gerard-marc-v2.png.asset.json";
import t1 from "@/assets/tarifas-v2/tarifa-1.jpg.asset.json";
import t2 from "@/assets/tarifas-v2/tarifa-2.jpg.asset.json";
import t3 from "@/assets/tarifas-v2/tarifa-3.jpg.asset.json";
import t4 from "@/assets/tarifas-v2/tarifa-4.jpg.asset.json";
import t5 from "@/assets/tarifas-v2/tarifa-5.jpg.asset.json";
import t6 from "@/assets/tarifas-v2/tarifa-6.jpg.asset.json";
import a01 from "@/assets/alumnos/academia-fotos-01.jpg.asset.json";
import a02 from "@/assets/alumnos/academia-fotos-02.jpg.asset.json";
import a03 from "@/assets/alumnos/academia-fotos-03.jpg.asset.json";
import a04 from "@/assets/alumnos/academia-fotos-04.jpg.asset.json";
import a05 from "@/assets/alumnos/academia-fotos-05.jpg.asset.json";
import a06 from "@/assets/alumnos/academia-fotos-06.jpg.asset.json";
import a07 from "@/assets/alumnos/academia-fotos-07.jpg.asset.json";
import a08 from "@/assets/alumnos/academia-fotos-08.jpg.asset.json";
import a09 from "@/assets/alumnos/academia-fotos-09.jpg.asset.json";
import a10 from "@/assets/alumnos/academia-fotos-10.jpg.asset.json";
import cBdalona from "@/assets/campos/bdalona.png.asset.json";
import cCanCuyas from "@/assets/campos/can-cuyas.png.asset.json";
import cCanRafel from "@/assets/campos/can-rafel.png.asset.json";
import cStCebria from "@/assets/campos/st-cebria.png.asset.json";
import cDaro from "@/assets/campos/daro.png.asset.json";
import cFranciac from "@/assets/campos/franciac.png.asset.json";
import cLaRoca from "@/assets/campos/la-roca.png.asset.json";
import cPar3 from "@/assets/campos/par-3.png.asset.json";
import cLaGarriga from "@/assets/campos/la-garriga.png.asset.json";
import cLloret from "@/assets/campos/lloret.png.asset.json";
import cCanMascaro from "@/assets/campos/can-mascaro.png.asset.json";
import cMora from "@/assets/campos/mora.png.asset.json";
import cPals from "@/assets/campos/pals.png.asset.json";
import cRoc3 from "@/assets/campos/roc-3.png.asset.json";
import cTeia from "@/assets/campos/teia.png.asset.json";
import cGolfSquare from "@/assets/campos/golfsquare.png.asset.json";
import cUrgell from "@/assets/campos/urgell.png.asset.json";
import cBonarea from "@/assets/campos/bonarea.png.asset.json";
import cSantCugat from "@/assets/campos/sant-cugat.png.asset.json";
import cMontseny from "@/assets/campos/montseny.png.asset.json";

const TARIFFS = [
  { name: "Tarifa Personal", detail: "1 Persona / 60 Min.", price: "45€", img: t1.url },
  { name: "Tarifa Personal II", detail: "1 Persona / 30 Min.", price: "28€", img: t2.url },
  { name: "Tarifa Dobles", detail: "2 Personas / 60 Min.", price: "60€", img: t3.url },
  { name: "Tarifa Multi", detail: "A partir de 3 Personas / 60 Min.", price: "75€", img: t4.url },
  { name: "Bono 10 clases", detail: "Individual", price: "380€", img: t5.url, highlight: true },
  { name: "Group / Team Building", detail: "Clases para grupos / empresas", price: "Presupuesto a medida", img: t6.url },
];

const STUDENTS = [a01.url, a02.url, a03.url, a04.url, a05.url, a06.url, a07.url, a08.url, a09.url, a10.url];

const COURSES = [
  { name: "Badalona", url: cBdalona.url },
  { name: "Can Cuyàs", url: cCanCuyas.url },
  { name: "Can Rafel", url: cCanRafel.url },
  { name: "Sant Cebrià", url: cStCebria.url },
  { name: "Daró", url: cDaro.url },
  { name: "Franciac", url: cFranciac.url },
  { name: "La Roca", url: cLaRoca.url },
  { name: "Par 3", url: cPar3.url },
  { name: "La Garriga", url: cLaGarriga.url },
  { name: "Lloret", url: cLloret.url },
  { name: "Can Mascaró", url: cCanMascaro.url },
  { name: "Mora", url: cMora.url },
  { name: "Pals", url: cPals.url },
  { name: "Roc 3", url: cRoc3.url },
  { name: "Teià", url: cTeia.url },
  { name: "Golf Square", url: cGolfSquare.url },
  { name: "Urgell", url: cUrgell.url },
  { name: "BonÀrea", url: cBonarea.url },
  { name: "Sant Cugat", url: cSantCugat.url },
  { name: "Montseny", url: cMontseny.url },
];

function Page() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", accept: false });
  const [sending, setSending] = useState(false);
  const heroParallaxRef = useParallax<HTMLDivElement>(28);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.accept) {
      toast.error("Debes aceptar la Política de Privacidad");
      return;
    }
    setSending(true);
    const msg = `Hola, soy ${form.name} (${form.email} · ${form.phone}).%0A%0A${form.message}`;
    window.open(waLink(decodeURIComponent(msg)), "_blank");
    setTimeout(() => {
      toast.success("Consulta preparada", { description: "Te hemos abierto WhatsApp para enviarla." });
      setForm({ name: "", email: "", phone: "", message: "", accept: false });
      setSending(false);
    }, 400);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-surface border-b border-white/[0.06]">
        <div
          ref={heroParallaxRef}
          aria-hidden
          className="pointer-events-none absolute right-0 w-[62%]"
          style={{
            top: -40,
            bottom: -40,
            backgroundImage: `url(${heroCoaching.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center right",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0))",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0))",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(185,217,134,0.07), transparent 70%)" }}
        />
        <div className="container-fortux relative py-16 md:py-20">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#B9D986]">
              <span className="h-px w-6 bg-[#B9D986]" /> Academia Fortux
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-[56px] leading-[1.02] font-semibold tracking-tight text-[#F4F5F0]">
              Clases de golf personalizadas
            </h1>
            <p className="mt-5 max-w-xl text-[15px] md:text-base leading-relaxed text-white/64">
              Aprende de la mano de <span className="text-[#F4F5F0]">Marc Fortuny</span> y{" "}
              <span className="text-[#F4F5F0]">Gerard Rubio</span> con clases individuales adaptadas a tu nivel, tus
              objetivos y tu manera de jugar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-[#B9D986] text-surface-raised hover:bg-[#cbe69b]">
                <a href="#contacto">Reservar clase</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-[#F4F5F0] hover:bg-white/[0.04] hover:text-[#F4F5F0]"
              >
                <a href="#tarifas">Ver tarifas</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BONOS */}
      <section className="bg-surface py-20 md:py-24 border-b border-white/[0.06]">
        <div className="container-fortux grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className="relative overflow-hidden rounded-[14px] border border-white/[0.08]">
            <img
              src={bonosImg.url}
              alt="Sesión de coaching personalizado Fortux"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
              style={{ filter: "saturate(0.9) contrast(1.05)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(5,6,6,0) 55%, rgba(5,6,6,0.55) 100%)" }}
            />
          </Reveal>
          <Reveal delay={100}>
            <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#B9D986]">
              <span className="h-px w-6 bg-[#B9D986]" /> Bonos exclusivos
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-[40px] leading-[1.05] font-semibold tracking-tight text-[#F4F5F0]">
              Reserva tu bono y avanza con continuidad
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/64">
              Una experiencia de aprendizaje pensada para progresar de forma sostenida. Cada sesión se diseña a partir
              de tu juego, tu ritmo y los objetivos que quieres alcanzar dentro y fuera del campo.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-white/64">
              Trabajamos técnica, estrategia y mentalidad con un enfoque continuo, para que cada bono sea un paso real
              hacia un golf más sólido, preciso y disfrutable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-[#B9D986] text-surface-raised hover:bg-[#cbe69b]">
                <a href="#tarifas">Ver bonos</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-white/20 text-[#F4F5F0] hover:bg-white/[0.04] hover:text-[#F4F5F0]"
              >
                <a href="#contacto">Contáctanos</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TARIFAS */}
      <section id="tarifas" className="bg-surface py-24 md:py-32 border-b border-white/[0.06]">
        <div className="container-fortux">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#B9D986]">
              <span className="h-px w-6 bg-[#B9D986]" /> Tarifas <span className="h-px w-6 bg-[#B9D986]" />
            </span>
            <h2 className="mt-5 font-display text-3xl md:text-[44px] leading-[1.05] font-semibold tracking-tight text-[#F4F5F0]">
              Tarifas y pack de clases
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/64">
              Se incluyen bolas de prácticas y material. Mismo precio entre semana o en fin de semana.
            </p>
          </Reveal>

          <div className="mt-16 md:mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TARIFFS.map((t, i) => (
              <Reveal
                as="article"
                key={t.name}
                delay={Math.min(i, 5) * 70}
                className={`group relative flex flex-col overflow-hidden rounded-[12px] border bg-surface-card transition-all duration-500 hover:-translate-y-0.5 ${
                  t.highlight
                    ? "border-[#B9D986]/45 hover:border-[#B9D986]/70"
                    : "border-white/[0.08] hover:border-[#B9D986]/40"
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.04] group-hover:brightness-110"
                    style={{ filter: "saturate(0.88) contrast(1.06) brightness(0.88)" }}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(11,13,14,0.15) 0%, rgba(11,13,14,0) 40%, rgba(11,13,14,0.92) 100%)",
                    }}
                  />
                  {t.highlight && (
                    <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full bg-[#B9D986]/95 px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.2em] text-surface-raised">
                      <span className="h-1 w-1 rounded-full bg-surface-raised" /> Más elegido
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="font-display text-[18px] font-semibold tracking-tight text-[#F4F5F0]">{t.name}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">{t.detail}</p>
                  <div className="my-6 h-px w-full bg-white/[0.07]" />
                  <div className="mt-auto flex items-end justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">Desde</span>
                      <span className="mt-1 font-display text-[28px] font-semibold leading-none tracking-tight text-[#B9D986]">
                        {t.price}
                      </span>
                    </div>
                    <a
                      href="#contacto"
                      className="group/cta inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[#F4F5F0] transition-colors hover:text-[#B9D986]"
                    >
                      Reservar
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO DIRECTO */}
      <section className="bg-surface py-20 md:py-24 border-b border-white/[0.06]">
        <div className="container-fortux grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16">
          <Reveal className="relative overflow-hidden bg-surface">
            <img
              src={teamImg.url}
              alt="Marc Fortuny y Gerard Rubio — instructores Fortux"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
              style={{ filter: "saturate(0.92) contrast(1.05)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ boxShadow: "inset 0 0 70px 45px rgba(5,6,6,0.72)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(5,6,6,0.28) 0%, transparent 12%, transparent 82%, rgba(5,6,6,0.55) 100%), linear-gradient(90deg, rgba(5,6,6,0.32) 0%, transparent 10%, transparent 90%, rgba(5,6,6,0.32) 100%)",
              }}
            />
          </Reveal>
          <Reveal delay={100}>
            <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#B9D986]">
              <span className="h-px w-6 bg-[#B9D986]" /> Contacto directo
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-[38px] leading-[1.05] font-semibold tracking-tight text-[#F4F5F0]">
              Si prefieres, habla directamente con nosotros
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/64">
              La forma más rápida de resolver dudas y reservar tu primera clase.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { name: "Gerard Rubio", phone: "689 731 369" },
                { name: "Marc Fortuny", phone: "635 112 656" },
              ].map((p) => (
                <a
                  key={p.name}
                  href={`tel:+34${p.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-4 rounded-[10px] border border-white/[0.08] bg-surface-card p-5 transition-colors duration-300 hover:border-white/[0.2] hover:bg-[#0F1112]"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#B9D986]/30 bg-[#B9D986]/[0.08] text-[#B9D986]">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11.5px] uppercase tracking-[0.16em] text-white/55">{p.name}</span>
                    <span className="mt-1 block font-display text-[17px] font-semibold tracking-tight text-[#F4F5F0]">
                      {p.phone}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FORM */}
      <section id="contacto" className="bg-surface py-20 md:py-24 border-b border-white/[0.06]">
        <Reveal className="container-fortux max-w-3xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#B9D986]">
              <span className="h-px w-6 bg-[#B9D986]" /> Contacto
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-[40px] leading-[1.05] font-semibold tracking-tight text-[#F4F5F0]">
              Lleva tu juego al siguiente nivel
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/64">
              Cuéntanos cómo es tu juego y qué quieres mejorar. Te respondemos con una propuesta personalizada.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-5 rounded-[14px] border border-white/[0.08] bg-surface-raised p-6 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <Label htmlFor="name" className="text-white/64">
                  Nombre *
                </Label>
                <Input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 border-white/10 bg-surface-card text-[#F4F5F0] placeholder:text-white/30"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white/64">
                  E-mail *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 border-white/10 bg-surface-card text-[#F4F5F0] placeholder:text-white/30"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="phone" className="text-white/64">
                Teléfono *
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-2 border-white/10 bg-surface-card text-[#F4F5F0] placeholder:text-white/30"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-white/64">
                Consulta *
              </Label>
              <Textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 border-white/10 bg-surface-card text-[#F4F5F0] placeholder:text-white/30"
              />
            </div>
            <div className="flex items-start gap-3">
              <Checkbox
                id="accept"
                checked={form.accept}
                onCheckedChange={(c) => setForm({ ...form, accept: Boolean(c) })}
                className="mt-1 border-white/30"
              />
              <Label htmlFor="accept" className="text-[13px] font-normal leading-relaxed text-white/55">
                Acepto la{" "}
                <a
                  href="https://fortuxgolf.com/politica-de-privacidad/"
                  target="_blank"
                  rel="noopener"
                  className="text-[#B9D986] underline-offset-2 hover:underline"
                >
                  Política de Privacidad
                </a>
              </Label>
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={sending}
              className="w-full bg-[#B9D986] text-surface-raised hover:bg-[#cbe69b]"
            >
              {sending ? "Enviando…" : "ENVIAR CONSULTA"}
            </Button>
          </form>
        </Reveal>
      </section>

      {/* ALUMNOS */}
      <section className="bg-surface py-20 md:py-24 border-b border-white/[0.06]">
        <div className="container-fortux">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#B9D986]">
              <span className="h-px w-6 bg-[#B9D986]" /> Comunidad
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-[38px] leading-[1.05] font-semibold tracking-tight text-[#F4F5F0]">
              Algunos de nuestros alumnos y alumnas
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/64">
              Clases reales, progresos reales y una manera cercana de aprender golf.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {STUDENTS.map((src, i) => (
              <div
                key={src}
                className={`group overflow-hidden rounded-[10px] border border-white/[0.08] bg-surface-card transition-colors duration-300 hover:border-white/[0.18] ${
                  i === 9 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <img
                  src={src}
                  alt={`Alumno Fortux ${i + 1}`}
                  loading="lazy"
                  className="aspect-square h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ filter: "saturate(0.85) contrast(1.05) brightness(0.95)" }}
                />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CAMPOS */}
      <section className="bg-surface py-20 md:py-24 border-b border-white/[0.06]">
        <div className="container-fortux">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#B9D986]">
              <span className="h-px w-6 bg-[#B9D986]" /> Red de campos
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-[38px] leading-[1.05] font-semibold tracking-tight text-[#F4F5F0]">
              Campos colaboradores
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/64">
              Damos clase en una red de campos seleccionados en toda Cataluña.
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {COURSES.map((c) => (
              <div
                key={c.name}
                className="flex aspect-square items-center justify-center rounded-[10px] border border-white/[0.06] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/[0.16] hover:bg-white/[0.04]"
              >
                <img
                  src={c.url}
                  alt={`Campo de golf ${c.name}`}
                  loading="lazy"
                  className="max-h-[60%] max-w-[80%] object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
                  style={{ filter: "grayscale(1) brightness(1.6) contrast(0.95)" }}
                />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-fortux max-w-4xl">
          <Reveal className="rounded-[14px] border border-white/[0.10] bg-surface-raised p-10 md:p-14 text-center">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#B9D986]">
              <span className="h-px w-6 bg-[#B9D986]" /> Empieza hoy
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-[40px] leading-[1.05] font-semibold tracking-tight text-[#F4F5F0]">
              ¿Listo para empezar?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/64">
              Reserva tu primera clase y descubre por qué nuestros alumnos confían en Fortux Golf.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-[#B9D986] text-surface-raised hover:bg-[#cbe69b]">
                <a href="#contacto">Reservar ahora</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-[#F4F5F0] hover:bg-white/[0.04] hover:text-[#F4F5F0]"
              >
                <a href={waLink("Hola, querría información sobre las clases de golf.")} target="_blank" rel="noopener">
                  WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
