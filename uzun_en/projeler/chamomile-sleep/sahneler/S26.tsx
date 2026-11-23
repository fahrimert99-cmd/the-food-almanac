// Sahne 26 — yazarların sonucu: yardımcı ve güvenli, ama daha büyük deneyler gerek
import React from "react";
import { BaslikBlok, Baslik, Etiket, Hap, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHelp = K(0, "helpful"), tMild = K(0, "mild"), tLarge = K(1, "larger");
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  return (
    <>
      <Kamera gorsel="tam/26" pencere={pen}>
        <Etiket t={t} bas={K(0, "chamomile")} bitis={tMild - 0.2} capa={[1410, 480]} konum={[1640, 270]} metin="CHAMOMILE" renk={RENK.yesil} />
        <Etiket t={t} bas={tMild} bitis={tLarge - 0.2} capa={[1250, 760]} konum={[1640, 860]} metin="MILD SIDE EFFECTS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "reported")} bitis={tLarge - 0.2} capa={[880, 640]} konum={[1000, 880]} metin="TRIALS THAT REPORTED" renk={RENK.lacivert} boyut={24} />
      </Kamera>
      <Baslik t={t} bas={tHelp} bitis={tLarge - 0.15} metin="HELPFUL & SAFE" x={1150} y={120} boyut={92} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={K(0, "quality")} bitis={tLarge - 0.15} metin="FOR SLEEP QUALITY" x={1150} y={185} boyut={34} hiza="orta" agirlik={800} />
      <Baslik t={t} bas={tLarge} metin="LARGER TRIALS NEEDED" x={1150} y={130} boyut={92} renk={RENK.lacivert} hiza="orta" />
    </>
  );
};
export default S26;
