// Sahne 39 — Chey 2021: 75 yetişkin; 100 g erik kurusu, psyllium ya da iki kivi, dört hafta.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "four weeks"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 60, 1800])}>
        <Etiket t={t} bas={K(0, "prunes")} capa={[380, 450]} konum={[380, 365]} metin="100 G PRUNES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "psyllium")} capa={[1540, 430]} konum={[1540, 365]} metin="PSYLLIUM" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "two green")} capa={[960, 450]} konum={[960, 365]} metin="2 KIWIFRUIT" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.1} />
      <Baslik t={t} bas={K(0, "2021")} metin="2021 TRIAL" x={140} y={170} boyut={96} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "partly")} metin="SMALL, PARTLY RANDOMIZED" x={140} y={232} boyut={28} renk={RENK.gri} agirlik={800} genislik={560} />
      <VurguRozet t={t} bas={K(0, "75")} vurgu="75" not="adults, chronic constipation" x={890} y={110} genislik={420} boyut={84} />
      <VurguRozet t={t} bas={K(0, "average")} vurgu="≈ 43" not="average age" x={1340} y={110} genislik={300} boyut={84} />
      <div style={{ position: "absolute", left: 960, top: 880, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="FOR 4 WEEKS" renk={RENK.lacivert} boyut={34} />
      </div>
    </>
  );
};

export default S39;
