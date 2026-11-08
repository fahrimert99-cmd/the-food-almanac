// Sahne 24 — inme: kohortlarda ≈ %24 daha düşük risk; ilişki, düşük kanıt kalitesi.
import React from "react";
import { Baslik, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik ?? { satirlar: [], vurgu: "", not: "" };
  const tStroke = K(0, "strokes"), t24 = K(1, "24"), tAssoc = K(2, "association"), tLow = K(2, "low in quality");
  const [s1, a1] = pop(t, tAssoc, 0.5);
  const [s2, a2] = pop(t, tLow - 0.3, 0.5);
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [60, 70, 1660])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      <Baslik t={t} bas={tStroke} metin={b.satirlar[0] ?? ""} x={1000} y={250} boyut={130} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={t24} vurgu={b.vurgu ?? ""} not={b.not} x={1450} y={560 + 120} genislik={420} boyut={104} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1000, top: 345, transform: `scale(${s1})`, transformOrigin: "0% 50%", opacity: a1 }}>
        <Hap metin="AN ASSOCIATION" renk={RENK.altin} boyut={28} />
      </div>
      <div style={{ position: "absolute", left: 1000, top: 420, transform: `scale(${s2})`, transformOrigin: "0% 50%", opacity: a2 }}>
        <Hap metin="LOW-QUALITY EVIDENCE" renk={RENK.mercan} boyut={28} />
      </div>
    </>
  );
};

export default S24;
