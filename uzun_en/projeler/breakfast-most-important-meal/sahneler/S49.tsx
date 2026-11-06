// Sahne 49 — ölçüm cihazı + insülin kalemi: öğün atlanınca düşük kan şekeri uyarısı.
import React from "react";
import { Etiket, BaslikBlok, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 70, 1500], [40, 100, 1400])}>
        <Etiket t={t} bas={K(0, "insulin")} bitis={K(0, "blood sugar") - 0.2} capa={[75, 470]} konum={[260, 170]} metin="INSULIN" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "blood sugar")} bitis={K(0, "National") - 0.3} capa={[200, 350]} konum={[330, 160]} metin="LOW BLOOD SUGAR" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "meal,")} capa={[700, 730]} konum={[1000, 760]} metin="SKIPPED MEAL" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "skip")} satirlar={["SKIPPED MEAL", "+ INSULIN"]} x={1860} y={330} boyut={92} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(0, "skip") + 0.7} metin="can mean low blood sugar" x={1860} y={535} hiza="sag" genislik={700} boyut={38} />
      <KaynakEtiketi t={t} metin="NIDDK" bas={K(0, "National")} />
    </>
  );
};
export default S49;
