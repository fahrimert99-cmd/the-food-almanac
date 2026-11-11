// Sahne 16 — kemik yoğunluğu biraz yüksek, kırıklarda belirgin düşüş yok. Kalça kemiği + süt + hap solda.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik;
  const tHip = K(0, "Hip"), tBir = K(0, "1"), tSup = K(0, "supplements"), tAma = K(1, "But");
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [60, 60, 1780])}>
        <Etiket t={t} bas={tHip} capa={[250, 260]} konum={[330, 110]} metin="HIP BONE" renk={RENK.altin} />
        <Etiket t={t} bas={tSup} capa={[1030, 560]} konum={[1260, 330]} metin="CALCIUM + D" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tHip + 0.1} satirlar={b?.satirlar ?? []} x={1860} y={150} boyut={88} hiza="sag" />
      <VurguRozet t={t} bas={tBir} bitis={tAma - 0.1} vurgu="≈ +1%" not="hip bone density" x={1650} y={420} genislik={380} boyut={96} />
      <Not t={t} bas={tAma} metin={(b?.not ?? "").toUpperCase()} x={1860} y={400} boyut={32} agirlik={800} hiza="sag" />
      <Liste t={t} isaret="nokta" x={1170} y={470} aralik={80} boyut={32}
        ogeler={[{ bas: K(1, "hip fractures"), metin: "HIP: NOT SIGNIFICANTLY LOWER", renk: RENK.mercan },
                 { bas: K(1, "total"), metin: "TOTAL: NEARLY IDENTICAL", renk: RENK.mercan }]} />
    </>
  );
};

export default S16;
