// Sahne 53 — Adım 2: ilaç prospektüsünde "grapefruit" kelimesini ara. Sol boş kâğıtta başlık, sağda nesneler.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [200, 60, 1640]);
  const b = s.meta.baslik?.satirlar ?? ["READ THE", "INSERT"];
  return (
    <>
      <Kamera gorsel="tam/53" pencere={pencere}>
        <Etiket t={t} bas={K(1, "Drug Facts")} capa={[1050, 850]} konum={[920, 560]} metin="DRUG FACTS LABEL" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={K(1, "grapefruit")} capa={[1600, 720]} konum={[1610, 480]} metin="GRAPEFRUIT" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={0.0} metin="STEP 2" x={150} y={250} boyut={32} renk={RENK.altin} font="inter" aralik={8} />
      <Baslik t={t} bas={K(1, "paper")} metin={b[0]} x={146} y={370} boyut={150} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "paper") + 0.18} metin={b[1]} x={146} y={520} boyut={150} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(2, "FDA")} vurgu="FDA" not="RECOMMENDS THIS TOO" x={420} y={650} boyut={96} genislik={420} />
    </>
  );
};

export default S53;
