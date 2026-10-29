// Sahne 50 — adım 2: öğün başına 25–30 g; tavuk ve yumurta için kaba rehber.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sn, an] = pop(t, 0.0, 0.5);
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 36, 1780])}>
        <Etiket t={t} bas={K(2, "three")} capa={[430, 500]} konum={[400, 230]} metin="3 OZ CHICKEN ≈ 26 G" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "large")} capa={[1000, 400]} konum={[1390, 560]} metin="1 EGG ≈ 6 G" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 1290, top: 150, width: 104, height: 104, borderRadius: "50%", background: RENK.altin,
        color: "#fff", transform: `scale(${sn})`, opacity: an, display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: ANTON, fontSize: 70 }}>2</div>
      <VurguRozet t={t} bas={K(1, "25")} vurgu="25–30 G" not="AT EACH MEAL" x={1630} y={140} genislik={420} boyut={100} />
      <BaslikBlok t={t} bas={K(2, "rough")} satirlar={["ROUGH GUIDE"]} x={1300} y={440} boyut={76} renkler={[RENK.koyuYesil]} />
    </>
  );
};

export default S50;
