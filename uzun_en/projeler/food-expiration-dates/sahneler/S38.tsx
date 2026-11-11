// Sahne 38 — pastörize sütten yapılan daha güvenli peynirler.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [30, 90, 1760])}>
        <Etiket t={t} bas={K(0, "cheddar")} capa={[650, 450]} konum={[600, 170]} metin="CHEDDAR" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "Swiss")} capa={[970, 360]} konum={[1150, 170]} metin="SWISS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "cottage")} capa={[330, 380]} konum={[230, 235]} metin="COTTAGE CHEESE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "mozzarella")} capa={[1150, 640]} konum={[1560, 720]} metin="MOZZARELLA" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin="CDC · Listeria prevention" bas={0.3} />
      <BaslikBlok t={t} bas={K(0, "Safer") + 0.2} satirlar={["PASTEURIZED", "CHEESES"]} x={1430} y={330} boyut={76}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Ikon t={t} bas={K(0, "pasteurized")} ad="onay" x={1560} y={540} boyut={92} zemin={RENK.yesil} />
    </>
  );
};

export default S38;
