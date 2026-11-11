// Sahne 58 — ısı faydalı da olabilir: likopen, beta-karoten ve yağ.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760])} />
      <Baslik t={t} bas={K(0, "heat")} metin="HEAT CAN" x={70} y={170} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "also")} metin="ALSO HELP" x={70} y={290} boyut={110} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(1, "lycopene")} capa={[600, 640]} konum={[230, 560]} metin="LYCOPENE" renk={RENK.mercan} />
      <Etiket t={t} bas={K(1, "beta-carotene")} capa={[1230, 640]} konum={[1560, 520]} metin="BETA-CAROTENE" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "little")} capa={[890, 420]} konum={[1330, 310]} metin="A LITTLE OIL" renk={RENK.yesil} />
      <Baslik t={t} bas={K(1, "easier")} metin="EASIER TO TAKE UP" x={1850} y={140} boyut={52} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S58;
