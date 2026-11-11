// Sahne 30 — fazla vakalar eski sigara içenlerde; AREDS2 formülü
import React from "react";
import { Baslik, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBit = K(1, "That's") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 40, 1880], [70, 90, 1760])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Baslik t={t} bas={K(0, "extra")} bitis={tBit} metin="EXTRA LUNG" x={70} y={250} boyut={80} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "lung") } bitis={tBit} metin="CANCERS" x={70} y={335} boyut={80} renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "mostly")} bitis={tBit} metin="mostly in" x={74} y={410} boyut={36} agirlik={800} />
      <Baslik t={t} bas={K(0, "former")} bitis={tBit} metin="FORMER SMOKERS" x={70} y={500} boyut={90} renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "AREDS2")} metin="AREDS2 FORMULA" x={1860} y={230} boyut={84} hiza="sag" renk={RENK.koyuYesil} />
      <Liste t={t} isaret="carpi" x={1300} y={340} genislik={560} boyut={38} ogeler={[
        { bas: K(1, "beta-carotene"), metin: "BETA-CAROTENE", renk: RENK.mercan },
      ]} />
      <Liste t={t} isaret="onay" x={1300} y={430} aralik={86} genislik={560} boyut={38} ogeler={[
        { bas: K(1, "lutein"), metin: "LUTEIN", renk: RENK.yesil },
        { bas: K(1, "zeaxanthin"), metin: "ZEAXANTHIN", renk: RENK.yesil },
      ]} />
    </>
  );
};

export default S30;
