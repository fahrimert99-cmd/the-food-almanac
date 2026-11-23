// Sahne 20 — tespit edilebilir ≠ tehlikeli; yasal limit (tolerans).
import React from "react";
import { AbsoluteFill, BaslikBlok, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDet = K(0, "detectable"), tLim = K(1, "legal"), tOft = K(2, "how often");
  return (
    <AbsoluteFill>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 60, 1760], [0, 0, 1920])}>
        {/* küçük toz tutam: tespit edilebilir */}
        <Etiket t={t} bas={tDet} bitis={tLim - 0.2} capa={[360, 665]} konum={[420, 890]} metin="DETECTABLE" renk={RENK.altin} />
        {/* ağır ağırlık: yasal limit */}
        <Etiket t={t} bas={tLim} capa={[1030, 640]} konum={[1500, 560]} metin="LEGAL LIMIT" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tDet} satirlar={["DETECTABLE", "NOT DANGEROUS"]} x={1300} y={200} boyut={92} renkler={[RENK.lacivert, RENK.mercan]} />
      <Ikon t={t} bas={tOft} ad="soru" x={1340} y={760} boyut={64} renk={RENK.altin} />
      <Not t={t} bas={tOft} metin="How often do foods go over it?" x={1400} y={725} boyut={36} genislik={440} />
    </AbsoluteFill>
  );
};

export default S20;
