// Sahne 26 — 4 aile, 16 kişi; organik diyetle idrar pestisit düzeyleri düştü.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, VurguRozet, Hap } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOrg = K(0, "organic"), tFam = K(1, "four US families"), tSix = K(1, "16 people"), tUr = K(1, "urine"), tEighty = K(2, "80 percent");
  const cx = 1650;
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={tOrg} bitis={tFam} capa={[630, 400]} konum={[630, 150]} metin="ORGANIC DIET" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tFam} satirlar={["4 FAMILIES"]} x={cx} y={150} boyut={88} hiza="orta" renkler={[RENK.koyuYesil]} />
      {t >= tSix && (
        <div style={{ position: "absolute", left: cx, top: 250, transform: "translateX(-50%)" }}>
          <Hap metin="16 PEOPLE" renk={RENK.lacivert} boyut={34} />
        </div>
      )}
      <Ikon t={t} bas={tUr} ad="ok" x={cx - 170} y={400} boyut={84} zemin={RENK.yesil} />
      <Not t={t} bas={tUr} metin="urine pesticide levels fell on an organic diet" x={cx + 40} y={350} boyut={30} hiza="orta" genislik={300} />
      <VurguRozet t={t} bas={tEighty} vurgu=">80%" not="SOME MARKERS FELL" x={cx} y={620} renk={RENK.koyuYesil} genislik={420} boyut={110} />
    </>
  );
};

export default S26;
