import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Liste, MARKA, Not, Panel, RENK, SP, VurguRozet,
  eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sahne 8 — Yılda yaklaşık 1 milyon hasta
const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit = c[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 20, 1760])}>
        <Etiket t={t} bas={K(0, "poultry")} bitis={bit} capa={[950, 430]} konum={[1450, 230]} metin="POULTRY" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "CDC")} metin="CDC ESTIMATE" x={110} y={60} boyut={30} renk={RENK.altin} font="inter" aralik={8}
        style={{ textShadow: "0 0 10px #F6F3EC" }} />
      <VurguRozet t={t} bas={K(0, "million")} vurgu="≈ 1 MILLION" not="PEOPLE IN THE U.S. SICK EACH YEAR" x={420} y={110} genislik={640} boyut={110} renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "Salmonella")} metin="SALMONELLA" x={1860} y={185} boyut={90} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "more")} metin="MORE THAN ANY OTHER BACTERIA" x={1860} y={250} hiza="sag" genislik={640} boyut={34} agirlik={800} />
    </>
  );
};
export default S08;
