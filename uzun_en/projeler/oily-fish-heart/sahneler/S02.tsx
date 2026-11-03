// Sahne 2 — balık: ilişkili; kapsül: reçeteli sürüm. Yazılar sağ boşlukta.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 80, 1800], [40, 110, 1700]);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kam}>
        <Etiket t={t} bas={K(0, "regular fish")} capa={[760, 600]} konum={[1230, 580]} metin="SALMON" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "eaters")} capa={[330, 590]} konum={[250, 780]} metin="SARDINES" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "prescription")} capa={[816, 795]} konum={[1330, 760]} metin="PRESCRIPTION CAPSULE" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "regular fish")} metin="FISH: LINKED." x={1060} y={190} boyut={96} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "one prescription")} metin="PILLS: NOT?" x={1060} y={300} boyut={96} renk={RENK.mercan} />
      <Not t={t} bas={K(0, "specific")} metin="One prescription version worked, for a specific group" x={1064} y={370} boyut={32} genislik={640} />
    </>
  );
};
export default S02;
