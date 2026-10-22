// Sahne 15 — kontrollü deney düzeneği: laboratuvar tezgâhı; ölçümler cümle 2'de nesnelere etiketlenir.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        {/* tezgâh bölümleri: tartı kolu ve kaidesindeki anlamsız yazı etiketle örtülür */}
        <Etiket t={t} bas={K(1, "total body water")} capa={[440, 650]} konum={[420, 880]} metin="TOTAL BODY WATER" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "deuterium")} capa={[700, 520]} konum={[760, 120]} metin="DEUTERIUM OXIDE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "urine")} capa={[1370, 500]} konum={[1130, 120]} metin="URINE MARKERS" renk={RENK.altin} bitis={K(1, "blood") + 0.1} />
        <Etiket t={t} bas={K(1, "blood")} capa={[1490, 560]} konum={[1620, 200]} metin="BLOOD MARKERS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "body weight")} capa={[893, 600]} konum={[900, 360]} metin="BODY WEIGHT" renk={RENK.koyuYesil} boyut={30} />
      </Kamera>
      <Baslik t={t} bas={K(0, "controlled")} bitis={4.1} metin="CONTROLLED" x={90} y={110} boyut={104} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "food")} bitis={4.1} metin="activity, food and fluid intake" x={96} y={176} boyut={34} />
    </>
  );
};

export default S15;
