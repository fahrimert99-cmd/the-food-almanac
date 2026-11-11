// Sahne 7 — pankreas ve insülin; sağ altta başlık, sağ üstte ILLUSTRATIVE yükselip inen eğri.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const EGRI = (u: number) => Math.exp(-(((u - 0.38) / 0.2) ** 2));

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta.baslik;
  const bC = K(1, "rises"), bS = K(1, "settles");
  const ciz = eout(ilerle(t, bC, bS - bC + 1.4));
  const x0 = 1460, w = 400, yb = 230, h = 80;
  const nokta = Array.from({ length: 41 }, (_, i) => `${(x0 + (w * i) / 40).toFixed(1)},${(yb - h * EGRI(i / 40)).toFixed(1)}`);
  const n = Math.max(2, Math.round(41 * ciz));
  const aK = eout(ilerle(t, K(1, "Blood") - 0.1, 0.5));
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1900], [40, 20, 1800])}>
        {/* sağ alttaki "B." harfi kâğıt yamayla örtülü */}
        <div style={{ position: "absolute", left: 1730, top: 950, width: 110, height: 70,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "pancreas")} bitis={K(0, "releasing")} capa={[900, 760]} konum={[780, 905]} metin="PANCREAS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "insulin,")} capa={[1330, 270]} konum={[1180, 150]} metin="INSULIN" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "insulin,")} metin={m?.satirlar[0] ?? "INSULIN"} x={1860} y={850} boyut={100} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "helps")} metin={m?.not ?? ""} x={1860} y={908} hiza="sag" boyut={32} genislik={700} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: aK }}>
        <line x1={x0 - 10} x2={x0 + w + 10} y1={yb} y2={yb} stroke={RENK.murekkep} strokeWidth={4} />
        <polyline points={nokta.slice(0, n).join(" ")} fill="none" stroke={RENK.mercan} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
        <text x={x0 + w + 10} y={yb + 30} textAnchor="end" style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 20, fill: RENK.gri }}>ILLUSTRATIVE</text>
      </svg>
      <Not t={t} bas={K(1, "Blood")} metin="blood sugar" x={x0} y={98} boyut={28} genislik={300} />
    </>
  );
};

export default S07;
