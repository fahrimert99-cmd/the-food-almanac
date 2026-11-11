// Sahne 37 — en yüksek sirke dozu: sağda onaylı liste, ölçer ve ekmek etiketleri.
import React from "react";
import { Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, Ikon } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kp = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800]);
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kp}>
        <Etiket t={t} bas={K(0, "highest")} capa={[360, 700]} konum={[290, 330]} metin="HIGHEST DOSE" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={K(1, "bread label")} capa={[1300, 700]} konum={[1560, 500]} metin="BREAD LABEL" renk={RENK.mercan} />
      </Kamera>
      <Liste t={t} x={990} y={150} aralik={90} boyut={36} isaret="onay" genislik={820} ogeler={[
        { bas: K(0, "glucose"), metin: "SMALLER GLUCOSE RISE", renk: RENK.yesil },
        { bas: K(0, "insulin"), metin: "SMALLER INSULIN RISE", renk: RENK.yesil },
      ]} />
      <Ikon t={t} bas={K(0, "first half")} ad="saat" x={1020} y={385} boyut={64} zemin={RENK.lacivert} />
      <Not t={t} bas={K(0, "first half")} metin="FIRST HALF HOUR OR SO" x={1075} y={358} boyut={34} agirlik={800} />
    </>
  );
};
export default S37;
