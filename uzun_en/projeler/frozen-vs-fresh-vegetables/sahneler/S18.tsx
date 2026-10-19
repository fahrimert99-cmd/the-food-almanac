// Sahne 18 — E vitamini ve riboflavin
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tR = K(1, "Riboflavin,");
  return (
    <>
      {/* alttaki sahte yazı pencere dışında (alt ≤ 930) */}
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [90, 0, 1640], [130, 10, 1600])}>
        <Etiket t={t} bas={K(1, "broccoli,")} capa={[330, 480]} konum={[250, 330]} metin="HIGHER" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "peas.")} capa={[1330, 440]} konum={[1580, 520]} metin="LOWER" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={0.2} bitis={tR - 0.25} metin="VITAMIN E" x={100} y={170} boyut={110} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "higher")} bitis={tR - 0.25} metin="HIGHER IN FROZEN" x={104} y={250} boyut={34} agirlik={800} />
      <VurguRozet t={t} bas={K(0, "three")} bitis={tR - 0.25} vurgu="3 FOODS" x={1660} y={150} genislik={440} />
      <Baslik t={t} bas={tR} metin="RIBOFLAVIN" x={100} y={170} boyut={110} renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "vitamin,")} metin="A B VITAMIN" x={104} y={250} boyut={34} agirlik={800} />
      <VurguRozet t={t} bas={K(1, "only")} vurgu="2 FOODS" not="differed" x={1660} y={150} genislik={440} />
    </>
  );
};

export default S18;
