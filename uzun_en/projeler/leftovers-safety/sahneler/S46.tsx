// Sahne 46 — FDA'nın iki nedeni: bağışıklık ve mide asidi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t1 = K(1, "immune"), t2 = K(2, "stomach"), t3 = K(3, "cells");
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 30, 1800])}>
        <Etiket t={t} bas={t3} capa={[800, 800]} konum={[1450, 890]} metin="DIABETES MAY DAMAGE ACID CELLS" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      <BaslikBlok t={t} bas={K(0, "two")} satirlar={s.meta.baslik?.satirlar ?? []} x={1130} y={150} boyut={92} />
      <Liste t={t} x={1130} y={400} aralik={210} boyut={34} genislik={700}
        ogeler={[{ bas: t1, metin: "IMMUNE SYSTEM", renk: RENK.altin }, { bas: t2, metin: "STOMACH ACID", renk: RENK.altin }]} />
      <Not t={t} bas={K(1, "between")} metin="Begins to decline between ages 50 and 60" x={1130} y={470} genislik={700} boyut={30} />
      <Not t={t} bas={K(2, "enough")} metin="May not make enough acid to limit intestinal bacteria" x={1130} y={680} genislik={700} boyut={30} />
    </>
  );
};
export default S46;
