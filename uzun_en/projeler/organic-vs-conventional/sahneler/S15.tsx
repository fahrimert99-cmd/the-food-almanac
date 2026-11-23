// Sahne 15 — değişkenlik, yayın yanlılığı ve 2017 incelemesi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, Baslik } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tVar = K(0, "varied"), tPub = K(0, "publication"), tHalf = K(0, "half"), t2017 = K(1, "2017"), tMar = K(1, "marginal.");
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 10, 1920], [100, 60, 1720])}>
        <Etiket t={t} bas={tVar} bitis={tPub - 0.2} capa={[1120, 500]} konum={[860, 170]} metin="VARIED WIDELY" renk={RENK.altin} />
        <Etiket t={t} bas={tPub} bitis={tHalf - 0.2} capa={[420, 470]} konum={[430, 170]} metin="PUBLICATION BIAS" renk={RENK.mercan} />
      </Kamera>
      <VurguRozet t={t} bas={tHalf} bitis={t2017 - 0.3} vurgu="≈ HALF" not="OF MEASURES: BIAS SUSPECTED" x={700} y={118} genislik={450} boyut={80} renk={RENK.mercan} />
      <Baslik t={t} bas={t2017} metin="2017 REVIEW" x={160} y={175} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={tMar} metin="MARGINAL" x={160} y={265} boyut={84} renk={RENK.koyuYesil} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
    </>
  );
};

export default S15;
