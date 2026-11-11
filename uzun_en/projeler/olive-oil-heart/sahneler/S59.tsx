// Sahne 59 — özet: zeytinyağıyla pişirme ve dört pratik not (üst bant + etiketler).
import React from "react";
import { Baslik, Etiket, Kamera, INTER, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; metin: string; renk: string; x: number; y: number; bitis?: number }> = ({ t, bas, metin, renk, x, y, bitis = 1e9 }) => {
  const [sc, al0] = pop(t, bas, 0.5);
  const al = al0 * sol(t, bitis);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(0,-50%) scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
      display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`,
      borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5,
      color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: 20, height: 20, borderRadius: "50%", background: renk, flex: "none" }} />
      {metin}
    </div>
  );
};

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const son = 5.2;
  return (
    <>
      <Kamera gorsel="tam/59" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "olive")} bitis={son} capa={[1440, 560]} konum={[1690, 470]} metin="OLIVE OIL" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "heat")} bitis={son} capa={[800, 775]} konum={[300, 880]} metin="HEAT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "phenolics.")} bitis={son} capa={[640, 540]} konum={[260, 300]} metin="PHENOLICS" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "cooking")} bitis={son} metin="COOKING WITH OLIVE OIL" x={70} y={110} boyut={100} renk={RENK.koyuYesil} />
      <Pil t={t} bas={K(0, "reasonable,")} metin="LOOKS REASONABLE" renk={RENK.yesil} x={70} y={205} bitis={son} />
      <Pil t={t} bas={K(1, "modest")} metin="MODEST AMOUNTS" renk={RENK.yesil} x={70} y={90} />
      <Pil t={t} bas={K(1, "fresh")} metin="FRESH OIL" renk={RENK.yesil} x={500} y={90} />
      <Pil t={t} bas={K(1, "gentle")} metin="GENTLE HEAT" renk={RENK.yesil} x={800} y={90} />
      <Pil t={t} bas={K(1, "replace")} metin="REPLACE SATURATED FAT" renk={RENK.koyuYesil} x={70} y={180} />
      <Pil t={t} bas={K(1, "extra")} metin="NOT EXTRA CALORIES" renk={RENK.mercan} x={690} y={180} />
    </>
  );
};

export default S59;
