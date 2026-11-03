// Sahne 1 — yulaf kasesi + tarçın; sağda başlık bloğu ve –25 rozeti.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const bitis = K(0, "fasting") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1810])}>
        <Etiket t={t} bas={K(0, "cinnamon")} bitis={bitis} capa={[640, 490]} konum={[560, 250]} metin="GROUND CINNAMON" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "oatmeal")} bitis={bitis} capa={[420, 620]} konum={[1130, 480]} metin="OATMEAL" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "blood")} bitis={bitis} capa={[240, 790]} konum={[760, 905]} metin="CINNAMON STICKS" renk={RENK.koyuYesil} />
      </Kamera>
      <KaynakEtiketi t={t} bas={K(0, "ten trials")} metin={s.meta.etiket!} />
      <BaslikBlok t={t} bas={K(0, "fasting")} satirlar={b.satirlar} x={1860} y={300} boyut={100} hiza="sag" adim={0.7}
        renkler={[RENK.lacivert, RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={K(0, "25")} vurgu={b.vurgu!} not={b.not} x={1560} y={660} genislik={470} />
    </>
  );
};

export default S01;
