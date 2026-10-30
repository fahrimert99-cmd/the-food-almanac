// Sahne 23 — Khan 2004: 53 kişi, 4 hafta, yemek günlüğü + haftalık kan testi
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800]);
  const tK = c[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/23" pencere={pen}>
        <Etiket t={t} bas={K(1, "wrote down")} capa={[420, 520]} konum={[380, 190]} metin="EVERYTHING THEY ATE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "weekly")} capa={[760, 760]} konum={[900, 905]} metin="WEEKLY BLOOD TESTS" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.1} />
      <VurguRozet t={t} bas={K(0, "53")} bitis={tK} vurgu="53" not="people" x={230} y={140} genislik={260} boyut={90} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(0, "four weeks")} bitis={tK} vurgu="4" not="weeks" x={540} y={140} genislik={260} boyut={90} renk={RENK.lacivert} />
    </>
  );
};

export default S23;
