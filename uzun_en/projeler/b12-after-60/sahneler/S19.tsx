// Sahne 19 — metformin ve B12: tezgâh üstünde ilaç şişesi ve glukoz ölçer.
import React from "react";
import { Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, Baslik } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMet = K(0, "metformin,"), tTip = K(0, "type"), tDur = K(1, "nothing"), tB12 = K(2, "B12");
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 120, 1800], [50, 150, 1700])}>
        {/* ölçerin ekranındaki anlamsız yazı örtülür */}
        <div style={{ position: "absolute", left: 1392, top: 702, width: 58, height: 42, background: "#E9E6DE", borderRadius: 8 }} />
        <Etiket t={t} bas={tMet + 0.3} bitis={tDur - 0.1} capa={[690, 620]} konum={[700, 340]} metin="METFORMIN" renk={RENK.altin} />
        <Etiket t={t} bas={tTip} capa={[1500, 690]} konum={[1500, 500]} metin="TYPE 2 DIABETES" renk={RENK.mercan} />
        <Etiket t={t} bas={tDur} bitis={tB12 - 0.1} capa={[690, 620]} konum={[700, 340]} metin="NO REASON TO STOP" renk={RENK.yesil} />
        <Etiket t={t} bas={tB12} capa={[960, 780]} konum={[1000, 570]} metin="B12 OVER MANY YEARS" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={tMet} metin="METFORMIN AND B12" x={960} y={120} boyut={112} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S19;
