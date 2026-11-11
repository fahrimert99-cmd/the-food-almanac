// Sahne 36 — yüksek doz: seyrek içen biri için kısa süreli idrar artışı.
import React from "react";
import { BaslikBlok, Etiket, IkonYol, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Sağ sütunda beliren simgeli hap
const Pil: React.FC<{ t: number; bas: number; metin: string; y: number; renk: string; ikon: "ok" | "saat" | "soru"; don?: number }> = ({
  t, bas, metin, y, renk, ikon, don = 0,
}) => {
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 60, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al,
      display: "flex", alignItems: "center", gap: 16, background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "10px 28px 10px 12px", boxShadow: "0 8px 22px rgba(48,40,34,0.14)", whiteSpace: "nowrap" }}>
      <span style={{ width: 48, height: 48, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ transform: `rotate(${don}deg)`, display: "flex" }}><IkonYol ad={ikon} boyut={32} renk="#fff" kalinlik={6} /></span>
      </span>
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert }}>{metin}</span>
    </div>
  );
};

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bitis0 = c[1].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={K(1, "big, strong coffee")} capa={[790, 640]} konum={[380, 760]} metin="BIG, STRONG COFFEE" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "Large doses")} bitis={bitis0} satirlar={["LARGE", "DOSES"]} x={90} y={300} boyut={150}
        renkler={[RENK.lacivert, RENK.altin]} />
      <Not t={t} bas={K(0, "different story")} bitis={bitis0} metin="A DIFFERENT STORY" x={96} y={560} boyut={40} renk={RENK.lacivert} agirlik={800} />
      <Pil t={t} bas={K(1, "rarely have caffeine")} metin="RARELY HAVE CAFFEINE" y={220} renk={RENK.koyuYesil} ikon="soru" />
      <Pil t={t} bas={K(1, "rise in urine output")} metin="BRIEF RISE IN URINE" y={420} renk={RENK.mercan} ikon="ok" don={-90} />
      <Pil t={t} bas={K(1, "temporary")} metin="TEMPORARY" y={620} renk={RENK.yesil} ikon="saat" />
    </>
  );
};

export default S36;
