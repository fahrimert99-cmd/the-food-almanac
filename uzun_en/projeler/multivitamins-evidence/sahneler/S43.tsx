// Sahne 43 — kan testi ve doktor/eczacı tavsiyesi.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b1 = s.cumleler[1].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [70, 90, 1780])}>
        <Etiket t={t} bas={K(1, "doctor")} capa={[700, 730]} konum={[640, 470]} metin="DOCTOR OR PHARMACIST" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "blood")} bitis={b1} metin="BLOOD TEST" x={1860} y={140} boyut={104} renk={RENK.koyuYesil} hiza="sag" />
      <Baslik t={t} bas={K(0, "doctor's")} bitis={b1} metin="+ DOCTOR'S ADVICE" x={1860} y={245} boyut={60} renk={RENK.lacivert} hiza="sag" />
      <Not t={t} bas={K(0, "especially")} bitis={b1} metin="ESPECIALLY IF YOU HAVE:" x={1860} y={330} hiza="sag" boyut={30} renk={RENK.altin} agirlik={800} />
      <Liste t={t} isaret="nokta" x={1300} y={400} aralik={74} boyut={34} genislik={580}
        ogeler={[{ bas: K(0, "kidney"), metin: "KIDNEY DISEASE", renk: RENK.altin, bitis: b1 }, { bas: K(0, "bone"), metin: "BONE LOSS", renk: RENK.altin, bitis: b1 },
          { bas: K(0, "take"), metin: "OTHER MEDICINES", renk: RENK.altin, bitis: b1 }]} />
      <Baslik t={t} bas={K(1, "amounts")} metin="RIGHT AMOUNTS" x={1860} y={150} boyut={90} renk={RENK.koyuYesil} hiza="sag" />
      <Liste t={t} isaret="onay" x={1220} y={270} aralik={92} boyut={34} genislik={660}
        ogeler={[{ bas: K(1, "fit"), metin: "FIT YOUR SITUATION" }, { bas: K(1, "clashes"), metin: "NO CLASH WITH PRESCRIPTIONS" }]} />
    </>
  );
};

export default S43;
