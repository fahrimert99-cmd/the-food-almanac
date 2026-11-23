// Sahne 38 — üç düzey: sayılı, sayısız, çok az.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const SATIRLAR = [
    { metin: "A NUMBER,", bas: K(0, "number") - 0.1, renk: RENK.yesil },
    { metin: "NO NUMBER,", bas: K(0, "without"), renk: RENK.altin },
    { metin: "VERY LITTLE", bas: K(0, "very"), renk: RENK.mercan },
  ];
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={K(0, "number")} capa={[390, 330]} konum={[380, 95]} metin="CAPSULES" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "without")} capa={[780, 470]} konum={[740, 120]} metin="TEA" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "drink")} capa={[1040, 330]} konum={[1110, 95]} metin="GINGER ALE" renk={RENK.mercan} />
      </Kamera>
      {SATIRLAR.map((r, i) => (
        <Baslik key={r.metin} t={t} bas={r.bas} metin={r.metin} x={1580} y={330 + i * 135} boyut={96} hiza="orta" renk={r.renk} />
      ))}
    </>
  );
};

export default S38;
