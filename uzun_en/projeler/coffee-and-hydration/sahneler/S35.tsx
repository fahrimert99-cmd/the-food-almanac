// Sahne 35 — kısa çalışmalar: süreler ve kapsam sınırları.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(2, "measured")} capa={[380, 420]} konum={[380, 150]} metin="MEASURED AMOUNTS" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "funded")} capa={[860, 700]} konum={[1000, 860]} metin="INDUSTRY-FUNDED" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "short.")} satirlar={s.meta.baslik!.satirlar} x={1560} y={200} boyut={116} hiza="orta" />
      <Liste t={t} x={1230} y={500} aralik={104} boyut={38} isaret="nokta" genislik={640} ogeler={[
        { bas: K(1, "eleven"), metin: "LONGEST: 11 DAYS", renk: RENK.altin },
        { bas: K(1, "three"), metin: "OTHERS: 3 DAYS", renk: RENK.altin },
        { bas: K(1, "four"), metin: "OR 4 HOURS", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S35;
