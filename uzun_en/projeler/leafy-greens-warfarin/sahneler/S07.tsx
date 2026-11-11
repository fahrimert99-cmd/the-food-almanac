import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, MARKA, Not, Panel, RENK, SP, VurguRozet, eout,
  ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// Sahne 7 — terazi; sağda "tug of war" başlığı ve karşıt satırlar
const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bitisA = K(2, "less") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={K(0, "vitamin")} capa={[250, 640]} konum={[240, 170]} metin="VITAMIN K" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "warfarin's")} capa={[900, 640]} konum={[980, 170]} metin="WARFARIN" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "pulls")} metin="A TUG" x={1200} y={260} boyut={150} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "opposite")} metin="OF WAR" x={1200} y={405} boyut={150} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "more")} bitis={bitisA} metin="MORE VITAMIN K" x={1200} y={600} boyut={64} renk={RENK.yesil} />
      <Baslik t={t} bas={K(1, "weaken")} bitis={bitisA} metin="WEAKER EFFECT" x={1200} y={680} boyut={64} renk={RENK.mercan} />
      <Baslik t={t} bas={K(2, "less")} metin="LESS VITAMIN K" x={1200} y={600} boyut={64} renk={RENK.altin} />
      <Baslik t={t} bas={K(2, "stronger.")} metin="STRONGER EFFECT" x={1200} y={680} boyut={64} renk={RENK.mercan} />
    </>
  );
};

export default S07;
