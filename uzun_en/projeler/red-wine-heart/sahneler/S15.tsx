// Sahne 15 — "Yazarlar temkinliydi": tabure üstündeki kadeh = sallantılı kanıt zemini.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFew = K(1, "too few"), tHarm = K(1, "harmless"), tUse = K(1, "useless");
  const tShaky = K(2, "shaky ground"), tClosed = K(2, "not that the question");
  const solCik = K(2, "old evidence") - 0.15;
  const [s1, a1] = pop(t, tHarm, 0.5);
  const [s2, a2] = pop(t, tUse, 0.5);
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [100, 40, 1720], [190, 90, 1540])} />
      {/* sol: kanıt yetersiz */}
      <Baslik t={t} bas={K(0, "careful")} bitis={1.85} metin="CAREFUL" x={140} y={330} boyut={130} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tFew} bitis={solCik} metin="TOO FEW" x={140} y={300} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={tFew + 0.15} bitis={solCik} metin="CLEAN STUDIES" x={140} y={420} boyut={96} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 140, top: 520, display: "flex", gap: 18, opacity: Math.min(1, t < solCik ? 1 : 0) }}>
        <div style={{ transform: `scale(${s1})`, transformOrigin: "0 50%", opacity: a1 }}><Hap metin="HARMLESS?" renk={RENK.altin} boyut={32} /></div>
        <div style={{ transform: `scale(${s2})`, transformOrigin: "0 50%", opacity: a2 }}><Hap metin="USELESS?" renk={RENK.altin} boyut={32} /></div>
      </div>
      <Etiket t={t} bas={tShaky} capa={[900, 760]} konum={[480, 720]} metin="SHAKY GROUND" renk={RENK.mercan} boyut={32} />
      <Baslik t={t} bas={tClosed} metin="QUESTION" x={1880} y={330} boyut={92} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tClosed + 0.15} metin="STILL OPEN" x={1880} y={440} boyut={92} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S15;
