// Sahne 36 — eşleştir, yasaklama: ıspanak + kalsiyumlu yiyecek aynı öğünde.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840]);
  const pil = (bas: number, metin: string, renk: string, y: number) => {
    const [sc, al] = pop(t, bas, 0.5);
    return (
      <div style={{ position: "absolute", left: 1665, top: y, transform: `translate(-50%,0) scale(${sc})`, opacity: al }}>
        <Hap metin={metin} renk={renk} boyut={26} />
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/36" pencere={pen}>
        <Etiket t={t} bas={K(1, "spinach")} capa={[560, 380]} konum={[330, 215]} metin="SPINACH" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "calcium")} capa={[1300, 420]} konum={[1640, 330]} metin="CALCIUM FOOD" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "pairing,")} metin="PAIR," x={60} y={105} boyut={104} renk={RENK.yesil} />
      <Baslik t={t} bas={K(0, "banning.")} metin="DON'T BAN" x={340} y={105} boyut={104} renk={RENK.mercan} />
      {pil(K(1, "same"), "SAME MEAL", RENK.yesil, 740)}
      {pil(K(1, "bind."), "THEY BIND", RENK.altin, 815)}
      {pil(K(2, "practical"), "SEE PRACTICAL PART", RENK.lacivert, 890)}
    </>
  );
};

export default S36;
