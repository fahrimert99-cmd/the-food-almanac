// Sahne 36 — sirke: şişe sağda, ekmek solda; 2005 çalışması.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kp = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820]);
  const bit1 = K(2, "crossover") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kp}>
        <Etiket t={t} bas={K(0, "vinegar")} bitis={bit1} capa={[1410, 420]} konum={[1690, 170]} metin="VINEGAR" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "Acetic")} bitis={bit1} capa={[1450, 700]} konum={[1730, 720]} metin="ACETIC ACID" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={K(2, "white bread")} capa={[800, 520]} konum={[900, 260]} metin="WHITE BREAD" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(2, "different amounts")} capa={[1350, 560]} konum={[1100, 130]} metin="DIFFERENT AMOUNTS" renk={RENK.altin} boyut={26} />
      </Kamera>
      <KaynakEtiketi t={t} bas={K(2, "2005")} metin="Östman et al. · Eur J Clin Nutr · 2005" />
      <VurguRozet t={t} bas={K(2, "twelve")} vurgu="12" not="HEALTHY ADULTS" x={400} y={150} genislik={340} renk={RENK.koyuYesil} />
    </>
  );
};
export default S36;
