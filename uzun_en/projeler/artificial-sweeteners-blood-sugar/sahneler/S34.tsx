// Sahne 34 — WHO 2023 yönergesi: masa, bardak, küre. Sağda başlık, sonra "karşı öneri" listesi.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tMay = K(0, "May"), tOrg = K(0, "World Health"), tNon = K(0, "non-sugar");
  const tKarsi = K(1, "advised against"), tKilo = K(1, "body weight"), tRisk = K(1, "reduce the risk");
  const bit1 = c[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1820])} >
        <Etiket t={t} bas={tOrg} bitis={bit1} capa={[1030, 250]} konum={[1500, 150]} metin="WORLD HEALTH ORG." renk={RENK.lacivert} />
        <Etiket t={t} bas={tNon} bitis={bit1} capa={[712, 400]} konum={[1500, 560]} metin="NON-SUGAR SWEETENERS" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      {/* 1. cümle: başlık */}
      <Baslik t={t} bas={tMay} bitis={bit1} metin="WHO, 2023" x={1300} y={300} boyut={118} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "guideline")} bitis={bit1} metin="a conditional recommendation" x={1304} y={390} boyut={36} renk={RENK.lacivert} />
      {/* 2. cümle: önermediği iki hedef */}
      <Baslik t={t} bas={tKarsi} metin="ADVISED AGAINST" x={1300} y={250} boyut={80} renk={RENK.mercan} />
      <Not t={t} bas={tKarsi + 0.1} metin="using them to…" x={1304} y={330} boyut={34} renk={RENK.gri} />
      <Liste t={t} x={1300} y={410} isaret="carpi" boyut={36} aralik={96} genislik={560}
        ogeler={[
          { bas: tKilo, metin: "CONTROL BODY WEIGHT", renk: RENK.mercan },
          { bas: tRisk, metin: "CHRONIC DISEASE RISK", renk: RENK.mercan },
        ]} />
    </>
  );
};

export default S34;
