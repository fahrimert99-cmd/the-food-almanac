// Sahne 13 — günlük, papatya çayı ve çiçekler: doz, plasebo ve uyku günlüğü.
import React from "react";
import { Etiket, INTER, Kamera, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 40, 1920], [80, 90, 1740]);
  const son1 = K(1, "everyone") - 0.1;
  const [sc, al] = pop(t, K(0, "placebo"), 0.55);
  const a = al * sol(t, son1);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={w}>
        <Etiket t={t} bas={K(0, "chamomile")} bitis={son1} capa={[1427, 430]} konum={[1650, 180]} metin="CHAMOMILE EXTRACT" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(1, "sleep")} capa={[693, 560]} konum={[420, 140]} metin="SLEEP DIARY" renk={RENK.altin} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "270")} bitis={son1} vurgu="270 MG" x={1420} y={720} genislik={340} boyut={92} />
      <Not t={t} bas={K(0, "twice")} bitis={son1} metin="TWICE A DAY" x={1620} y={725} boyut={30} agirlik={800} genislik={260} />
      <Not t={t} bas={K(0, "for")} bitis={son1} metin="FOR 28 DAYS" x={1620} y={775} boyut={30} agirlik={800} renk={RENK.altin} genislik={260} />
      {a > 0 && (
        <div style={{ position: "absolute", left: 1420, top: 905, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a, background: RENK.kagitAcik,
          border: `4px solid ${RENK.mercan}`, borderRadius: 999, padding: "6px 28px", fontFamily: INTER, fontWeight: 800, fontSize: 30,
          letterSpacing: 3, color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>OTHER HALF: PLACEBO</div>
      )}
      <Liste t={t} isaret="nokta" x={1290} y={720} aralik={80} boyut={30} genislik={580}
        ogeler={[{ bas: K(1, "long"), metin: "TIME TO FALL ASLEEP", renk: RENK.yesil }, { bas: K(1, "often"), metin: "HOW OFTEN THEY WOKE", renk: RENK.mercan }]} />
    </>
  );
};

export default S13;
