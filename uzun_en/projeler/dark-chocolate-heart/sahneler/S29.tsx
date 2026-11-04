// Sahne 29 — çoğu sağlıklı yetişkin, 60+ için tasarlanmadı; etiket ifadesi sonra
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Satir: React.FC<{ t: number; bas: number; bitis: number; metin: string; renk: string; y: number }> = ({ t, bas, bitis, metin, renk, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis, 0.4);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1160, top: y, transform: `translate(-50%,-50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={38} />
    </div>
  );
};

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHealthy = K(0, "healthy adults"), tOver = K(0, "over 60"), tLabel = K(1, "phrase on a label");
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 50, 1780])} />
      <Satir t={t} bas={tHealthy - 0.3} bitis={tLabel - 0.4} metin="MOSTLY HEALTHY ADULTS" renk={RENK.yesil} y={740} />
      <Satir t={t} bas={tOver - 0.4} bitis={tLabel - 0.4} metin="NOT BUILT AROUND 60+" renk={RENK.mercan} y={830} />
      <Etiket t={t} bas={tLabel} capa={[1130, 560]} konum={[1130, 780]} metin="ONE PHRASE ON THE LABEL" renk={RENK.altin} boyut={36} />
    </>
  );
};

export default S29;
