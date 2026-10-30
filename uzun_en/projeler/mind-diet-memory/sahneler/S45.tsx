// Sahne 45 — meyveler: haftada birkaç kez, MIND hedefi iki porsiyon; taze/dondurulmuş, yulafta.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const [sc, al] = pop(t, K(2, "easy"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={K(0, "berries")} bitis={c[2].bas} capa={[800, 440]} konum={[250, 210]} metin="BERRIES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "frozen")} capa={[930, 380]} konum={[300, 330]} metin="FRESH OR FROZEN" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(2, "oatmeal")} capa={[560, 540]} konum={[250, 520]} metin="ON OATMEAL" renk={RENK.altin} />
      </Kamera>
      <VurguRozet t={t} bas={K(1, "two")} vurgu="2 SERVINGS" not="the MIND target" x={1600} y={130} genislik={420} boyut={84} />
      <div style={{ position: "absolute", left: 1420, top: 790, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="AN EASY START" renk={RENK.yesil} boyut={30} />
      </div>
    </>
  );
};

export default S45;
