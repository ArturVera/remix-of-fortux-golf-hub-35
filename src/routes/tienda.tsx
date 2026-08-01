import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { MessageCircle, Phone, X, ZoomIn, ArrowRight } from "lucide-react";
import { waLink, SITE } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { useParallax } from "@/hooks/useParallax";
import gripTextureDark from "@/assets/grips/grip-texture-dark.jpg";
import gripHeroMacro from "@/assets/grips/grip-hero-macro.jpg";

import g_Grips01GolfPrideCp2ProRedBlackJumbo from "@/assets/grips/grips-01-golf-pride-cp2-pro-red-black-jumbo.jpg.asset.json";
import g_Grips01GolfPrideCp2ProWrapStandardRed from "@/assets/grips/grips-01-golf-pride-cp2-pro-wrap-standard-red.jpg.asset.json";
import g_Grips01GolfPrideCp2WrapLadieBlack from "@/assets/grips/grips-01-golf-pride-cp2-wrap-ladie-black.jpg.asset.json";
import g_Grips01GolfPrideCpxStand from "@/assets/grips/grips-01-golf-pride-cpx-stand.jpg.asset.json";
import g_Grips01GolfPrideMcMultiCompoundRedWhiteMidsize from "@/assets/grips/grips-01-golf-pride-mc-multi-compound-red-white-midsize.jpg.asset.json";
import g_Grips01GolfPrideNewDecadeMultiCompoundAlignWhiteLineaRojaStand from "@/assets/grips/grips-01-golf-pride-new-decade-multi-compound-align-white-linea-roja-stand.jpg.asset.json";
import g_Grips01GolfPrideNewDecadeMultiCompoundMidsizeAlignWhiteLineaR from "@/assets/grips/grips-01-golf-pride-new-decade-multi-compound-midsize-align-white-linea-r.jpg.asset.json";
import g_Grips01GolfPrideNewDecadeMultiCompoundPlus4GreyJumbo from "@/assets/grips/grips-01-golf-pride-new-decade-multi-compound-plus-4-grey-jumbo.jpg.asset.json";
import g_Grips01GolfPrideNewDecadeMultiCompoundPlus4OrangeStandard from "@/assets/grips/grips-01-golf-pride-new-decade-multi-compound-plus-4-orange-standard.jpg.asset.json";
import g_Grips01GolfPrideNewDecadeMultiCompoundPlus4RedStandard from "@/assets/grips/grips-01-golf-pride-new-decade-multi-compound-plus-4-red-standard.jpg.asset.json";
import g_Grips01GolfPrideNewDecadeMultiCompoundPlusAlignStandYMidsizeGrey from "@/assets/grips/grips-01-golf-pride-new-decade-multi-compound-plus-align-stand-y-midsize-grey.jpg.asset.json";
import g_Grips01GolfPridePlus4BlueBlackStand from "@/assets/grips/grips-01-golf-pride-plus-4-blue-black-stand.jpg.asset.json";
import g_Grips01GolfPridePlus4MidsizeBlue from "@/assets/grips/grips-01-golf-pride-plus-4-midsize-blue.jpg.asset.json";
import g_Grips01GolfPrideTourVelvetJuniorStandMidsizeJumbo from "@/assets/grips/grips-01-golf-pride-tour-velvet-junior-stand-midsize-jumbo.jpg.asset.json";
import g_Grips01GolfPrideZGripAlignStand from "@/assets/grips/grips-01-golf-pride-z-grip-align-stand.jpg.asset.json";
import g_Grips01GolfPrideZGripStandYMidsize from "@/assets/grips/grips-01-golf-pride-z-grip-stand-y-midsize.jpg.asset.json";
import g_Grips01LamkinCrossline360StandCord from "@/assets/grips/grips-01-lamkin-crossline-360-stand-cord.jpg.asset.json";
import g_Grips01LamkinCrossline360StandardWhiteBlack from "@/assets/grips/grips-01-lamkin-crossline-360-standard-white-black.jpg.asset.json";
import g_Grips01LamkinOversizeJumbo from "@/assets/grips/grips-01-lamkin-oversize-jumbo.jpg.asset.json";
import g_Grips01SuperstrokeCrossComfortStandBlack from "@/assets/grips/grips-01-superstroke-cross-comfort-stand-black.jpg.asset.json";
import g_Grips024LessWinn2020VsnJumboLitePutterGrip1 from "@/assets/grips/grips-02-4-less-winn-2020-vsn-jumbo-lite-putter-grip-1.jpg.asset.json";
import g_Grips02GolfPrideProOnly from "@/assets/grips/grips-02-golf-pride-pro-only.jpg.asset.json";
import g_Grips02SuperStroke10Pt from "@/assets/grips/grips-02-super-stroke-10-pt.jpg.asset.json";
import g_Grips02SuperStrokeTraxionClaw10 from "@/assets/grips/grips-02-super-stroke-traxion-claw-10.jpg.asset.json";
import g_Grips02SuperStrokeTraxionClaw20 from "@/assets/grips/grips-02-super-stroke-traxion-claw-20.jpg.asset.json";
import g_Grips02SuperStrokeTraxionFlatso10BlackWhite from "@/assets/grips/grips-02-super-stroke-traxion-flatso-10-black-white.jpg.asset.json";
import g_Grips02SuperStrokeTraxionFlatso20E1731351413180 from "@/assets/grips/grips-02-super-stroke-traxion-flatso-20-e1731351413180.jpg.asset.json";
import g_Grips02SuperStrokeTraxionFlatso20Xl20 from "@/assets/grips/grips-02-super-stroke-traxion-flatso-20-xl-20.jpg.asset.json";
import g_Grips02SuperStrokeTraxionFlatso30 from "@/assets/grips/grips-02-super-stroke-traxion-flatso-30.jpg.asset.json";
import g_Grips02SuperStrokeTraxionPistolGt10 from "@/assets/grips/grips-02-super-stroke-traxion-pistol-gt-10.jpg.asset.json";
import g_Grips02SuperStrokeTraxionSs2rSquareRed from "@/assets/grips/grips-02-super-stroke-traxion-ss2r-square-red.jpg.asset.json";
import g_Grips02SuperStrokeTraxionTour10 from "@/assets/grips/grips-02-super-stroke-traxion-tour-10.jpg.asset.json";
import g_Grips02SuperStrokeTraxionTour20 from "@/assets/grips/grips-02-super-stroke-traxion-tour-20.jpg.asset.json";
import g_Grips02SuperStrokeTraxionTour30 from "@/assets/grips/grips-02-super-stroke-traxion-tour-30.jpg.asset.json";
import g_Grips02SuperStrokeTraxionWristlockBlackGreenOrange from "@/assets/grips/grips-02-super-stroke-traxion-wristlock-black-green-orange.jpg.asset.json";
import g_Grips02SuperstrokesTraxionTour50 from "@/assets/grips/grips-02-superstrokes-traxion-tour-50.jpg.asset.json";
import g_Grips02WinnDritacJumboLite from "@/assets/grips/grips-02-winn-dritac-jumbo-lite.jpg.asset.json";
import g_Grips02WinnExcelVisionMedallistRedBlackBlackBlue1 from "@/assets/grips/grips-02-winn-excel-vision-medallist-red-black-black-blue-1.jpg.asset.json";
import g_Grips02WinnNtpBlackBlue from "@/assets/grips/grips-02-winn-ntp-black-blue.jpg.asset.json";
import g_Grips02WinnProJumboGripCool160GreyYBlack from "@/assets/grips/grips-02-winn-pro-jumbo-grip-cool-160-grey-y-black.jpg.asset.json";
import g_Grips02WinnProStandarPutterGrip116118120132 from "@/assets/grips/grips-02-winn-pro-standar-putter-grip-116-118-120-132.jpg.asset.json";
import g_Grips02WinnTourPistolVsnBlackBlackRed from "@/assets/grips/grips-02-winn-tour-pistol-vsn-black-black-red.jpg.asset.json";
import g_Grips02WinnWrapLongBlack from "@/assets/grips/grips-02-winn-wrap-long-black.jpg.asset.json";
import g_Grips02WinnWrapLongRedBlack from "@/assets/grips/grips-02-winn-wrap-long-red-black.jpg.asset.json";
import g_LamkinUtxGreenCordStandard from "@/assets/grips/lamkin-utx-green-cord-standard.jpg.asset.json";
import g_TourWrap2gRojoAzul from "@/assets/grips/tour-wrap-2g-rojo-azul.jpg.asset.json";
import m_Garsen from "@/assets/marcas/garsen.jpg.asset.json";
import m_GolfPride from "@/assets/marcas/golf-pride.jpg.asset.json";
import m_Lamkin from "@/assets/marcas/lamkin.jpg.asset.json";
import m_Odissey from "@/assets/marcas/odissey.jpg.asset.json";
import m_P2 from "@/assets/marcas/p2.jpg.asset.json";
import m_WinGrips from "@/assets/marcas/win-grips.jpg.asset.json";
import m_SuperStroke from "@/assets/marcas/super-stroke.jpg.asset.json";

