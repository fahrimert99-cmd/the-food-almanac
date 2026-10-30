// Sahne 6 — Kemik canlı doku; kalsiyum yapı taşı; D vitamini emilimi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t2 = K(1, "Vitamin");
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [60, 60, 1800], [140, 110, 1640])}>
        <Etiket t={t} bas={K(0, "Bone")} bitis={t2 - 0.2} capa={[470, 800]} konum={[330, 960 - 40]} metin="LIVING BONE" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "calcium")} bitis={t2 - 0.2} capa={[713, 460]} konum={[1100, 150]} metin="CALCIUM" renk={RENK.altin} />
        <Parcaciklar t={t} bas={K(1, "absorb")} kaynak={[1150, 560]} hedef={[700, 480]} adet={20} aralik={0.12} omur={1.6} tohum="ca6" />
      </Kamera>
      <BaslikBlok t={t} bas={t2 + 0.5} satirlar={["VITAMIN D"]} x={60} y={120} boyut={84} renkler={[RENK.koyuYesil]} />
      <BaslikBlok t={t} bas={K(1, "gut")} satirlar={["HELPS ABSORB", "CALCIUM"]} x={60} y={205} boyut={52} renkler={[RENK.lacivert, RENK.altin]} adim={0.2} />
    </>
  );
};

export default S06;
