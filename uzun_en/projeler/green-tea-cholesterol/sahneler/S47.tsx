// Sahne 47 — varfarinle tutarlılık: solda eczacı rafı, sağda başlık ve üç adım.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 30, 1820])} />
      <Etiket t={t} bas={K(0, "consistency")} bitis={K(1, "Keep") - 0.1} capa={[840, 790]} konum={[1550, 520]} metin="CONSISTENCY" renk={RENK.yesil} />
      <BaslikBlok t={t} bas={K(1, "Keep")} satirlar={["KEEP IT", "STEADY"]} x={1300} y={170} boyut={130} />
      <Liste t={t} x={1300} y={560} aralik={110} boyut={32} isaret="onay" genislik={560} ogeler={[
        { bas: K(1, "anticoagulation"), metin: "TELL YOUR CLINIC" },
        { bas: K(2, "differently"), metin: "NEWER THINNERS DIFFER", renk: RENK.altin },
        { bas: K(2, "pharmacist"), metin: "ASK YOUR PHARMACIST" },
      ]} />
    </>
  );
};

export default S47;
