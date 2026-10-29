// Sahne 47 — toz yerine gıda da olur: tezgâh görseli üstünde etiketler.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Ekran koordinatında pop ile gelen hap
const Pop: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; boyut?: number }> = ({
  t, bas, bitis = 1e9, x, y, metin, renk, boyut = 30,
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

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tToz = K(0, "powders");
  const tDoz = K(1, "dose");
  const tBut = K(1, "but");
  const tNutr = K(1, "nutrients");
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [40, 22, 1840], [110, 58, 1700])}>
        <Etiket t={t} bas={tToz} bitis={tBut - 0.2} capa={[470, 420]} konum={[400, 105]} metin="NOT REQUIRED" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "food")} capa={[1330, 410]} konum={[1330, 120]} metin="EGGS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "counts")} capa={[820, 640]} konum={[820, 440]} metin="CHEESE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "too,")} capa={[1530, 730]} konum={[1560, 960 - 60]} metin="LENTILS" renk={RENK.yesil} />
      </Kamera>
      <Pop t={t} bas={tDoz} bitis={tBut - 0.2} x={1000} y={92} metin="EASY DOSE CONTROL" renk={RENK.altin} />
      <Pop t={t} bas={tNutr - 0.25} x={960} y={880} metin="FOOD BRINGS OTHER NUTRIENTS" renk={RENK.yesil} boyut={32} />
    </>
  );
};

export default S47;
