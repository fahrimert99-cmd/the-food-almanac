// Sahne 1 — şişe solda, başlık sağdaki boş kâğıtta.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "one"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [20, 10, 1880], [120, 60, 1700])}>
        <Etiket t={t} bas={K(0, "apple")} bitis={K(0, "here")} capa={[470, 620]} konum={[900, 360]} metin="APPLE CIDER VINEGAR" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "vinegar")} satirlar={["VINEGAR", "BEFORE MEALS"]} x={1860} y={250} boyut={110} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} adim={K(0, "before") - K(0, "vinegar")} />
      <Not t={t} bas={K(0, "calm")} metin="to calm your blood sugar" x={1860} y={505} hiza="sag" boyut={40} genislik={800} />
      <div style={{ position: "absolute", right: 60, top: 640, opacity: al, transform: `scale(${sc})`, transformOrigin: "100% 50%" }}>
        <Hap metin="ONE SMALL TRIAL" renk={RENK.altin} boyut={36} />
      </div>
    </>
  );
};

export default S01;
