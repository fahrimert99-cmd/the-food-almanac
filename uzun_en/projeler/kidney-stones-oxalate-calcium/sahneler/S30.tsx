// Sahne 30 — ikinci test seti: 200 mg+ kalsiyum, ~200 mg oksalat
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKucuk = K(1, "small,");
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [140, 90, 1640])} />
      <Baslik t={t} bas={0.3} bitis={tKucuk - 0.2} metin="SECOND SET OF TESTS" x={140} y={130} boyut={78} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(0, "200")} bitis={tKucuk - 0.2} capa={[940, 310]} konum={[1000, 215]} metin="200 MG+ CALCIUM" renk={RENK.altin} />
      <Etiket t={t} bas={K(0, "against")} bitis={tKucuk - 0.2} capa={[1400, 520]} konum={[1560, 250]} metin="~200 MG OXALATE" renk={RENK.mercan} />
      <Baslik t={t} bas={tKucuk} metin="SMALL, SHORT TESTS" x={140} y={130} boyut={78} renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "but")} metin="but the direction was clear" x={146} y={205} boyut={36} renk={RENK.koyuYesil} agirlik={800} />
      <Ikon t={t} bas={K(1, "clear")} ad="onay" x={680} y={236} boyut={64} />
    </>
  );
};
export default S30;
