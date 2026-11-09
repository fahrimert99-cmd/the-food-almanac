// Sahne 45 — germe kanıtlanmış tedavi değil; zararsız ve kişinin kontrolünde.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNo = K(0, "no proven");
  const tAfp = K(1, "review");
  const tZararsiz = K(1, "harmless");
  const tHasta = K(1, "patient-controlled");
  const tYasli = K(1, "older adults");
  const tYon = K(1, "helpful");
  const pArka = eout(ilerle(t, tNo - 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1700])}>
        <Etiket t={t} bas={tYasli} bitis={tYon + 3} capa={[880, 400]} konum={[900, 150]} metin="TRIAL IN OLDER ADULTS" renk={RENK.yesil} />
      </Kamera>
      {/* başlığın arkasına kâğıt rengi zemin */}
      <div style={{ position: "absolute", left: 30, top: 70, width: 740, height: 400, opacity: pArka * (t < tYasli ? 1 : 0),
        background: "radial-gradient(ellipse 50% 50% at 50% 50%, #F6F3ECF2 0%, #F6F3ECF2 60%, #F6F3EC00 100%)" }} />
      <BaslikBlok t={t} bas={tNo} bitis={tAfp - 0.1} satirlar={["NO PROVEN", "CURE"]} x={80} y={170} boyut={100} />
      <Not t={t} bas={tAfp} bitis={tYasli} metin="AMERICAN FAMILY PHYSICIAN REVIEW" x={84} y={110} boyut={28} renk={RENK.altin} agirlik={800} />
      <Liste t={t} isaret="onay" x={80} y={175} aralik={90} boyut={36} genislik={640}
        ogeler={[{ bas: tZararsiz, metin: "HARMLESS", bitis: tYasli }, { bas: tHasta, metin: "PATIENT-CONTROLLED", bitis: tYasli }]} />
      <BaslikBlok t={t} bas={tYon} satirlar={["HELPFUL", "DIRECTION"]} x={1560} y={150} boyut={64} />
    </>
  );
};

export default S45;
