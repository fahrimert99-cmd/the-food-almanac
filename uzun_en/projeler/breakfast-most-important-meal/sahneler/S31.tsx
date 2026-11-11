// Sahne 31 — Mamerow 2014: protein eşit dağılınca 24 saatte kas yapımı %25 daha yüksek.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kagit, kameraYolu,
  kelimeZamani, pop, sol } from "../kutuphane";

// Açılan hap: x,y = merkez
const Pil: React.FC<{ t: number; bas: number; metin: string; x: number; y: number; renk: string; bitis?: number; boyut?: number }> = ({
  t, bas, metin, x, y, renk, bitis = 1e9, boyut = 30,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};
const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTek = K(1, "evenly") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [120, 90, 1640])}>
        {/* sağ alttaki imza kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1660, top: 850, width: 240, height: 160,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "timing")} bitis={K(1, "In a small") + 3.2} capa={[1000, 150]} konum={[1330, 160]} metin="TIMING" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "mostly")} capa={[1650, 690]} konum={[1500, 430]} metin="MOSTLY AT DINNER" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "In a small")} />
      <Pil t={t} bas={K(1, "eight")} bitis={K(2, "Muscle")} metin="8 ADULTS · AVERAGE AGE 37" x={500} y={470} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "evenly")} metin="EVEN SPREAD" x={90} y={230} boyut={118} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(2, "25")} vurgu="+25%" not="muscle building over 24 hours, in young adults" x={420} y={330} genislik={520} boyut={110} />
    </>
  );
};
export default S31;
