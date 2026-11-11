// Sahne 40 — ticari katılım: iki rozet + etiket + kapanış başlığı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSon = K(1, "more");
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [140, 70, 1680])} />
      <VurguRozet t={t} bas={K(0, "23")} vurgu="23" not="STUDIES" x={1230} y={130} genislik={330} bitis={tSon - 0.1} />
      <VurguRozet t={t} bas={K(0, "five")} vurgu="5" not="WITH OCEAN SPRAY" x={1640} y={130} genislik={340} renk={RENK.mercan} bitis={tSon - 0.1} />
      <Etiket t={t} bas={K(0, "commercial")} bitis={K(0, "five") + 1.2} capa={[1180, 780]} konum={[1450, 480]} metin="COMMERCIAL INVOLVEMENT" renk={RENK.altin} boyut={28} />
      <BaslikBlok t={t} bas={tSon} satirlar={["MORE", "INDEPENDENT", "TRIALS"]} x={1860} y={170} boyut={92} hiza="sag" />
      <Not t={t} bas={K(1, "reason")} metin="THAT DOESN'T MAKE THEM WRONG" x={1860} y={520} hiza="sag" genislik={640} boyut={32} agirlik={800} renk={RENK.koyuYesil} />
    </>
  );
};

export default S40;
