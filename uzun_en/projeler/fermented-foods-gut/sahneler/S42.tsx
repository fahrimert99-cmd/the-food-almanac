// Sahne 42 — sade yoğurtta şekeri sen seçersin; şeker kalori ekler, kültür eklemez.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = K(1, "Sugar") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={K(0, "Plain")} bitis={bit} capa={[700, 600]} konum={[1330, 640]} metin="PLAIN" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "in charge")} satirlar={["YOU CHOOSE", "THE SUGAR"]} x={1860} y={270} boyut={116} hiza="sag"
        adim={K(0, "what goes") - K(0, "in charge")} />
      <Liste t={t} x={1220} y={560} aralik={96} boyut={38} isaret="carpi" genislik={650} ogeler={[
        { bas: K(1, "calories"), metin: "ADDS CALORIES", renk: RENK.mercan },
        { bas: K(1, "without adding"), metin: "NO ADDED CULTURES", renk: RENK.mercan },
        { bas: K(1, "blood"), metin: "BLOOD SUGAR & WEIGHT", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S42;
