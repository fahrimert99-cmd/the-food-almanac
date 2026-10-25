// Sahne 18 — tedavi ile plasebo arasındaki fark: ağrı çizgisi üzerinde ~9 mm (şematik).
import React from "react";
import { ANTON, BaslikBlok, Etiket, Hap, IkonYol, INTER, Kamera, Not, RENK, SP, VurguRozet, einout, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const b = s.meta.baslik!;
  const tKok = K(0, "turmeric"), tCizgi = K(1, "pain line"), tFark = K(1, "difference"), tDokuz = K(1, "9");
  const tModest = K(2, "modest"), tGeniş = K(2, "range"), tYan = K(3, "Side effects");
  const pCizgi = einout(ilerle(t, tCizgi - 0.2, 0.9));
  const [sP, aP] = pop(t, tFark, 0.5), [sT, aT] = pop(t, tFark + 0.35, 0.5);
  const pKöp = eout(ilerle(t, tDokuz, 0.6));
  const pGenis = eout(ilerle(t, tGeniş, 0.7));
  const [sY, aY] = pop(t, tYan, 0.55);
  const y = 500, x0 = 1000, x1 = 1800, xT = 1320, xP = 1540;
  const baslikSon = tYan - 0.15;
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860])}>
        <Etiket t={t} bas={tKok} capa={[260, 330]} konum={[640, 160]} metin="TURMERIC ROOT" renk={RENK.altin} boyut={26} />
      </Kamera>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <g opacity={pCizgi}>
          <line x1={x0} y1={y} x2={x0 + (x1 - x0) * pCizgi} y2={y} stroke={RENK.lacivert} strokeWidth={6} strokeLinecap="round" />
          <line x1={x0} y1={y - 22} x2={x0} y2={y + 22} stroke={RENK.lacivert} strokeWidth={6} strokeLinecap="round" />
          <line x1={x1} y1={y - 22} x2={x1} y2={y + 22} stroke={RENK.lacivert} strokeWidth={6} strokeLinecap="round" />
        </g>
        <g opacity={aP} transform={`translate(${xP} ${y}) scale(${sP})`}>
          <circle r={20} fill={RENK.gri} stroke={RENK.kagitAcik} strokeWidth={4} />
        </g>
        <g opacity={aT} transform={`translate(${xT} ${y}) scale(${sT})`}>
          <circle r={20} fill={RENK.yesil} stroke={RENK.kagitAcik} strokeWidth={4} />
        </g>
        {/* aradaki fark ayracı */}
        <g opacity={pKöp}>
          <path d={`M ${xT} ${y - 46} V ${y - 66} H ${xP} V ${y - 46}`} fill="none" stroke={RENK.altin} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
        </g>
        {/* geniş aralık */}
        <g opacity={pGenis}>
          <line x1={xT - 230 * pGenis} y1={y + 110} x2={xT + 230 * pGenis} y2={y + 110} stroke={RENK.mercan} strokeWidth={6} strokeLinecap="round" />
          <line x1={xT - 230} y1={y + 92} x2={xT - 230} y2={y + 128} stroke={RENK.mercan} strokeWidth={6} strokeLinecap="round" />
          <line x1={xT + 230} y1={y + 92} x2={xT + 230} y2={y + 128} stroke={RENK.mercan} strokeWidth={6} strokeLinecap="round" />
        </g>
      </svg>
      <Not t={t} bas={tCizgi} metin="← LESS PAIN" x={x0} y={y + 34} boyut={26} agirlik={800} renk={RENK.gri} />
      <Not t={t} bas={tFark + 0.1} metin="PLACEBO" x={xP} y={y + 40} boyut={24} agirlik={800} renk={RENK.gri} hiza="orta" />
      <Not t={t} bas={tFark + 0.45} metin="TURMERIC" x={xT} y={y + 40} boyut={24} agirlik={800} renk={RENK.yesil} hiza="orta" bitis={tGeniş} />
      <Not t={t} bas={tGeniş + 0.2} metin="WIDE RANGE OF EFFECTS" x={xT} y={y + 136} boyut={26} agirlik={800} renk={RENK.mercan} hiza="orta" />
      <div style={{ position: "absolute", left: x1, top: y - 100, transform: "translateX(-100%)", opacity: aP * 0.9, fontFamily: INTER, fontWeight: 800,
        fontSize: 20, letterSpacing: 3, color: RENK.gri }}>ILLUSTRATIVE</div>
      <VurguRozet t={t} bas={tDokuz} vurgu={b.vurgu!} not={b.not} x={1440} y={160} genislik={460} boyut={104} />
      <BaslikBlok t={t} bas={tModest} satirlar={b.satirlar} x={1000} y={790} boyut={86} bitis={baslikSon} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <div style={{ position: "absolute", left: 1000, top: 790, transform: `scale(${sY})`, transformOrigin: "0% 50%", opacity: aY, display: "flex", alignItems: "center", gap: 14 }}>
        <Hap metin="SIDE EFFECTS SIMILAR" renk={RENK.yesil} boyut={34} />
      </div>
    </>
  );
};

export default S18;
