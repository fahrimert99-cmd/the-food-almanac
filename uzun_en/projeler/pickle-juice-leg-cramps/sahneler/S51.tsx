// Sahne 51 — kinin: riskli ilaç, FDA 2010 uyarısı.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800]);
  const tRisk = K(0, "risky"), tKinin = K(1, "quinine"), t2010 = K(2, "2010"), tFda = K(2, "Food"), tUyar = K(2, "warned");
  return (
    <>
      <Kamera gorsel="tam/51" pencere={p} />
      <Etiket t={t} bas={tRisk} bitis={tKinin - 0.1} capa={[493, 470]} konum={[1000, 250]} metin="RISKY REMEDY" renk={RENK.mercan} />
      <Etiket t={t} bas={tKinin} capa={[493, 470]} konum={[1000, 250]} metin="QUININE" renk={RENK.mercan} />
      <Baslik t={t} bas={t2010} metin="2010" x={1330} y={250} boyut={150} renk={RENK.altin} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tFda} />
      <BaslikBlok t={t} bas={tUyar} satirlar={["SKIP", "QUININE"]} x={1330} y={470} boyut={120}
        renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};
export default S51;
