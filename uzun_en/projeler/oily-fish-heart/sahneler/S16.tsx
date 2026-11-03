// Sahne 16 — terazi neredeyse dengede: kapsüllerin ölçülebilir etkisi küçük.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860])}>
        <Etiket t={t} bas={K(0, "capsules")} capa={[560, 640]} konum={[330, 880]} metin="CAPSULES" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "little")} satirlar={["LITTLE", "MEASURABLE", "DIFFERENCE"]} x={1530} y={230} boyut={62}
        renkler={[RENK.lacivert, RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(0, "five")} metin="over about five years" x={1534} y={430} boyut={28} />
    </>
  );
};

export default S16;
