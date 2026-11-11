// Sahne 7 — havuç ve hücre büyütmesi; ikinci etki, Palermo derlemesi.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Parcaciklar, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRev = K(2, "2014");
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={K(1, "walls,")} bitis={tRev - 0.2} capa={[1467, 330]} konum={[1500, 700]} metin="CELL WALLS" renk={RENK.altin} />
        <Parcaciklar t={t} bas={K(1, "free")} kaynak={[1540, 330]} hedef={[1540, 620]} adet={20} aralik={0.22} omur={1.5} kavis={0}
          yayilma={220} hedefYayilma={120} tohum="s7" boyut={6} />
      </Kamera>
      <Baslik t={t} bas={K(0, "second")} bitis={tRev - 0.2} metin="SECOND EFFECT" x={1860} y={800} boyut={92} renk={RENK.koyuYesil} hiza="sag" />
      <KaynakEtiketi t={t} bas={tRev} metin="Palermo et al. · J Sci Food Agric · 2014" />
      <VurguRozet t={t} bas={K(2, "100")} vurgu="100+" not="studies reviewed" x={1560} y={720} genislik={400} />
    </>
  );
};

export default S07;
