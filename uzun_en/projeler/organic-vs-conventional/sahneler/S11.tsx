// Sahne 11 — ipuçları: fenoller, omega-3, zayıf kanıt.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPhe = K(1, "phenols"), tMilk = K(2, "milk"), tChk = K(2, "chicken"), tOm = K(2, "omega-3"), tWeak = K(3, "weak");
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [80, 60, 1760])}>
        <Etiket t={t} bas={tPhe} bitis={K(2, "Organic") - 0.2} capa={[1450, 480]} konum={[1250, 200]} metin="PLANT PHENOLS" renk={RENK.yesil} />
        <Etiket t={t} bas={tMilk} capa={[370, 520]} konum={[640, 400]} metin="ORGANIC MILK" renk={RENK.altin} />
        <Etiket t={t} bas={tChk} capa={[880, 580]} konum={[1000, 400]} metin="ORGANIC CHICKEN" renk={RENK.altin} />
      </Kamera>
      <VurguRozet t={t} bas={tOm} bitis={tWeak - 0.2} vurgu="OMEGA-3" not="MORE IN MILK AND CHICKEN" x={880} y={110} genislik={520} boyut={70} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tWeak} vurgu="WEAK EVIDENCE" not="LITTLE CLINICAL SIGNIFICANCE" x={880} y={110} genislik={600} boyut={70} renk={RENK.mercan} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
    </>
  );
};

export default S11;
