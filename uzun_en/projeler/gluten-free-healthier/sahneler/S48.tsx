// Sahne 48 — doktora danış: telefon, takvim, defter.
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Hap, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800]);
  const c1 = K(2, "Please") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kam}>
        <Etiket t={t} bas={K(1, "your doctor")} bitis={c1} capa={[470, 520]} konum={[250, 160]} metin="YOUR DOCTOR" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "be tested")} bitis={c1} capa={[1500, 560]} konum={[1500, 190]} metin="ASK ABOUT TESTING" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "don't worry")} bitis={K(1, "Just") - 0.1} metin="DON'T WORRY" x={140} y={140} boyut={110} renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={K(2, "don't restart")} satirlar={["DON'T RESTART", "ON YOUR OWN"]} x={1860} y={150} boyut={80} hiza="sag"
        renkler={[RENK.mercan, RENK.lacivert]} />
      {t >= K(3, "Let your") && (
        <div style={{ position: "absolute", left: 140, top: 100, opacity: eout(ilerle(t, K(3, "Let your"), 0.5)) }}>
          <Hap metin="LET YOUR DOCTOR GUIDE YOU" renk={RENK.koyuYesil} boyut={34} />
        </div>
      )}
    </>
  );
};
export default S48;
