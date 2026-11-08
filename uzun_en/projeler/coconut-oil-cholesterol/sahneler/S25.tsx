// Sahne 25 — kilo, bel ve vücut yağı üç grupta fark göstermedi (4 hafta).
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 20, 1800])}>
        <Etiket t={t} bas={K(0, "waist")} capa={[560, 945]} konum={[1180, 900]} metin="WAIST SIZE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "body")} capa={[770, 850]} konum={[1180, 700]} metin="BODY FAT" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "Weight")} satirlar={["NO WEIGHT", "DIFFERENCE"]} x={1860} y={170} boyut={100} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "four")} vurgu="4 WEEKS" not="same in all three groups" x={1560} y={430} genislik={420} boyut={88} />
    </>
  );
};

export default S25;
