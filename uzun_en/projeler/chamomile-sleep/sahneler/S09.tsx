// Sahne 9 — iki zarf ve büyüteç: plasebo, aynı görünüm, bitkiyi ayırmak.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// kart zeminli hap
const Kart: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.55);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a, background: RENK.kagitAcik,
      border: `4px solid ${renk}`, borderRadius: 999, padding: "12px 34px", fontFamily: INTER, fontWeight: 800, fontSize: 40, letterSpacing: 3,
      color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 10px 26px rgba(48,40,34,0.22)" }}>{metin}</div>
  );
};

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 40, 1920], [70, 90, 1780]);
  const tSame = K(1, "same,"), tIso = K(2, "isolate");
  const aCizgi = eout(ilerle(t, 0.3, 0.6));
  return (
    <>
      <Kamera gorsel="tam/09" pencere={w}>
        <Etiket t={t} bas={K(0, "placebo")} bitis={tSame - 0.2} capa={[1265, 390]} konum={[1500, 150]} metin="FLOUR = PLACEBO" renk={RENK.altin} />
        <Etiket t={t} bas={tIso} capa={[630, 420]} konum={[500, 150]} metin="THE HERB" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={0.25} bitis={tSame - 0.2} metin="PLACEBO" x={140} y={120} boyut={110} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 144, top: 190, height: 6, width: 260 * aCizgi, background: RENK.altin, opacity: sol(t, tSame - 0.2) }} />
      <Kart t={t} bas={tSame} bitis={K(1, "both") - 0.1} x={960} y={860} metin="LOOK THE SAME" renk={RENK.lacivert} />
      <Kart t={t} bas={K(1, "both")} bitis={tIso - 0.1} x={960} y={860} metin="BOTH GROUPS" renk={RENK.mercan} />
      <Kart t={t} bas={tIso + 0.2} x={960} y={860} metin="ISOLATE THE HERB" renk={RENK.yesil} />
    </>
  );
};

export default S09;
