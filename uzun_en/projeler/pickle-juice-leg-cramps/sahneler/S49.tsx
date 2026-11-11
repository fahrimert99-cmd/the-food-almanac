// Sahne 49 — su hapları (diüretikler) sık suçlanır; kanıtlanmamış yaygın inanç.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPills = K(0, "pills");
  const tDiur = K(0, "diuretics");
  const tBlamed = K(0, "often blamed");
  const tBelief = K(1, "common belief");
  const tRev = K(1, "evidence-based");
  const tConf = K(1, "confirmed");
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [20, 10, 1840])}>
        <Etiket t={t} bas={tPills} bitis={tBelief} capa={[640, 700]} konum={[400, 470]} metin="WATER PILLS" renk={RENK.yesil} />
        <Etiket t={t} bas={tBelief} capa={[960, 195]} konum={[1380, 170]} metin="COMMON BELIEF" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tDiur} metin="DIURETICS" x={80} y={200} boyut={100} renk={RENK.koyuYesil} />
      <Not t={t} bas={tBlamed} metin="often blamed" x={84} y={290} boyut={38} renk={RENK.mercan} agirlik={800} />
      <Not t={t} bas={tRev} metin="evidence-based reviews" x={1580} y={400} boyut={30} genislik={290} />
      <BaslikBlok t={t} bas={tConf} satirlar={["NOT", "CONFIRMED"]} x={1580} y={560} boyut={68} renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S49;
