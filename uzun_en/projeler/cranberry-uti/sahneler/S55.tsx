// Sahne 55 — özet: Cochrane 2023, fayda gören üç grup.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYil = K(0, "2023"), tElli = K(0, "fifty"), tKran = K(0, "cranberry");
  const tKadin = K(0, "women"), tCocuk = K(0, "children,"), tMesane = K(0, "after bladder");
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800])}>
        <Etiket t={t} bas={tKran} capa={[880, 520]} konum={[430, 640]} metin="CRANBERRY JUICE" renk={RENK.mercan} />
      </Kamera>
      {/* sol üst: yıl ve deneme sayısı */}
      <Not t={t} bas={tYil} metin="2023 COCHRANE REVIEW" x={80} y={190} boyut={30} renk={RENK.altin} agirlik={800} />
      <Baslik t={t} bas={tElli} metin="50 TRIALS" x={76} y={310} boyut={120} renk={RENK.koyuYesil} />
      {/* sağ: fayda gören gruplar */}
      <Liste t={t} x={1230} y={230} aralik={110} boyut={34} isaret="onay" genislik={640} ogeler={[
        { bas: tKadin, metin: "WOMEN WITH REPEAT UTIS" },
        { bas: tCocuk, metin: "CHILDREN" },
        { bas: tMesane, metin: "AFTER BLADDER PROCEDURES" },
      ]} />
    </>
  );
};

export default S55;
