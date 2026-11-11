// Sahne 20 — 300 ev aşçısı: kurumlar listesi, ardından 300 rozeti. Görsel solda, sağ boş kâğıt.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1760]);
  const tCook = K(0, "300");
  return (
    <>
      <Kamera gorsel="tam/20" pencere={w}>
        <Etiket t={t} bas={K(0, "poultry")} capa={[700, 430]} konum={[1130, 300]} metin="RAW POULTRY" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      <Liste t={t} x={1340} y={190} aralik={84} boyut={32} isaret="onay" genislik={560} ogeler={[
        { bas: K(0, "North Carolina"), metin: "NC STATE" },
        { bas: K(0, "RTI"), metin: "RTI INTERNATIONAL" },
        { bas: K(0, "USDA's"), metin: "USDA FSIS", renk: RENK.altin },
      ]} />
      <Baslik t={t} bas={tCook} metin="300" x={1340} y={560} boyut={190} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tCook + 0.15} metin="HOME COOKS" x={1340} y={720} boyut={84} renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "who said")} x={1340} y={800} boyut={30} genislik={540} metin="WHO SAID THEY WASHED POULTRY" renk={RENK.gri} />
    </>
  );
};
export default S20;
