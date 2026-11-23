// Sahne 24 — tahmini maruziyetler referans dozun çok altında; en yüksek %2.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani, VurguRozet } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRef = K(0, "reference dose"), tHigh = K(1, "highest"), tTwo = K(1, "2 percent");
  const tOne = K(2, "one of 120"), tQuarter = K(2, "three-quarters");
  const cik = K(2, "Only") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1820])}>
        <Etiket t={t} bas={tRef} capa={[480, 330]} konum={[800, 200]} metin="REFERENCE DOSE" renk={RENK.altin} />
        <Etiket t={t} bas={tTwo} capa={[480, 925]} konum={[800, 1010 - 90]} metin="2% LEVEL" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      <BaslikBlok t={t} bas={tHigh} bitis={cik} satirlar={["HIGHEST:", "2% OF THE DOSE"]} x={1240} y={300} boyut={92}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <VurguRozet t={t} bas={tOne} vurgu="1 OF 120" not="ESTIMATES PASSED 1%" x={1540} y={230} renk={RENK.mercan} genislik={500} boyut={96} />
      <VurguRozet t={t} bas={tQuarter} vurgu="≈ ¾" not="BELOW 1/10,000 OF THE DOSE" x={1540} y={560} renk={RENK.koyuYesil} genislik={560} boyut={96} />
    </>
  );
};

export default S24;
