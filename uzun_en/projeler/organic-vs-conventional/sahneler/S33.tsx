// Sahne 33 — farklı yaşam tarzları: mutfak solda, sağda beş maddelik liste.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const ogeler = [
    { bas: K(1, "better"), metin: "BETTER EDUCATED" },
    { bas: K(1, "higher incomes"), metin: "HIGHER INCOMES" },
    { bas: K(1, "healthier diets"), metin: "HEALTHIER DIETS" },
    { bas: K(1, "more active"), metin: "MORE ACTIVE" },
    { bas: K(1, "weighed less"), metin: "WEIGHED LESS" },
  ];
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1800])}>
        {/* duvardaki sahte yazılı not kâğıt rengi yamayla örtülür */}
        <div style={{ position: "absolute", left: 845, top: 305, width: 130, height: 120,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #ECE7D8 0%, #ECE7D8 60%, rgba(236,231,216,0) 100%)" }} />
      </Kamera>
      <BaslikBlok t={t} bas={0.3} satirlar={["DIFFERENT", "LIFESTYLES"]} x={1050} y={190} boyut={96} />
      <Liste t={t} ogeler={ogeler} x={1050} y={420} aralik={100} boyut={42} isaret="onay" genislik={800} />
      <Etiket t={t} bas={K(1, "healthier diets")} capa={[330, 640]} konum={[430, 830]} metin="VEGETABLES" renk={RENK.yesil} boyut={26} />
      <Etiket t={t} bas={K(1, "more active")} capa={[760, 930]} konum={[880, 830]} metin="WALKING SHOES" renk={RENK.altin} boyut={26} />
    </>
  );
};
export default S33;
