// Sahne 3 — ne seçmeli, nasıl sığdırmalı; iki tabak etiketli, başlıklar üstte.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [60, 40, 1800], [100, 60, 1720]);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kam}>
        <Etiket t={t} bas={K(0, "choose")} capa={[670, 530]} konum={[670, 760]} metin="SARDINES" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "and how")} capa={[1260, 500]} konum={[1260, 760]} metin="SALMON" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "what to choose")} metin="WHAT TO CHOOSE" x={960} y={130} boyut={92} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "how to fit")} metin="HOW TO FIT IT IN" x={960} y={236} boyut={92} hiza="orta" renk={RENK.koyuYesil} />
    </>
  );
};
export default S03;
