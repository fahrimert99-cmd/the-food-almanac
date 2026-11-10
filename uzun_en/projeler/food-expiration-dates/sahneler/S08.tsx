// Sahne 8 — "tarihten sonra da çöpe atma"; görsel sola kayar, sağ panelde maddeler.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, Panel, RENK, SP, kelimeZamani } from "../kutuphane";
import { einout, ilerle } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const z = einout(ilerle(t, 0, s.sure + 0.7));
  const tAj = K(2, "agency"), tBitis = tAj - 0.15;
  return (
    <>
      <Kamera gorsel="tam/08" sinirla={false} pencere={[300 + 30 * z, 10 + 10 * z, 1920 - 90 * z]}>
        <Etiket t={t} bas={K(1, "food")} bitis={tBitis} capa={[900, 410]} konum={[560, 260]} metin="BREAD" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "printed")} capa={[1230, 655]} konum={[1190, 885]} metin="PRINTED DATE" renk={RENK.mercan} />
      </Kamera>
      <Panel a={1} taraf="sag" genislik={900} opak={0.97} />
      <Baslik t={t} bas={0.2} bitis={tBitis} metin="BEST IF USED BY" x={1860} y={215} boyut={32} renk={RENK.altin} font="inter" aralik={5} hiza="sag" />
      <Baslik t={t} bas={K(0, "means")} bitis={tBitis} metin="MEANS WHAT" x={1860} y={300} boyut={104} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "sounds")} bitis={tBitis} metin="IT SAYS" x={1860} y={420} boyut={104} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(1, "best")} bitis={tBitis} metin="FOOD AT ITS BEST UNTIL THEN" x={1860} y={520} hiza="sag" boyut={38} agirlik={800} genislik={640} />
      <Baslik t={t} bas={tAj} metin="THE AGENCY SAYS" x={1210} y={215} boyut={32} renk={RENK.altin} font="inter" aralik={5} />
      <Liste t={t} isaret="onay" x={1200} y={290} aralik={104} boyut={34} genislik={690}
        ogeler={[{ bas: K(2, "wholesome"), metin: "WHOLESOME", renk: RENK.yesil },
                 { bas: K(2, "safe"), metin: "SAFE", renk: RENK.yesil },
                 { bas: K(2, "thrown"), metin: "NOT TOSSED JUST FOR THE DATE", renk: RENK.mercan }]} />
    </>
  );
};

export default S08;
