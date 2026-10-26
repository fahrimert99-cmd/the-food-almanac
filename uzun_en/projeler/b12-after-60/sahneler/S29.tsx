// Sahne 29 — eczane: önce güvenlik, doktor/eczacıya sor. Sağda başlık + iki maddelik liste.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 40, 1780], [50, 80, 1680])}>
        <Etiket t={t} bas={K(1, "Many")} bitis={K(2, "The") - 0.1} capa={[703, 800]} konum={[1000, 700]}
          metin="MANY NEED THEM" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "pharmacist")} bitis={K(2, "ask") - 0.2} capa={[250, 430]} konum={[760, 480]}
          metin="DOCTOR OR PHARMACIST" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "reason")} satirlar={b.satirlar} x={1860} y={190} boyut={104} hiza="sag" />
      <Liste t={t} isaret="sayi" x={1010} y={500} aralik={100} boyut={34} genislik={850} ogeler={[
        { bas: K(2, "how long"), metin: "HOW LONG YOU'VE TAKEN THEM", renk: RENK.altin },
        { bas: K(2, "ask"), metin: "ASK IF B12 SHOULD BE CHECKED", renk: RENK.koyuYesil },
      ]} />
    </>
  );
};

export default S29;
