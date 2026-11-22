// Sahne 44 — 65 yaş ve üzeri: daha yüksek risk.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(0, "65"), tHos = K(0, "hospitalization"), tOl = K(0, "death"), tFood = K(0, "foodborne"), tOrg = K(0, "organs");
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1830])}>
        <Etiket t={t} bas={tFood} bitis={tOrg - 0.3} capa={[500, 680]} konum={[600, 200]} metin="FOODBORNE ILLNESS" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      <BaslikBlok t={t} bas={tBas} satirlar={s.meta.baslik?.satirlar ?? []} x={1160} y={230} boyut={96} />
      <Liste t={t} x={1160} y={430} isaret="nokta" boyut={36} aralik={80} genislik={640}
        ogeler={[{ bas: tHos, metin: "HOSPITALIZATION", renk: RENK.mercan }, { bas: tOl, metin: "DEATH", renk: RENK.mercan }]} />
      <Not t={t} bas={tOrg} metin="Organs and body systems change as the body ages." x={1160} y={680} genislik={640} boyut={38} />
    </>
  );
};
export default S44;
