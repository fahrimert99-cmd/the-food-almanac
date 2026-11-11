// Sahne 18 — iki merkez, rastgele atama (iki sandalye = iki grup).
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBar = K(0, "Barcelona,"), tLom = K(0, "Loma"), tYas = K(1, "Healthy"), tRas = K(1, "randomly");
  const tEkle = K(1, "add"), tKac = K(1, "avoid");
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [140, 100, 1640])} />
      <AltSis a={0.5} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <Etiket t={t} bas={tBar} bitis={tYas - 0.2} capa={[600, 560]} konum={[500, 380]} metin="BARCELONA, SPAIN" renk={RENK.mercan} />
      <Etiket t={t} bas={tLom} bitis={tYas - 0.2} capa={[1400, 600]} konum={[1450, 340]} metin="LOMA LINDA, CALIFORNIA" renk={RENK.yesil} />
      <Baslik t={t} bas={tYas} bitis={tRas - 0.15} metin="AGED 63 TO 79" x={140} y={215} boyut={100} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tRas} bitis={tEkle - 0.2} metin="RANDOMLY ASSIGNED" x={140} y={215} boyut={100} renk={RENK.lacivert} />
      <Etiket t={t} bas={tEkle} capa={[980, 625]} konum={[700, 330]} metin="ADD WALNUTS" renk={RENK.yesil} />
      <Etiket t={t} bas={tKac} capa={[1400, 640]} konum={[1500, 390]} metin="AVOID WALNUTS" renk={RENK.mercan} />
    </>
  );
};
export default S18;
