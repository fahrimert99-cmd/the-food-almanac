// Sahne 6 — vücut biraz sodyuma ihtiyaç duyar, ama çoğu kişi fazlasını yer
import React from "react";
import { Baslik, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [20, 10, 1880], [70, 45, 1780])}>
        <Etiket t={t} bas={K(0, "little")} capa={[560, 540]} konum={[215, 560]} metin="A LITTLE" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "sodium")} metin="SODIUM HELPS WITH" x={56} y={110} boyut={28} renk={RENK.altin} font="inter" aralik={4} />
      <Liste t={t} isaret="onay" boyut={30} x={56} y={145} aralik={62} genislik={470}
        ogeler={[
          { bas: K(0, "fluids"), metin: "FLUID BALANCE" },
          { bas: K(0, "nerves"), metin: "NERVES" },
          { bas: K(0, "muscles"), metin: "MUSCLES" },
        ]} />
      <Baslik t={t} bas={K(1, "far")} metin="FAR MORE THAN NEEDED" x={1860} y={140} boyut={70} renk={RENK.mercan} hiza="sag" />
    </>
  );
};

export default S06;
