// Sahne 45 — ikinci durum: yıllarca PPI / H2 blokeri, reçetesiz de olabilir.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Sag: React.FC<{ t: number; bas: number; metin: string; renk: string; y: number }> = ({ t, bas, metin, renk, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 60, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={38} />
    </div>
  );
};

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTwo = K(0, "Two");
  const tPpi = K(1, "PPI");
  const tH2 = K(1, "H2");
  const tYears = K(1, "years");
  const tOtc = K(1, "over the counter");
  const tRx = K(1, "without a prescription");
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1800])} />
      <BaslikBlok t={t} bas={tTwo} satirlar={["TWO: ACID", "REDUCERS"]} x={1860} y={190} boyut={140} hiza="sag" />
      <Etiket t={t} bas={tPpi} capa={[355, 230]} konum={[700, 200]} metin="PPI" renk={RENK.mercan} />
      <Etiket t={t} bas={tH2} capa={[240, 690]} konum={[720, 620]} metin="H2 BLOCKER" renk={RENK.altin} />
      <Sag t={t} bas={tYears} metin="FOR YEARS" renk={RENK.lacivert} y={470} />
      <Sag t={t} bas={tOtc} metin="OVER THE COUNTER" renk={RENK.yesil} y={570} />
      <Sag t={t} bas={tRx} metin="NO PRESCRIPTION" renk={RENK.mercan} y={670} />
    </>
  );
};

export default S45;
