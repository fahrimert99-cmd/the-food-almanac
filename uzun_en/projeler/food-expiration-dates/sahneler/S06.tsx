// Sahne 6 — tek istisna: bebek maması; sağda başlık ve sade maddeler.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Ikon, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYok = K(1, "no federal"), tGonul = K(2, "Manufacturers");
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860])}>
        <Etiket t={t} bas={K(1, "infant")} capa={[413, 520]} konum={[330, 190]} metin="INFANT FORMULA" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={0.3} bitis={K(1, "Except")} metin="THE KEY FACT" x={1860} y={190} boyut={34} renk={RENK.altin} font="inter" aralik={8} hiza="sag" />
      <BaslikBlok t={t} bas={K(1, "Except")} satirlar={["ONE EXCEPTION:", "INFANT FORMULA"]} x={1860} y={260} boyut={92} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Ikon t={t} bas={tYok} ad="carpi" x={1350} y={580} boyut={84} zemin={RENK.mercan} bitis={tGonul - 0.2} />
      <Not t={t} bas={tYok} bitis={tGonul - 0.2} metin="NO FEDERAL DATE REQUIREMENT" x={1860} y={530} hiza="sag" boyut={42} agirlik={800} genislik={440} />
      <KaynakEtiketi t={t} bas={K(1, "federal")} metin={s.meta.etiket ?? ""} />
      <Liste t={t} isaret="nokta" x={1300} y={500} aralik={100} boyut={34} genislik={580}
        ogeler={[{ bas: K(2, "voluntarily"), metin: "ADDED VOLUNTARILY", renk: RENK.altin },
                 { bas: K(2, "describe"), metin: "DESCRIBES QUALITY", renk: RENK.yesil }]} />
    </>
  );
};

export default S06;
