// Sahne 58 — diyabet riski, lif; paketli ürünler: protein ve fiyat
import React from "react";
import { Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <Etiket t={t} bas={K(0, "lower diabetes risk")} bitis={5.6} capa={[620, 560]} konum={[520, 330]} metin="LOWER DIABETES RISK" renk={RENK.yesil} />
      <Etiket t={t} bas={K(0, "cereal fiber")} bitis={6.9} capa={[340, 590]} konum={[420, 790]} metin="CEREAL FIBER" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "gluten-free packaged")} bitis={10.3} capa={[1250, 370]} konum={[1100, 170]} metin="GLUTEN-FREE PACKAGED" renk={RENK.lacivert} />
      <Etiket t={t} bas={K(1, "less protein")} bitis={12.9} capa={[800, 380]} konum={[400, 170]} metin="LESS PROTEIN" renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(1, "three times")} vurgu="~3×" not="THE COST, OR MORE" x={1400} y={110} renk={RENK.mercan} genislik={360} boyut={90} />
    </>
  );
};

export default S58;
