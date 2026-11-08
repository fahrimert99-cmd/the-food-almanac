// Sahne 46 — 2. yol: özel günler için bir çay kaşığı; her gün bir kaşık dolusu değil.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTsp = K(2, "teaspoon"), tDiff = K(2, "different"), tSpoonful = K(2, "spoonful");
  const [sn, an] = pop(t, 0.05, 0.6);
  const [so, ao] = pop(t, K(1, "occasions"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760])}>
        <Etiket t={t} bas={K(1, "coconut")} bitis={tTsp - 0.1} capa={[480, 560]} konum={[950, 330]} metin="COCONUT OIL" renk={RENK.altin} />
        <Etiket t={t} bas={tTsp} bitis={tSpoonful - 0.1} capa={[735, 885]} konum={[260, 690]} metin="A TEASPOON" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "granola")} capa={[1150, 700]} konum={[1520, 560]} metin="GRANOLA" renk={RENK.altin} />
        <Etiket t={t} bas={tSpoonful} capa={[735, 885]} konum={[260, 690]} metin="DAILY SPOONFUL" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 1100, top: 105, width: 130, height: 130, borderRadius: "50%", background: RENK.altin, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 90, opacity: an, transform: `scale(${sn})` }}>2</div>
      <BaslikBlok t={t} bas={K(1, "keep")} satirlar={["A TEASPOON,", "NOT A SPOON"]} x={1860} y={170} boyut={92} hiza="sag" />
      {ao > 0 && (
        <div style={{ position: "absolute", left: 1860, top: 440, opacity: ao, transform: `translateX(-100%) scale(${so})`, transformOrigin: "100% 50%" }}>
          <Hap metin="FOR OCCASIONS" renk={RENK.altin} boyut={32} />
        </div>
      )}
      <VurguRozet t={t} bas={tDiff} vurgu="VERY DIFFERENT" not="teaspoon vs. daily spoonful" x={1560} y={530} boyut={64} genislik={560} renk={RENK.mercan} />
    </>
  );
};

export default S46;
