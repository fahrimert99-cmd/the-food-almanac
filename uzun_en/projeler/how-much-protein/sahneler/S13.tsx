// Sahne 13 — RDA gram cinsinden: 0,36 g/lb; 170 lb ≈ 77 kg → yaklaşık 62 g. İki terazi, tavuk ve lor.
import React from "react";
import { Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t170 = K(1, "170"), t77 = K(1, "77"), t62 = K(1, "62");
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 60, 1920], [70, 110, 1740])}>
        {/* kantar kadranı: önce libre, sonra kilogram */}
        <Etiket t={t} bas={t170} bitis={t77 - 0.1} capa={[610, 600]} konum={[300, 370]} metin="170 POUNDS" renk={RENK.altin} />
        <Etiket t={t} bas={t77} capa={[610, 600]} konum={[300, 370]} metin="≈ 77 KG" renk={RENK.altin} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "0.36")} bitis={t170 - 0.3} vurgu="0.36" not="grams per pound" x={340} y={90} genislik={420} />
      <VurguRozet t={t} bas={t62} vurgu="≈ 62 G" not="protein a day" x={1700} y={125} genislik={340} boyut={92} renk={RENK.koyuYesil} />
    </>
  );
};

export default S13;
