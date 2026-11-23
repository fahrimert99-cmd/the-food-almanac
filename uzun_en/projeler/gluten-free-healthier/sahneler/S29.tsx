// Sahne 29 — %68 gluten vs %40 plasebo: iki rozet, terazinin iki kefesi.
import React from "react";
import { Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGlu = K(0, "gluten"), t68 = K(0, "68"), tPla = K(2, "placebo"), t40 = K(2, "40");
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tGlu} capa={[800, 560]} konum={[860, 330]} metin="GLUTEN" renk={RENK.mercan} />
        <Etiket t={t} bas={tPla} capa={[1590, 600]} konum={[1240, 730]} metin="PLACEBO" renk={RENK.yesil} />
      </Kamera>
      <VurguRozet t={t} bas={t68} vurgu="68%" not="symptoms not controlled" x={480} y={90} renk={RENK.mercan} genislik={440} />
      <VurguRozet t={t} bas={t40} vurgu="40%" not="felt worse, no gluten" x={1670} y={650} renk={RENK.yesil} genislik={400} />
      <Not t={t} bas={t40 + 0.6} metin="symptoms on gluten vs on placebo" x={960} y={870} boyut={32} hiza="orta" />
    </>
  );
};

export default S29;
