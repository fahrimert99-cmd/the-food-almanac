// Sahne 55 — özet: ağız bakterileri, antiseptik gargara etkiyi köreltebilir; saatler içinde zirve, bırakınca söner.
import React from "react";
import { Etiket, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBact = K(0, "bacteria"), tAnti = K(0, "antiseptic"), tPeak = K(1, "peaks"), tFades = K(1, "fades");
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 30, 1720])}>
        {/* sağ alttaki imza kalıntısı */}
        <div style={{ position: "absolute", left: 1660, top: 1010, width: 300, height: 100,
          background: `radial-gradient(ellipse 60% 60% at 60% 50%, ${kagit(1)} 0%, ${kagit(1)} 85%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tBact} bitis={tAnti - 0.1} capa={[975, 830]} konum={[975, 915]} metin="MOUTH BACTERIA" renk={RENK.yesil} />
        <Etiket t={t} bas={tAnti} bitis={tPeak - 0.1} capa={[1340, 330]} konum={[1500, 150]} metin="ANTISEPTIC MOUTHWASH" renk={RENK.mercan} />
        <Etiket t={t} bas={tPeak} bitis={tFades - 0.1} capa={[480, 520]} konum={[560, 120]} metin="PEAKS WITHIN HOURS" renk={RENK.altin} />
        <Etiket t={t} bas={tFades} capa={[480, 520]} konum={[560, 120]} metin="FADES WHEN YOU STOP" renk={RENK.mercan} />
      </Kamera>
    </>
  );
};

export default S55;
