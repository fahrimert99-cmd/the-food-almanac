// Sahne 41 — belirtilerin birçok nedeni var; tahmin değil kan testi.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Açılıp kapanan pop'lu hap
const Hg: React.FC<{ t: number; bas: number; metin: string; renk: string; x: number; y: number; boyut?: number; bitis?: number }> = ({
  t, bas, metin, renk, x, y, boyut = 36, bitis = 1e9,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * (t > bitis ? Math.max(0, 1 - (t - bitis) / 0.4) : 1);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTired = K(0, "tiredness");
  const tTing = K(0, "tingling");
  const tMem = K(0, "memory slips");
  const tMany = K(0, "many causes");
  const tNot = K(0, "nothing to do");
  const tTest = K(1, "blood test");
  const tAge = K(2, "just age");
  const tAsk = K(2, "ask whether");
  return (
    <>
      {/* imza altta kalır: pencere y ≤ 984 */}
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1750], [170, 0, 1750])} />
      <Hg t={t} bas={tTired} metin="TIREDNESS" renk={RENK.altin} x={140} y={170} bitis={tTest - 0.2} />
      <Hg t={t} bas={tTing} metin="TINGLING" renk={RENK.koyuYesil} x={140} y={260} bitis={tTest - 0.2} />
      <Hg t={t} bas={tMem} metin="MEMORY SLIPS" renk={RENK.lacivert} x={140} y={350} bitis={tTest - 0.2} />
      <Hg t={t} bas={tMany} metin="MANY CAUSES" renk={RENK.gri} x={140} y={500} bitis={tTest - 0.2} />
      <Hg t={t} bas={tNot} metin="NOT ALWAYS B12" renk={RENK.mercan} x={140} y={590} bitis={tTest - 0.2} />
      <BaslikBlok t={t} bas={tTest} satirlar={["TEST,", "DON'T GUESS"]} x={140} y={240} boyut={130} />
      <Etiket t={t} bas={tTest} capa={[1458, 600]} konum={[1060, 560]} metin="BLOOD TEST" renk={RENK.mercan} />
      <Hg t={t} bas={tAge} metin="“JUST AGE”?" renk={RENK.mercan} x={140} y={520} boyut={40} />
      <div style={{ position: "absolute", left: 140, top: 630, opacity: pop(t, tAsk, 0.5)[1], transform: `scale(${pop(t, tAsk, 0.5)[0]})`,
        transformOrigin: "0% 50%", display: "flex", alignItems: "center", gap: 18 }}>
        <Hap metin="HAS MY B12 EVER BEEN CHECKED?" renk={RENK.yesil} boyut={40} />
      </div>
    </>
  );
};

export default S41;
