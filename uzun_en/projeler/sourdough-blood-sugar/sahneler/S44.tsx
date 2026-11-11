// Sahne 44 — Serbest geçiş değil: ekmek + steteskop, üstte başlık, sağda hap etiketleri.
import React from "react";
import { Baslik, Etiket, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGent = K(1, "modestly gentler"), tMed = K(1, "replaces");
  const [s1, a1] = pop(t, tGent, 0.5);
  const a1b = a1 * sol(t, tMed - 0.1);
  const [s2, a2] = pop(t, tMed, 0.5);
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 60, 1720])} />
      <Etiket t={t} bas={K(0, "sourdough")} capa={[560, 450]} konum={[250, 330]} metin="SOURDOUGH" renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "free pass")} metin="NOT A FREE PASS" x={960} y={150} boyut={120} renk={RENK.mercan} hiza="orta" />
      {a1b > 0 && (
        <div style={{ position: "absolute", left: 1590, top: 340, transform: `translate(-50%, -50%) scale(${s1})`, opacity: a1b }}>
          <Hap metin="MODESTLY GENTLER" renk={RENK.yesil} boyut={32} />
        </div>
      )}
      <div style={{ position: "absolute", left: 1590, top: 345, transform: `translate(-50%, -50%) scale(${s2})`, opacity: a2 }}>
        <Hap metin="NEVER REPLACES MEDICINE" renk={RENK.mercan} boyut={32} />
      </div>
      <Ikon t={t} bas={tMed + 0.1} ad="carpi" x={1255} y={345} boyut={64} zemin={RENK.mercan} />
      <Etiket t={t} bas={K(1, "care team")} capa={[1230, 725]} konum={[1560, 540]} metin="YOUR CARE TEAM" renk={RENK.lacivert} />
    </>
  );
};

export default S44;
