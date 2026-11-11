// Sahne 11 — soru: yavaş fermantasyon ekmeği gerçekten daha yumuşak mı yapar?
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  return (
    <>
      {/* pencere soldaki eli dışarıda bırakır */}
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [520, 60, 1400], [545, 100, 1350])}>
        <Etiket t={t} bas={K(1, "fermentation")} bitis={K(1, "gentler") - 0.1} capa={[1130, 470]} konum={[1300, 180]} metin="SLOW FERMENTATION" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "trials.")} capa={[727, 330]} konum={[1100, 150]} metin="THE TRIALS" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "question")} bitis={c[1].bas - 0.1} metin="THE QUESTION" x={1850} y={190} boyut={92} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "gentler")} bitis={c[2].bas - 0.1} metin="GENTLER ON" x={1850} y={170} boyut={72} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "blood")} bitis={c[2].bas - 0.1} metin="BLOOD SUGAR?" x={1850} y={252} boyut={72} hiza="sag" renk={RENK.mercan} />
    </>
  );
};

export default S11;
