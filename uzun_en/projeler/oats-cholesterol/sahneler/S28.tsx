// Sahne 28 — Yulaf tedavinin yerini almaz; ilaçla birlikte, doktora danışarak. Başlık sol üstte, üç etiket.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNot = K(0, "not a replacement"), tAlong = K(1, "alongside"), tDoc = K(2, "doctor");
  const giris = (bas: number) => {
    const a = eout(ilerle(t, bas, 0.4));
    return { opacity: a, transform: `translateX(${(1 - a) * 30}px)` };
  };
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1800])}>
        <Etiket t={t} bas={K(0, "oats")} bitis={tAlong - 0.2} capa={[1000, 560]} konum={[1230, 330]} metin="OATS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "medicine")} capa={[1280, 670]} konum={[1590, 500]} metin="YOUR MEDICINE" renk={RENK.mercan} />
        <Etiket t={t} bas={tDoc} capa={[515, 805]} konum={[760, 380]} metin="YOUR DOCTOR" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tNot - 0.3} satirlar={["SAFETY", "FIRST"]} x={80} y={150} boyut={118} />
      <div style={{ position: "absolute", right: 60, top: 120, ...giris(tAlong) }}>
        {t >= tAlong && <Hap metin="ALONGSIDE, NOT INSTEAD" renk={RENK.yesil} boyut={30} />}
      </div>
      <div style={{ position: "absolute", right: 60, top: 205, ...giris(tDoc) }}>
        {t >= tDoc && <Hap metin="ASK BEFORE CHANGING MEDICATION" renk={RENK.altin} boyut={28} />}
      </div>
    </>
  );
};

export default S28;
