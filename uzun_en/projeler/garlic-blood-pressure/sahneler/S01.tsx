// Sahne 1 — sarımsak ve tansiyon aleti, 2016 derlemesinin rakamları.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kapat = K(1, "2016") - 0.2;
  const tSon = K(1, "five points") - 0.5;
  const sat = [
    { m: "2016 REVIEW", b: K(1, "2016"), r: RENK.altin },
    { m: "20 TRIALS", b: K(1, "20 trials"), r: RENK.lacivert },
    { m: "970 PEOPLE", b: K(1, "970 people"), r: RENK.koyuYesil },
  ];
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [40, 22, 1840], [110, 58, 1700])}>
        <Etiket t={t} bas={K(0, "garlic")} bitis={kapat} capa={[830, 430]} konum={[330, 330]} metin="GARLIC" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(0, "blood pressure")} bitis={kapat} capa={[1450, 200]} konum={[1330, 100]} metin="BLOOD PRESSURE" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(1, "2016") - 0.3} />
      {sat.map((x, i) => (
        <Baslik key={x.m} t={t} bas={x.b} bitis={tSon} metin={x.m} x={70} y={i === 0 ? 195 : 195 + i * 100} boyut={i === 0 ? 70 : 84} renk={x.r} />
      ))}
      <VurguRozet t={t} bas={K(1, "five points")} vurgu="≈ –5" not="points systolic" x={300} y={170} genislik={400} />
    </>
  );
};

export default S01;
