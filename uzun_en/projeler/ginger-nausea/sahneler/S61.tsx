// Sahne 61 — dozlar: kapsül, çay, zencefilli gazoz; yanlarda sayı rozetleri.
import React from "react";
import { Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S61: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tK = K(1, "Capsules");
  return (
    <>
      <Kamera gorsel="tam/61" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={tK} capa={[560, 640]} konum={[360, 300]} metin="CAPSULES: A NUMBER" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "tea is real")} capa={[800, 500]} konum={[800, 110]} metin="TEA: UNKNOWN STRENGTH" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "ginger ale")} capa={[1230, 420]} konum={[1640, 250]} metin="GINGER ALE" renk={RENK.mercan} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "one gram")} bitis={tK - 0.15} vurgu="≈ 1 G" not="a day in the trials" x={1700} y={380} genislik={340} boyut={100} />
      <VurguRozet t={t} bas={K(1, "2 percent")} vurgu="< 2%" not="ginger extract, one major brand" x={1700} y={500} genislik={340} boyut={100} renk={RENK.mercan} />
    </>
  );
};

export default S61;
