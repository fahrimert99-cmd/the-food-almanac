// Sahne 57 — özet: soğutma dirençli nişastayı artırır; ~%18 daha küçük yanıt.
import React from "react";
import { Etiket, Kamera, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCool = K(0, "Cooling"), tRS = K(0, "resistant starch"), tSmall = K(1, "small trials"), tHealthy = K(1, "healthy adults");
  const tRe = K(1, "cooled"), tMod = K(1, "modestly"), t18 = K(1, "18");
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1730])}>
        <Etiket t={t} bas={tCool} bitis={tSmall} capa={[880, 700]} konum={[1020, 860]} metin="COOLED RICE" renk={RENK.lacivert} />
        <Etiket t={t} bas={tRS} capa={[1300, 260]} konum={[1020, 190]} metin="RESISTANT STARCH" renk={RENK.altin} />
      </Kamera>
      <Liste t={t} x={100} y={100} aralik={70} boyut={32} isaret="nokta" genislik={760} ogeler={[
        { bas: tSmall, metin: "SMALL TRIALS", renk: RENK.altin },
        { bas: tHealthy, metin: "HEALTHY ADULTS", renk: RENK.altin },
        { bas: tRe, metin: "COOLED + REHEATED RICE", renk: RENK.yesil },
        { bas: tMod, metin: "MODESTLY SMALLER RESPONSE", renk: RENK.yesil },
      ]} />
      <VurguRozet t={t} bas={t18} vurgu="–18%" not="one trial" x={1530} y={650} genislik={380} />
    </>
  );
};
export default S57;
