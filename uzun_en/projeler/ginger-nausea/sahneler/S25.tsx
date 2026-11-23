// Sahne 25 — Lien 2003: dönen tambur, 1.000 ve 2.000 mg.
import React from "react";
import { Baslik, BaslikBlok, Etiket, INTER, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Şematik dalga: düzensiz -> düzenli (yalnızca ILLUSTRATIVE)
const Dalga: React.FC<{ t: number; bas: number; x: number; y: number; w: number }> = ({ t, bas, x, y, w }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  const duz = eout(ilerle(t, bas + 1.2, 1.6));
  const pts: string[] = [];
  for (let i = 0; i <= 80; i++) {
    const u = i / 80;
    const kaos = Math.sin(u * 38) * 16 * Math.sin(u * 7 + 1) + Math.sin(u * 91) * 9;
    const dz = Math.sin(u * 22) * 15;
    pts.push(`${(x + u * w).toFixed(1)},${(y + kaos * (1 - duz) + dz * duz).toFixed(1)}`);
  }
  return (
    <div style={{ opacity: al, transform: `scale(${0.96 + 0.04 * sc})` }}>
      <div style={{ position: "absolute", left: x - 20, top: y - 62, width: w + 40, height: 124, background: "#FCF8EC", borderRadius: 20,
        border: `3px solid ${RENK.altin}`, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <polyline points={pts.join(" ")} fill="none" stroke={RENK.koyuYesil} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div style={{ position: "absolute", left: x - 20, top: y + 70, width: w + 40, textAlign: "center", fontFamily: INTER, fontWeight: 800,
        fontSize: 22, letterSpacing: 3, color: RENK.gri }}>ILLUSTRATIVE</div>
    </div>
  );
};

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSpin = K(0, "spinning"), tDose = K(1, "1,000"), tNaus = K(1, "nausea"), tRitim = K(1, "irregular");
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 20, 1900], [60, 60, 1790])}>
        <Etiket t={t} bas={tSpin} bitis={tDose - 0.2} capa={[690, 330]} konum={[1180, 230]} metin="SPINNING FEELING" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "ginger")} capa={[1250, 760]} konum={[1250, 480]} metin="GINGER" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tDose} satirlar={["1,000 AND", "2,000 MG"]} x={1860} y={160} boyut={104} hiza="sag" />
      <Not t={t} bas={tNaus} metin="both lowered nausea in the lab" x={1860} y={400} hiza="sag" genislik={560} boyut={32} />
      <Dalga t={t} bas={tRitim} x={1570} y={690} w={270} />
    </>
  );
};

export default S25;
