// Sahne 16 — "çok az klinik kanıt": raf + büyüteç solda, sağda başlık ve güçlü/zayıf kanıt listesi.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(0, "very little"), tKlinik = K(0, "clinical evidence");
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        <Etiket t={t} bas={tKlinik} bitis={5.0} capa={[870, 625]} konum={[620, 850]} metin="CLINICAL EVIDENCE" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tBaslik} bitis={5.0} satirlar={s.meta.baslik!.satirlar} x={1190} y={200} boyut={100}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Baslik t={t} bas={K(1, "small studies")} metin="SOME SMALL STUDIES SUGGESTED" x={1190} y={190} boyut={28} renk={RENK.altin}
        font="inter" aralik={2} />
      <Liste t={t} x={1190} y={250} aralik={88} boyut={36} isaret="nokta" genislik={680}
        ogeler={[{ bas: K(1, "liver detoxification"), metin: "LIVER DETOXIFICATION", renk: RENK.altin },
          { bas: K(1, "lower pollutants"), metin: "LOWER POLLUTANTS", renk: RENK.altin }]} />
      <Baslik t={t} bas={K(1, "but those")} metin="BUT THOSE STUDIES HAD" x={1190} y={520} boyut={28} renk={RENK.lacivert}
        font="inter" aralik={2} />
      <Liste t={t} x={1190} y={570} aralik={88} boyut={36} isaret="carpi" genislik={680}
        ogeler={[{ bas: K(1, "methodological"), metin: "METHODOLOGICAL FLAWS", renk: RENK.mercan },
          { bas: K(1, "small samples"), metin: "SMALL SAMPLES", renk: RENK.mercan }]} />
    </>
  );
};

export default S16;
