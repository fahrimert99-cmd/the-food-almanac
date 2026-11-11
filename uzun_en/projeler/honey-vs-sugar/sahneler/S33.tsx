// Sahne 33 — Yüksek doz yorumu; "doğal" her zaman güvenli demek değil.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDoz = K(0, "high doses"), tBir = K(1, "one trial"), tDogal = K(1, "natural");
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [60, 60, 1800], [150, 110, 1650])}>
        {/* sağ alttaki sahte yazıyı kâğıt rengiyle örter */}
        <div style={{ position: "absolute", left: 1660, top: 960, width: 220, height: 90,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, #F9F7DA 0%, #F9F7DA 60%, rgba(249,247,218,0) 100%)` }} />
        <Etiket t={t} bas={tDoz} bitis={tBir - 0.1} capa={[440, 560]} konum={[900, 300]} metin="HIGH DOSES" renk={RENK.mercan} />
        <Etiket t={t} bas={tBir} capa={[1120, 590]} konum={[1380, 480]} metin="ONE TRIAL" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tDogal} satirlar={["NATURAL IS NOT", "AUTOMATICALLY SAFE"]} x={1860} y={170} boyut={84} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S33;
