// Sahne 32 — takviye şişeleri: üstte etiket ve başlık, altta kaynak ve uyarı hapları.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t2012 = K(0, "2012"), tZayif = K(0, "poorly");
  const [s1, a1] = pop(t, t2012, 0.5);
  const [s2, a2] = pop(t, tZayif, 0.5);
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <Etiket t={t} bas={K(0, "supplement")} capa={[653, 300]} konum={[640, 130]} metin="SUPPLEMENTS" renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(0, "very")} satirlar={["VERY HIGH DOSES", "IN ONE GO"]} x={1860} y={190} boyut={76} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <div style={{ position: "absolute", left: 1400, top: 880, transform: `translate(-50%, -50%) scale(${s1})`, opacity: a1 }}>
        <Hap metin="2012 ONCOLOGY REVIEW" renk={RENK.altin} boyut={30} />
      </div>
      <div style={{ position: "absolute", left: 560, top: 880, transform: `translate(-50%, -50%) scale(${s2})`, opacity: a2 }}>
        <Hap metin="POORLY STUDIED" renk={RENK.mercan} boyut={30} />
      </div>
    </>
  );
};

export default S32;
