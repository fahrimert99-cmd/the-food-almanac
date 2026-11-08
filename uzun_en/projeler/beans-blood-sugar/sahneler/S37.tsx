// Sahne 37 — güvenlik: görsel solda, sağdaki boş kâğıtta başlık ve liste.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "doses"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860])}>
        <Etiket t={t} bas={K(0, "insulin")} bitis={K(0, "tell")} capa={[600, 400]} konum={[800, 170]} metin="INSULIN" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={0.2} satirlar={["SAFETY", "FIRST"]} x={1040} y={190} boyut={104} />
      <Liste t={t} x={1040} y={470} aralik={84} boyut={34} isaret="nokta" genislik={840}
        ogeler={[
          { bas: K(0, "insulin"), metin: "INSULIN", renk: RENK.altin },
          { bas: K(0, "sulfonylureas,"), metin: "SULFONYLUREAS", renk: RENK.altin },
          { bas: K(0, "tell your"), metin: "TELL YOUR DOCTOR OR PHARMACIST", renk: RENK.yesil },
          { bas: K(0, "big change"), metin: "BEFORE A BIG DIET CHANGE", renk: RENK.lacivert },
        ]} />
      <div style={{ position: "absolute", left: 1460, top: 850, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="DOSES MAY NEED ADJUSTING" renk={RENK.mercan} boyut={32} />
      </div>
    </>
  );
};

export default S37;
