import React from "react";
import { Baslik, BaslikBlok, BolumKarti, Etiket, INTER, IkonYol, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sahne 11 — 1984 çalışması: iki sandalye, iki yaş grubu
const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 40, 1740])}>
        <Etiket t={t} bas={K(0, "67 to 75")} capa={[520, 470]} konum={[270, 610]} metin="7 MEN · AGED 67–75" renk={RENK.altin} boyut={24} />
        <Etiket t={t} bas={K(0, "20 to 31")} capa={[1420, 500]} konum={[1640, 610]} metin="7 MEN · AGED 20–31" renk={RENK.yesil} boyut={24} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "New England")} />
      <Baslik t={t} bas={K(0, "1984,")} metin="1984" x={60} y={210} boyut={140} renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "active")} metin="HEALTHY · ACTIVE" x={1860} y={170} boyut={34} renk={RENK.lacivert} font="inter" agirlik={800} aralik={4} hiza="sag" />
    </>
  );
};
export default S11;
