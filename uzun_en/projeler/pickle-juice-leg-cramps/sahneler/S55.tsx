// Sahne 55 — adım 2: kramp anında bacağı uzat, parmakları çek, masaj; kanıt sınırlı ama zararsız.
import React from "react";
import { Baslik, BaslikBlok, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840]);
  return (
    <>
      <Kamera gorsel="tam/55" pencere={p} />
      <Baslik t={t} bas={0} metin="2" x={1300} y={150} boyut={190} renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(1, "cramp")} satirlar={["STRETCH", "AND MASSAGE"]} x={1300} y={330} boyut={80}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Liste t={t} x={1300} y={500} aralik={100} boyut={30} isaret="sayi" genislik={580} ogeler={[
        { bas: K(1, "straighten"), metin: "STRAIGHTEN THE LEG" },
        { bas: K(1, "pull"), metin: "TOES TOWARD SHIN" },
        { bas: K(1, "gently"), metin: "GENTLY MASSAGE" },
      ]} />
      <Baslik t={t} bas={K(2, "proof")} metin="PROOF IS LIMITED" x={1300} y={840} boyut={38} font="inter" agirlik={800} renk={RENK.altin} />
      <Baslik t={t} bas={K(2, "harmless")} metin="BUT HARMLESS" x={1300} y={895} boyut={38} font="inter" agirlik={800} renk={RENK.koyuYesil} />
    </>
  );
};
export default S55;
