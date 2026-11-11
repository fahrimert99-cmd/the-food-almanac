// Sahne 11 — eski çare: dolap + riskli şişe, sonra "ilaçlar bölümü" başlığı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRisk = K(0, "risky");
  const tBolum = K(1, "chapter");
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [200, 40, 1700], [260, 80, 1580])}>
        <Etiket t={t} bas={K(0, "remedy,")} bitis={tRisk - 0.1} capa={[933, 720]} konum={[1300, 300]} metin="OLD REMEDY" renk={RENK.altin} />
        <Etiket t={t} bas={tRisk} bitis={tBolum - 0.3} capa={[933, 720]} konum={[1300, 300]} metin="RISKY" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={tBolum} satirlar={["THE CHAPTER", "ON MEDICINES"]} x={1160} y={130} boyut={86} />
    </>
  );
};

export default S11;
