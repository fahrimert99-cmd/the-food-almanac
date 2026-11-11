// Sahne 34 — hamur kasesi: kısa fermantasyonda basit şekerler azalır (2008 çalışması).
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kp = kameraYolu(t, s.sure, [160, 100, 1600], [220, 130, 1480]);
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kp}>
        <Parcaciklar t={t} bas={K(0, "simple carbohydrates")} kaynak={[650, 800]} hedef={[880, 520]} adet={14} aralik={0.14} omur={1.6}
          yayilma={120} kavis={-120} boyut={7} hedefYayilma={140} tohum="s34" />
        <Etiket t={t} bas={K(0, "fewer")} capa={[650, 830]} konum={[500, 725]} metin="FEWER SIMPLE CARBS" renk={RENK.altin} boyut={24} />
        <Etiket t={t} bas={K(0, "sourdough after")} capa={[1000, 330]} konum={[1470, 270]} metin="SOURDOUGH" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "long ferment")} capa={[1290, 520]} konum={[1500, 470]} metin="LONG FERMENT" renk={RENK.lacivert} />
      </Kamera>
      <KaynakEtiketi t={t} bas={K(0, "2008")} metin="Maioli et al. · Acta Diabetologica · 2008" />
    </>
  );
};
export default S34;