const IRONS = [
  { name: "Lamkin Crossline 360 Standard White Black", price: "16.00€", img: g_Grips01LamkinCrossline360StandardWhiteBlack.url },
  { name: "Golf Pride Cp2 Wrap Ladie Black", price: "16.00€", img: g_Grips01GolfPrideCp2WrapLadieBlack.url },
  { name: "Winn Wrap Long Black", price: "16.00€", img: g_Grips02WinnWrapLongBlack.url },
  { name: "Golf Pride Tour Velvet Junior Stand Midsize Jumbo", price: "17.00€", img: g_Grips01GolfPrideTourVelvetJuniorStandMidsizeJumbo.url },
  { name: "Golf Pride Tour Velvet Stand y Midsize Align", price: "13.00 – 19.00€", img: g_Grips01GolfPrideTourVelvetJuniorStandMidsizeJumbo.url },
  { name: "Lamkin Oversize Jumbo", price: "19.00€", img: g_Grips01LamkinOversizeJumbo.url },
  { name: "Golf Pride Cp2 Pro Wrap Standard Red", price: "19.00€", img: g_Grips01GolfPrideCp2ProWrapStandardRed.url },
  { name: "Super Stroke Cross Comfort Stand Black", price: "18.00€", img: g_Grips01SuperstrokeCrossComfortStandBlack.url },
  { name: "Tour Wrap 2G disponibles en rojo y azul", price: "18.00€", img: g_TourWrap2gRojoAzul.url },
  { name: "Golf Pride Mcc Teams Light Blue White", price: "21.00€", img: g_Grips01GolfPridePlus4MidsizeBlue.url },
  { name: "Golf Pride Mc Multi Compound Stand Red White Midsize", price: "21.00€", img: g_Grips01GolfPrideMcMultiCompoundRedWhiteMidsize.url },
  { name: "Lamkin Crossline 360 Stand Cord", price: "20.00€", img: g_Grips01LamkinCrossline360StandCord.url },
  { name: "Golf pride Cpx stand", price: "20.00€", img: g_Grips01GolfPrideCpxStand.url },
  { name: "Golf Pride New Decade Multi Compound Plus 4 Orange Standard", price: "21.00€", img: g_Grips01GolfPrideNewDecadeMultiCompoundPlus4OrangeStandard.url },
  { name: "Golf Pride New Decade Multi Compound Plus 4 Red Stand", price: "21.00€", img: g_Grips01GolfPrideNewDecadeMultiCompoundPlus4RedStandard.url },
  { name: "Golf Pride Plus 4 Blue Black Stand", price: "21.00€", img: g_Grips01GolfPridePlus4BlueBlackStand.url },
  { name: "Lamkin UTx green cord standard", price: "20.00€", img: g_LamkinUtxGreenCordStandard.url },
  { name: "Golf Pride New Decade Multi Compound Align White – Línea Roja Stand", price: "21.00€", img: g_Grips01GolfPrideNewDecadeMultiCompoundAlignWhiteLineaRojaStand.url },
  { name: "Golf Pride Cp2 Pro Red Black Jumbo", price: "22.00€", img: g_Grips01GolfPrideCp2ProRedBlackJumbo.url },
  { name: "Golf Pride New Decade Multi Compound Plus 4 Grey Jumbo", price: "22.00€", img: g_Grips01GolfPrideNewDecadeMultiCompoundPlus4GreyJumbo.url },
  { name: "Golf Pride Plus Midsize Blue", price: "21.00€", img: g_Grips01GolfPridePlus4MidsizeBlue.url },
  { name: "Golf Pride Z Grip Stand y Midsize", price: "22.00€", img: g_Grips01GolfPrideZGripStandYMidsize.url },
  { name: "Golf Pride Z Grip Align Stand", price: "22.00€", img: g_Grips01GolfPrideZGripAlignStand.url },
  { name: "Golf Pride New Decade Multi Compound Plus 4 Align Stand y Midsize Grey", price: "22.00€", img: g_Grips01GolfPrideNewDecadeMultiCompoundPlusAlignStandYMidsizeGrey.url },
  { name: "Golf Pride New Decade Multi Compound Midsize Align White Linea R", price: "22.00€", img: g_Grips01GolfPrideNewDecadeMultiCompoundMidsizeAlignWhiteLineaR.url },
];

