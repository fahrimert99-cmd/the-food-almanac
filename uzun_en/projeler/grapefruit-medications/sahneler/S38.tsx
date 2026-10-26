// Sahne 38 — kanıtın gücü: enzim bilimi sağlam, ama çalışmalar küçük ve dolaylı ölçümlü.
import React from "react";
import { Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tS1 = K(1, "But");
  const kapat = tS1 - 0.1;
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [60, 293, 1500], [120, 293, 1440])}>
        <Etiket t={t} bas={K(1, "healthy volunteers")} capa={[330, 790]} konum={[800, 860]} metin="VOLUNTEER" renk={RENK.altin} />
      </Kamera>
      {/* 1. vuruş: bilim sağlam */}
      <Liste t={t} isaret="onay" x={70} y={80} aralik={110} boyut={46} genislik={1100} ogeler={[
        { bas: K(0, "enzyme"), bitis: kapat, metin: "ENZYME SCIENCE: SOLID" },
        { bas: K(0, "changes"), bitis: kapat, metin: "DRUG-LEVEL CHANGES: REAL" },
      ]} />
      {/* 2. vuruş: çalışma sınırları */}
      <Liste t={t} isaret="nokta" x={70} y={40} aralik={66} boyut={34} genislik={700} ogeler={[
        { bas: K(1, "small groups"), metin: "SMALL GROUPS", renk: RENK.altin },
        { bas: K(1, "healthy volunteers"), metin: "HEALTHY VOLUNTEERS", renk: RENK.altin },
        { bas: K(1, "single dose"), metin: "OFTEN A SINGLE DOSE", renk: RENK.altin },
      ]} />
      <Liste t={t} isaret="onay" x={820} y={40} aralik={90} boyut={34} genislik={680} ogeler={[
        { bas: K(1, "measured"), metin: "MEASURED: DRUG LEVELS", renk: RENK.altin },
      ]} />
      <Liste t={t} isaret="carpi" x={820} y={115} aralik={90} boyut={34} genislik={680} ogeler={[
        { bas: K(1, "health outcomes"), metin: "NOT HEALTH OUTCOMES", renk: RENK.gri },
      ]} />
    </>
  );
};

export default S38;
