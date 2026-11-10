// Sahne 16 — kapsül sonucu (–5.3) ve dürüst özet: ekstrenin kanıtı içecekten daha sağlam.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 40, 1860])}>
        <Etiket t={t} bas={K(0, "capsule")} bitis={K(2, "The")} capa={[480, 740]} konum={[250, 140]} metin="EXTRACT CAPSULES" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={K(0, "capsule")} metin={b.satirlar[0]} x={1860} y={190} boyut={96} renk={RENK.koyuYesil} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "5.3")} vurgu={b.vurgu!} not={b.not} x={1640} y={290} genislik={400} renk={RENK.yesil} />
      <Not t={t} bas={K(1, "honest")} metin="THE HONEST SUMMARY" x={1230} y={590} boyut={30} agirlik={800} renk={RENK.altin} />
      <Liste t={t} x={1230} y={650} aralik={100} boyut={34} isaret="nokta" genislik={640}
        ogeler={[
          { bas: K(2, "firmer"), metin: "EXTRACT · FIRMER", renk: RENK.yesil },
          { bas: K(2, "drink"), metin: "DRINK · LESS FIRM", renk: RENK.altin },
        ]} />
    </>
  );
};

export default S16;
