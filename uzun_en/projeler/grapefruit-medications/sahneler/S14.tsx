// Sahne 14 — ekstra ilaçla gelen etkiler, portakal suyu değişiklik yapmadı.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, Kamera, Liste, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOran = K(1, "Orange juice");
  const tHic = K(1, "none");
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 40, 1900], [30, 90, 1760])}>
        <Etiket t={t} bas={K(0, "extra drug")} bitis={tOran - 0.2} capa={[760, 700]} konum={[1180, 640]} metin="EXTRA DRUG" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "juice")} capa={[600, 560]} konum={[1180, 520]} metin="NO CHANGES" renk={RENK.yesil} />
      </Kamera>
      <Liste t={t} x={1060} y={170} isaret="nokta" boyut={40} aralik={84} genislik={800} ogeler={[
        { bas: K(0, "lower"), metin: "LOWER BLOOD PRESSURE", renk: RENK.mercan, bitis: tOran - 0.2 },
        { bas: K(0, "faster"), metin: "FASTER HEART RATE", renk: RENK.mercan, bitis: tOran - 0.2 },
        { bas: K(0, "more side"), metin: "MORE SIDE EFFECTS", renk: RENK.mercan, bitis: tOran - 0.2 },
      ]} />
      <BaslikBlok t={t} bas={tOran} satirlar={["ORANGE JUICE:", "NO CHANGE"]} x={1860} y={190} boyut={100} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Ikon t={t} bas={tHic + 0.2} ad="onay" x={1010} y={520} boyut={80} />
    </>
  );
};

export default S14;
