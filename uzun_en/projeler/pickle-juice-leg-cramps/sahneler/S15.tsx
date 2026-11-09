// Sahne 15 — iki bardak: su ya da turşu suyu; 2.5 OZ rozeti.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(0, "plain");
  const tMl = K(0, "milliliter");
  const tOz = K(1, "two");
  const [sc, al] = pop(t, K(0, "two"), 0.5);
  const a = al * sol(t, tBaslik - 0.2);
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={tBaslik} bitis={tMl - 0.2} capa={[747, 440]} konum={[420, 330]} metin="PLAIN WATER" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "pickle")} bitis={tMl - 0.2} capa={[1173, 440]} konum={[1560, 400]} metin="PICKLE JUICE" renk={RENK.yesil} />
        <Etiket t={t} bas={tMl} bitis={tOz - 0.2} capa={[760, 890]} konum={[1200, 890]} metin="1 ML PER KG" renk={RENK.altin} />
      </Kamera>
      {/* iki gün, bir hafta arayla: başlık gelene dek üstte */}
      {a > 0 && (
        <div style={{ position: "absolute", left: 960, top: 120, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
          <Hap metin="TWO DAYS · A WEEK APART" renk={RENK.altin} boyut={40} />
        </div>
      )}
      <Baslik t={t} bas={tBaslik} metin="WATER OR PICKLE JUICE" x={960} y={115} boyut={100} renk={RENK.koyuYesil} hiza="orta" />
      <VurguRozet t={t} bas={tOz} vurgu="2.5 OZ" not="about five tablespoons" x={1620} y={230} genislik={420} />
    </>
  );
};

export default S15;
