// Sahne 14 — Fillmore 2006: kitap yığını + sonuç listesi
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 30, 1760])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={K(0, "Fillmore")} metin="FILLMORE, 2006" x={1000} y={190} boyut={84} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(0, "54")} capa={[600, 230]} konum={[700, 150]} metin="54 STUDIES" renk={RENK.altin} />
      <Not t={t} bas={K(1, "avoided")} metin="STUDIES THAT AVOIDED THE MISTAKE" x={1000} y={300} boyut={34} agirlik={800} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "no significant")} metin="NO SIGNIFICANT PROTECTION" x={1000} y={420} boyut={64} renk={RENK.mercan} />
      <Liste t={t} x={1250} y={520} isaret="carpi" boyut={34} aralik={74} genislik={600}
        ogeler={[{ bas: K(1, "any cause"), metin: "ANY CAUSE OF DEATH", renk: RENK.mercan }, { bas: K(1, "heart disease"), metin: "HEART DISEASE", renk: RENK.mercan }]} />
    </>
  );
};
export default S14;
