// Sahne 25 — asit azaltan ilaçlar: iki şişe + mide. PPI ve H2 etiketleri, sonda "aynı darboğaz".
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tPpi = K(1, "PPIs"), tH2 = K(2, "H2"), tMide = K(3, "stomach"), tDar = K(3, "bottleneck");
  return (
    <>
      {/* pencere alt kenarı y≈920: görsel altındaki sahte yazılar kadraja girmez */}
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [140, 0, 1640], [200, 20, 1560])}>
        <Etiket t={t} bas={tPpi} capa={[640, 690]} konum={[560, 440]} metin="PPIs" renk={RENK.mercan} />
        <Etiket t={t} bas={tH2} capa={[807, 730]} konum={[990, 500]} metin="H2 BLOCKERS" renk={RENK.altin} />
        <Etiket t={t} bas={tMide} capa={[1560, 560]} konum={[1130, 400]} metin="STOMACH ACID" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "acid-reducing")} satirlar={b.satirlar} x={80} y={160} boyut={90} />
      <Not t={t} bas={K(0, "medicines")} metin={b.not ?? ""} x={84} y={340} boyut={32} renk={RENK.gri} />
      <Baslik t={t} bas={tDar} metin="SAME BOTTLENECK" x={1250} y={170} boyut={64} renk={RENK.mercan} hiza="sag" />
    </>
  );
};

export default S25;
