// Sahne 1 — açılış: COSMOS sonucu, sağ sütunda sayılar
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, MARKA, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu,
  kelimeZamani, pop } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = K(0, "note this");
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(0, "dark chocolate")} bitis={bit} capa={[573, 513]} konum={[1010, 470]} metin="DARK CHOCOLATE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "heart,")} bitis={bit} capa={[387, 267]} konum={[880, 150]} metin="YOUR HEART" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} bas={K(0, "trial")} metin="Sesso et al. · Am J Clin Nutr · 2022" />
      <Baslik t={t} bas={K(0, "21,442")} metin="21,442" x={1440} y={250} boyut={150} renk={RENK.lacivert} hiza="orta" />
      <Not t={t} bas={K(0, "older adults")} metin="OLDER ADULTS" x={1440} y={340} boyut={34} renk={RENK.altin} hiza="orta" agirlik={800} />
      <VurguRozet t={t} bas={K(0, "27 percent")} vurgu="–27%" not="lower risk with cocoa extract" x={1440} y={430} genislik={560} renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={K(0, "cardiovascular")} satirlar={["CARDIOVASCULAR", "DEATH"]} x={1440} y={760} boyut={92} hiza="orta"
        renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S01;