const PUTTERS = [
  { name: "Winn Tour Pistol Vsn Black / Black Red", price: "32.00€", img: g_Grips02WinnTourPistolVsnBlackBlackRed.url },
  { name: "Winn Excel Vision Medallist Red Black Blue", price: "32.00€", img: g_Grips02WinnExcelVisionMedallistRedBlackBlackBlue1.url },
  { name: "Winn Dritac Pistol Dark Grey Mid Size", price: "35.00€", img: g_Grips02WinnDritacJumboLite.url },
  { name: "Golf Pride Pro Only", price: "32.00€", img: g_Grips02GolfPrideProOnly.url },
  { name: "Winn Dritac Jumbo Lite", price: "38.00€", img: g_Grips02WinnDritacJumboLite.url },
  { name: "Winn Ntp Black y Blue", price: "38.00€", img: g_Grips02WinnNtpBlackBlue.url },
  { name: "Super Stroke Traxion Tour 1.0", price: "38.00€", img: g_Grips02SuperStrokeTraxionTour10.url },
  { name: "Winn Wrap Long Red Black", price: "50.00€", img: g_Grips02WinnWrapLongRedBlack.url },
  { name: "Winn Pro Standars Putter Grip (1.16-1.18-1.20-1.32)", price: "38.00€", img: g_Grips02WinnProStandarPutterGrip116118120132.url },
  { name: "Super Stroke Traxion Flatso 1.0 Black White", price: "38.00€", img: g_Grips02SuperStrokeTraxionFlatso10BlackWhite.url },
  { name: "Super Stroke Traxion Claw 1.0", price: "38.00€", img: g_Grips02SuperStrokeTraxionClaw10.url },
  { name: "Super Stroke 1.0 PT", price: "35.00€", img: g_Grips02SuperStroke10Pt.url },
  { name: "4 Less Winn 2020 VSN Jumbo Lite Putter Grip (Todos los colores)", price: "38.00€", img: g_Grips024LessWinn2020VsnJumboLitePutterGrip1.url },
  { name: "Super Stroke Traxion Flatso 2.0", price: "40.00€", img: g_Grips02SuperStrokeTraxionFlatso20E1731351413180.url },
  { name: "Super Stroke Traxion Pistol GT 1.0", price: "38.00€", img: g_Grips02SuperStrokeTraxionPistolGt10.url },
  { name: "Super Stroke Traxion Claw 2.0", price: "38.00€", img: g_Grips02SuperStrokeTraxionClaw20.url },
  { name: "Super Stroke Traxion Tour 3.0", price: "40.00€", img: g_Grips02SuperStrokeTraxionTour30.url },
  { name: "Super Stroke Traxion Tour 2.0", price: "40.00€", img: g_Grips02SuperStrokeTraxionTour20.url },
  { name: "Super Stroke Traxion Pistol GT 2.0", price: "40.00€", img: g_Grips02SuperStrokeTraxionClaw10.url },
  { name: "Super Stroke Traxion SS2R Square Red", price: "40.00€", img: g_Grips02SuperStrokeTraxionSs2rSquareRed.url },
  { name: "Super Stroke Traxion Flatso 3.0", price: "40.00€", img: g_Grips02SuperStrokeTraxionFlatso30.url },
  { name: "Winn Pro Jumbo Grip Cool 1.60 Grey y Black", price: "45.00€", img: g_Grips02WinnProJumboGripCool160GreyYBlack.url },
  { name: "Superstrokes Traxion Tour 5.0", price: "45.00€", img: g_Grips02SuperstrokesTraxionTour50.url },
  { name: "Super Stroke Traxion Flatso 2.0 XL + 2.0", price: "50.00€", img: g_Grips02SuperStrokeTraxionFlatso20Xl20.url },
  { name: "Super Stroke Traxion Wristlock Black / Green / Orange", price: "50.00€", img: g_Grips02SuperStrokeTraxionWristlockBlackGreenOrange.url },
];

