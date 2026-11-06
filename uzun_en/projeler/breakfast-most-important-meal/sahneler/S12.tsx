// Sahne 12 — BMJ 2019 meta-analizi: 13 deney, 7'si kilo ölçtü, ortalama 0,4 kg.
import React from "react";
import { Baslik, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, ilerle, kelimeZamani, pop } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTrials = K(0, "13"), tRand = K(0, "randomized"), tSeven = K(0, "seven"), tKg = K(0, "0.4");
  const tPound = K(0, "one pound"), tHeavy = K(0, "heavier");
  const z = ilerle(t, 0, s.sure);
  const [sp, ap] = pop(t, tSeven, 0.5);
  const [sq, aq] = pop(t, tPound, 0.5);
  const b = s.meta.baslik;
  return (
    <>
      <Kamera gorsel="tam/12" pencere={[0 + 30 * z, 100 + 40 * z, 1920 - 120 * z]} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={tTrials} metin={b?.satirlar[0] ?? ""} x={140} y={230} boyut={140} renk={RENK.koyuYesil} />
      <Not t={t} bas={tRand} metin="RANDOMIZED" x={146} y={330} boyut={38} renk={RENK.lacivert} agirlik={800} />
      <div style={{ position: "absolute", left: 960, top: 440, transform: `translate(-50%, -50%) scale(${sp})`, opacity: ap }}>
        <Hap metin="7 MEASURED WEIGHT" renk={RENK.altin} boyut={34} />
      </div>
      <VurguRozet t={t} bas={tKg} vurgu={b?.vurgu ?? ""} not={b?.not} x={1480} y={130} renk={RENK.mercan} genislik={440} />
      <div style={{ position: "absolute", left: 1480, top: 400, transform: `translate(-50%, -50%) scale(${sq})`, opacity: aq }}>
        <Hap metin="≈ 1 POUND" renk={RENK.lacivert} boyut={34} />
      </div>
    </>
  );
};

export default S12;
