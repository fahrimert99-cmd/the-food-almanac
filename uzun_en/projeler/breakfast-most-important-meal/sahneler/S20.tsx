// Sahne 20 — öğle ve akşam yemeği iki günde de aynı: 700 kalori.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%,-50%) scale(${sc})`, opacity: a }}><Hap metin={metin} renk={renk} /></div>;
};

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tL = K(0, "Lunch"), tD = K(0, "dinner"), tAyni = K(0, "exactly the same"), t700 = K(0, "700");
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [140, 90, 1700])}>
        {/* kadrandaki sahte küçük yazı örtülür */}
        <div style={{ position: "absolute", left: 1500, top: 468, width: 135, height: 70,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #FBFAF6 0%, #FBFAF6 60%, rgba(251,250,246,0) 100%)" }} />
        <Etiket t={t} bas={tL} bitis={t700 - 0.2} capa={[600, 450]} konum={[330, 230]} metin="LUNCH" renk={RENK.yesil} />
        <Etiket t={t} bas={tD} bitis={t700 - 0.2} capa={[900, 600]} konum={[820, 140]} metin="DINNER" renk={RENK.altin} />
      </Kamera>
      <Pil t={t} bas={tAyni} bitis={t700 - 0.1} x={1500} y={120} metin="EXACTLY THE SAME" renk={RENK.lacivert} />
      <VurguRozet t={t} bas={t700} vurgu="700" not="CALORIES EACH" x={1500} y={90} genislik={340} />
    </>
  );
};

export default S20;