const BRANDS = [
  { name: "Garsen", img: m_Garsen.url },
  { name: "Golf Pride", img: m_GolfPride.url },
  { name: "Lamkin", img: m_Lamkin.url },
  { name: "Odyssey", img: m_Odissey.url },
  { name: "P2", img: m_P2.url },
  { name: "Winn", img: m_WinGrips.url },
  { name: "Super Stroke", img: m_SuperStroke.url },
];

export const Route = createFileRoute("/tienda")({
  head: () => ({
    meta: [
      { title: "Comprar grips de golf — Fortux" },
      {
        name: "description",
        content:
          "Catálogo de grips para hierro, madera y putter de Golf Pride, Lamkin, Winn y Super Stroke. Mano de obra incluida en el precio.",
      },
      { property: "og:title", content: "Comprar grips de golf — Fortux" },
      {
        property: "og:description",
        content: "Más de 45 modelos de grips con instalación incluida.",
      },
      { property: "og:url", content: "/tienda" },
      { property: "og:image", content: IRONS[0].img },
    ],
    links: [{ rel: "canonical", href: "/tienda" }],
  }),
  component: Page,
});

const TABS = [
  { id: "iron", label: "Hierro y Madera", count: IRONS.length },
  { id: "putter", label: "Putters", count: PUTTERS.length },
] as const;

