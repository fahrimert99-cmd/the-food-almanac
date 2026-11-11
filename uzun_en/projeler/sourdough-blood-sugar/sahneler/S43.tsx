// Sahne 43 — Yaş boşluğu: sağda başlık, Maioli yaş aralığı rozeti ve 65 üstü için az kanıt.
import React from "react";
import { Baslik, Hap, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [s1, a1] = pop(t, K(1, "Maioli"), 0.5);
  const [s2, a2] = pop(t, K(2, "little"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 60, 1740])} />
      <Baslik t={t} bas={K(0, "age")} metin="AGE" x={960} y={190} boyut={150} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "age") + 0.2} metin="GAP" x={960} y={340} boyut={150} renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 960, top: 490, opacity: a1, transform: `scale(${s1})`, transformOrigin: "0 50%" }}>
        <Hap metin="MAIOLI TRIAL" renk={RENK.altin} boyut={32} />
      </div>
      <VurguRozet t={t} bas={K(1, "fifty-two")} vurgu="52–75" not="AGE RANGE CONFIRMED" x={1560} y={440} genislik={440} boyut={104} />
      <div style={{ position: "absolute", left: 960, top: 800, opacity: a2, transform: `scale(${s2})`, transformOrigin: "0 50%" }}>
        <Hap metin="LITTLE EVIDENCE OVER 65" renk={RENK.mercan} boyut={36} />
      </div>
      <Not t={t} bas={K(2, "evidence")} metin="age-specific data" x={968} y={880} boyut={30} renk={RENK.gri} />
    </>
  );
};

export default S43;
