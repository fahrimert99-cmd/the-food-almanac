// Sahne 42 — dondurma: porsiyon, tarih, çözme.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPor = K(0, "single-meal"), tYaz = K(0, "write"), tCoz = K(1, "refrigerator,"), tGun = K(1, "three");
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [40, 50, 1800])}>
        <Etiket t={t} bas={tPor} bitis={tYaz + 1.6} capa={[920, 800]} konum={[1330, 500]} metin="SINGLE-MEAL PORTIONS" renk={RENK.yesil} />
        <Etiket t={t} bas={tYaz} bitis={tCoz - 0.2} capa={[1250, 885]} konum={[1560, 660]} metin="DISH + DATE" renk={RENK.altin} />
        <Etiket t={t} bas={tCoz} bitis={tGun - 0.15} capa={[600, 450]} konum={[1330, 330]} metin="THAW IN FRIDGE" renk={RENK.lacivert} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <VurguRozet t={t} bas={tGun} vurgu="3–4 DAYS" not="in the refrigerator" x={1560} y={150} renk={RENK.koyuYesil} genislik={420} boyut={90} />
      <Not t={t} bas={K(1, "refreeze")} metin="OR REFREEZE" x={1560} y={370} hiza="orta" boyut={40} agirlik={800} renk={RENK.altin} />
    </>
  );
};
export default S42;
