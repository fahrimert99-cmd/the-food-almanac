// Sahne 38 — Bir hafta, iki diyet: iki tuz kasesi + sağda sıra listesi ve 24 saatlik ölçüm.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const b = s.meta.baslik!;
  const cik = c[1].bas - 0.2;
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1800])}>
        <Etiket t={t} bas={K(0, "high-sodium")} bitis={cik} capa={[573, 440]} konum={[560, 150]} metin="HIGH SODIUM" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "low-sodium")} bitis={cik} capa={[1113, 735]} konum={[900, 900]} metin="LOW SODIUM" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={0.3} satirlar={b.satirlar} x={1860} y={170} boyut={88} hiza="sag" />
      <Liste t={t} x={1290} y={440} aralik={96} boyut={34} genislik={600} ogeler={[
        { bas: K(0, "usual diet"), metin: "USUAL DIET", renk: RENK.altin, bitis: cik },
        { bas: K(0, "high-sodium"), metin: "HIGH SODIUM", renk: RENK.mercan, bitis: cik },
        { bas: K(0, "low-sodium"), metin: "LOW SODIUM", renk: RENK.yesil, bitis: cik },
      ]} />
      <Not t={t} bas={K(0, "random")} bitis={cik} metin="IN RANDOM ORDER" x={1290} y={750} boyut={30} agirlik={800} renk={RENK.lacivert} />
      <Ikon t={t} bas={K(1, "24-hour")} ad="saat" x={1340} y={520} boyut={92} zemin={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "24-hour") + 0.15} vurgu="24-HOUR" not="BLOOD PRESSURE MONITOR" x={1650} y={440} genislik={440} boyut={92} />
    </>
  );
};

export default S38;
