// Sahne 7 — portakal suyu C vitamini: gerçek nesne etiketleri, iki rozet, kapanış cümlesi.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1810])}>
        <Etiket t={t} bas={K(0, "fresh")} bitis={K(0, "holds")} capa={[640, 560]} konum={[270, 330]} metin="FRESH JUICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "ounces")} bitis={K(0, "holds")} capa={[860, 560]} konum={[520, 890]} metin="ABOUT 8 OUNCES" renk={RENK.lacivert} />
      </Kamera>
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} bitis={K(2, "Either") - 0.1} />}
      <VurguRozet t={t} bas={K(0, "124")} vurgu="124 MG" not="fresh, 1 cup" x={270} y={150} genislik={380} />
      <VurguRozet t={t} bas={K(1, "80")} vurgu="≈ 80 MG" not="chilled, store-bought" x={1678} y={150} genislik={400} renk={RENK.mercan} />
      <Baslik t={t} bas={K(2, "covers")} metin="COVERS MOST OR ALL OF A DAY" x={1000} y={75} boyut={58} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S07;
