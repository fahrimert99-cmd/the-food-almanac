// Sahne 53 — adım 3: doğal olarak glütensiz tabak.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  const tV = K(2, "Vegetables") - 0.3;
  const tP = K(2, "packaged");
  const a = eout(ilerle(t, tP, 0.5));
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kam}>
        <Etiket t={t} bas={K(2, "Vegetables")} capa={[900, 420]} konum={[560, 200]} metin="VEGETABLES" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "fruit")} capa={[1400, 250]} konum={[1700, 470]} metin="FRUIT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "fish")} capa={[640, 590]} konum={[200, 720]} metin="FISH" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(2, "plain rice")} capa={[1200, 640]} konum={[1560, 800]} metin="PLAIN RICE" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Three.")} bitis={tV} metin="STEP THREE" x={140} y={100} boyut={80} renk={RENK.altin} />
      <Baslik t={t} bas={K(1, "foods")} bitis={tV} metin="NATURALLY GLUTEN-FREE" x={140} y={190} boyut={84} renk={RENK.koyuYesil} />
      {a > 0 && (
        <div style={{ position: "absolute", left: 140, top: 860, opacity: a, transform: `translateY(${(1 - a) * 12}px)` }}>
          <Hap metin="PACKAGED SUBSTITUTES: LESS PROTEIN, HIGHER PRICE" renk={RENK.mercan} boyut={28} />
        </div>
      )}
    </>
  );
};
export default S53;
