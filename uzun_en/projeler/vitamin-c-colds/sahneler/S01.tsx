// Sahne 1 — Cochrane özeti: sağda boş kâğıtta başlık, solda gerçek nesne etiketi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 10, 1920], [70, 50, 1790])}>
        <Etiket t={t} bas={K(0, "vitamin")} bitis={K(1, "half")} capa={[420, 480]} konum={[1000, 250]} metin="ORANGES" renk={RENK.altin} />
      </Kamera>
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} y={130} />}
      <BaslikBlok t={t} bas={K(0, "29")} satirlar={["29 TRIALS"]} x={1860} y={330} boyut={110} hiza="sag" renkler={[RENK.lacivert]} />
      <BaslikBlok t={t} bas={K(0, "11,306")} satirlar={["11,306 PEOPLE"]} x={1860} y={450} boyut={110} hiza="sag" renkler={[RENK.koyuYesil]} />
      <VurguRozet t={t} bas={K(1, "half")} vurgu="≈ HALF" not="risk fell in one group" x={1560} y={600} genislik={440} />
    </>
  );
};

export default S01;