type TabId = (typeof TABS)[number]["id"];

function ProductGrid({ items, onImageClick }: { items: { name: string; price: string; img: string }[]; onImageClick: (img: string, name: string) => void }) {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((p, i) => (
        <Reveal
          as="article"
          key={`${p.name}-${i}`}
          delay={Math.min(i, 7) * 50}
          className="group flex flex-col overflow-hidden rounded-[10px] border border-white/10 bg-surface-card transition-colors duration-300 hover:border-[#B9D986]/70"
        >
          <button
            onClick={() => onImageClick(p.img, p.name)}
            className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2F5EA] cursor-zoom-in"
            aria-label={`Ampliar imagen de ${p.name}`}
          >
            <img
              src={p.img}
              alt={p.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/10">
              <ZoomIn className="h-7 w-7 text-surface opacity-0 transition-opacity group-hover:opacity-80" />
            </div>
          </button>
          <div className="flex flex-1 flex-col justify-between gap-4 p-5">
            <h3 className="font-display text-[15px] font-medium leading-snug text-[#F4F5F0] min-h-[2.8rem]">
              {p.name}
            </h3>
            <div className="flex items-center justify-between gap-3 border-t border-white/[0.07] pt-4">
              <span className="font-display text-lg font-semibold tracking-tight text-[#F4F5F0]">
                {p.price}
              </span>
              <a
                href={waLink(`Hola, querría información del grip: ${p.name} (${p.price}).`)}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 rounded-md border border-[#B9D986] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B9D986] transition-colors hover:bg-[#B9D986] hover:text-surface"
              >
                <MessageCircle className="h-3.5 w-3.5" /> Pedir info
              </a>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function ImageModal({
  img,
  name,
  onClose,
}: {
  img: string;
  name: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Cerrar"
      >
        <X className="h-6 w-6" />
      </button>
      <div
        className="relative max-h-[85vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img}
          alt={name}
          className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
        />
      </div>
    </div>
  );
}

function Page() {
  const [tab, setTab] = useState<TabId>("iron");
  const [selectedImage, setSelectedImage] = useState<{ img: string; name: string } | null>(null);
  const heroParallaxRef = useParallax<HTMLDivElement>(28);

  const items = tab === "iron" ? IRONS : PUTTERS;

  return (
    <>
      {/* HERO — compact dark premium */}
      <section className="relative isolate overflow-hidden bg-surface border-b border-white/[0.06]">
        <div
          ref={heroParallaxRef}
          aria-hidden
          className="pointer-events-none absolute right-0 w-[62%]"
          style={{
            top: -40,
            bottom: -40,
            backgroundImage: `url(${gripHeroMacro})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center right",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 35%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0))",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 35%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0))",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(185,217,134,0.08), transparent 70%)" }}
        />
        <Reveal className="container-fortux relative py-14 md:py-16">
          <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#B9D986]">
            <span className="h-px w-6 bg-[#B9D986]" /> Catálogo Fortux
          </span>
          <h1 className="mt-4 font-display text-3xl md:text-[44px] leading-[1.08] font-semibold tracking-tight text-[#F4F5F0] max-w-2xl">
            Grips para mejorar agarre,<br className="hidden md:block" /> control y confianza
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/65">
            Consulta nuestra selección de grips disponibles para hierro, madera y putter. Te asesoramos para elegir el modelo que mejor encaje con tu juego.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#catalogo"
              className="inline-flex items-center gap-2 rounded-md bg-[#B9D986] px-5 py-2.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-surface transition-colors hover:bg-[#cce69b]"
            >
              Ver catálogo <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#F4F5F0] transition-colors hover:border-[#B9D986] hover:text-[#B9D986]"
            >
              Pedir asesoramiento
            </a>
          </div>
        </Reveal>
      </section>

      {/* CATALOG */}
      <section id="catalogo" className="bg-surface py-16 md:py-20">
        <div className="container-fortux">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#B9D986]">
              <span className="h-px w-6 bg-[#B9D986]" />
              {tab === "iron" ? "Hierro y madera" : "Putters"}
              <span className="h-px w-6 bg-[#B9D986]" />
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-[40px] font-semibold tracking-tight text-[#F4F5F0]">
              {tab === "iron" ? "Grips para Hierro y Madera" : "Grips para Putters"}
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/60">
              La mano de obra está incluida en el precio.
            </p>
          </Reveal>

          <div className="mt-9 flex justify-center">
            <div className="inline-flex rounded-[8px] border border-white/[0.12] bg-surface-card p-1">
              {TABS.map((t) => {
                const active = tab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className={`rounded-[6px] px-5 py-2 text-[11.5px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                      active
                        ? "bg-[#B9D986] text-surface"
                        : "text-white/65 hover:text-[#F4F5F0]"
                    }`}
                  >
                    {t.label}
                    <span className={`ml-2 text-[10px] ${active ? "text-surface/70" : "text-white/40"}`}>
                      {t.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <ProductGrid items={items} onImageClick={(img, name) => setSelectedImage({ img, name })} />
        </div>
      </section>

      {/* MARCAS */}
      <section className="relative border-t border-white/[0.06] bg-[#070808] py-16 md:py-20">
        <div className="container-fortux">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#B9D986]">
              <span className="h-px w-6 bg-[#B9D986]" /> Partners
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-[38px] leading-[1.05] font-semibold tracking-tight text-[#F4F5F0]">
              Marcas colaboradoras
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-white/55">
              Trabajamos con las principales firmas del mercado para ofrecer el grip adecuado para cada jugador y cada estilo de juego.
            </p>
          </Reveal>

          <div
            className="relative mt-12 md:mt-14"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
            }}
          >
            <ul className="flex flex-wrap items-center justify-between gap-x-10 gap-y-8 md:flex-nowrap md:gap-x-6">
              {BRANDS.map((b) => (
                <li key={b.name} className="group flex shrink-0 grow basis-[120px] items-center justify-center md:basis-0">
                  <img
                    src={b.img}
                    alt={b.name}
                    loading="lazy"
                    className="h-12 md:h-14 w-auto max-w-[160px] object-contain opacity-55 transition-opacity duration-300 group-hover:opacity-95"
                    style={{ filter: "invert(1) grayscale(1) contrast(1.1) brightness(1.05)", mixBlendMode: "screen" }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contacto" className="bg-surface py-16 md:py-20">
        <div className="container-fortux max-w-4xl">
          <Reveal className="relative isolate overflow-hidden rounded-2xl border border-white/[0.10] bg-surface-raised">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: `url(${gripTextureDark})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(10,11,13,0.92) 0%, rgba(10,11,13,0.70) 50%, rgba(10,11,13,0.92) 100%)",
              }}
            />
            <div className="relative px-6 py-12 text-center md:px-12 md:py-16">
              <span className="inline-flex items-center justify-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#B9D986]">
                <span className="h-px w-6 bg-[#B9D986]" />
                Asesoramiento
                <span className="h-px w-6 bg-[#B9D986]" />
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-[40px] font-semibold tracking-tight text-[#F4F5F0]">
                ¿No sabes qué grip elegir?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/60">
                Te ayudamos a encontrar el modelo adecuado para tu juego, tu agarre y tus sensaciones en el campo.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={waLink(
                    "Hola, quisiera asesoramiento para elegir el grip adecuado."
                  )}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-md bg-[#B9D986] px-6 py-3 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-surface transition-colors hover:bg-[#cce69b]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Pedir asesoramiento
                </a>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#F4F5F0] transition-colors hover:border-[#B9D986] hover:text-[#B9D986]"
                >
                  <Phone className="h-4 w-4" />
                  Llamar ahora
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {selectedImage && (
        <ImageModal
          img={selectedImage.img}
          name={selectedImage.name}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
