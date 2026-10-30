// Sahne 25 — Chapuy 1992: yarısı kalsiyum + D3, yarısı plasebo; 18 ay sonra kalça kırığı %43 az.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCa = K(0, "1,200"), tD = K(0, "800"), tPl = K(1, "placebo");
  const tAy = K(2, "18"), tKalca = K(2, "hip"), t43 = K(2, "43");
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [20, 10, 1880], [100, 60, 1720])} />
      {/* kalsiyum + D3 dozu: tabletli fincana çapalı */}
      <Etiket t={t} bas={tCa} bitis={8.0} capa={[690, 540]} konum={[390, 330]} metin="1,200 MG CALCIUM" renk={RENK.altin} boyut={30} />
      <Etiket t={t} bas={tD} bitis={8.0} capa={[780, 520]} konum={[700, 190]} metin="800 IU VITAMIN D3" renk={RENK.yesil} boyut={30} />
      <Not t={t} bas={K(0, "every")} bitis={8.0} metin="every day · half of the women" x={140} y={410} boyut={30} genislik={560} />
      {/* plasebo grubu */}
      <Baslik t={t} bas={tPl - 0.1} bitis={9.6} metin="PLACEBO" x={140} y={190} boyut={110} renk={RENK.mercan} />
      <Not t={t} bas={tPl + 0.3} bitis={9.6} metin="the other half" x={146} y={262} boyut={34} />
      {/* sonuç */}
      <Baslik t={t} bas={tAy} metin="AFTER 18 MONTHS" x={140} y={170} boyut={84} renk={RENK.lacivert} />
      <Not t={t} bas={K(2, "among")} metin="women who completed the study" x={146} y={236} boyut={32} />
      <VurguRozet t={t} bas={t43 - 0.1} vurgu="–43%" not="hip fractures" x={1590} y={150} renk={RENK.yesil} genislik={360} />
      <Not t={t} bas={tKalca + 1.0} metin="calcium + D3 vs. placebo" x={1590} y={330} boyut={28} hiza="orta" genislik={420} />
    </>
  );
};

export default S25;
