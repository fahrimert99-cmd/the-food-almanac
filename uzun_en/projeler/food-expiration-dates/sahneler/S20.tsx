// Sahne 20 — Çöp kovası: yılda yaklaşık 3 milyar pound, ≈ 7 milyar dolar; tahmin uyarısı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tWaste = K(0, "food waste"), t3 = K(0, "three billion"), t7 = K(0, "seven billion"), tEst = K(1, "estimate");
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [40, 70, 1800])}>
        <Etiket t={t} bas={tWaste} bitis={t3 - 0.1} capa={[420, 400]} konum={[1000, 330]} metin="FOOD WASTE" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <BaslikBlok t={t} bas={t3} satirlar={b.satirlar} x={1860} y={290} boyut={112} hiza="sag"
        renkler={[RENK.mercan, RENK.lacivert]} />
      <Not t={t} bas={t3 + 0.6} metin={b.not ?? ""} x={1860} y={520} hiza="sag" genislik={760} boyut={32} agirlik={800} />
      <VurguRozet t={t} bas={t7} vurgu="≈ $7 BILLION" not="WORTH, PER THE ESTIMATE" x={1480} y={640} genislik={560} boyut={82} />
      <Not t={t} bas={tEst} metin="AN ESTIMATE · METHOD NOT SHOWN IN SUMMARY" x={1860} y={880} hiza="sag" genislik={1000} boyut={30} agirlik={800} renk={RENK.gri} />
    </>
  );
};

export default S20;
