// Sahne 57 — Özet: denemelerde potasyum, yüksek tansiyonda ~5 puan düşürdü; normalde net değil. Muz + tansiyon aleti.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMore = K(0, "more potassium"), tFive = K(0, "five"), tHigh = K(0, "high blood"), tNormal = K(0, "normal");
  const [s1, a1] = pop(t, tHigh, 0.55);
  const [s2, a2] = pop(t, tNormal, 0.55);
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={tMore} capa={[430, 520]} konum={[680, 130]} metin="POTASSIUM" renk={RENK.altin} />
      </Kamera>
      <VurguRozet t={t} bas={tFive} vurgu="≈ –5" not="mmHg, top number" x={1480} y={110} genislik={420} />
      <div style={{ position: "absolute", left: 720, top: 260, transform: `scale(${s1})`, transformOrigin: "0 50%", opacity: a1 }}>
        <Hap metin="HIGH BP: LOWER" renk={RENK.yesil} boyut={32} />
      </div>
      <div style={{ position: "absolute", left: 720, top: 345, transform: `scale(${s2})`, transformOrigin: "0 50%", opacity: a2 }}>
        <Hap metin="NORMAL BP: NOT CLEAR" renk={RENK.altin} boyut={32} />
      </div>
    </>
  );
};

export default S57;
