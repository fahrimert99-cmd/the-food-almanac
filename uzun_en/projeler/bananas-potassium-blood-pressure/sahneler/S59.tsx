// Sahne 59 — muz ≈422 mg: yararlı ama sihir değil; böbrek hastalığı ve ilaçlar için doktora danış.
import React from "react";
import { Etiket, Hap, Kamera, Liste, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t422 = K(0, "422"), tUse = K(0, "useful"), tMagic = K(0, "not magic");
  const tKid = K(1, "kidney disease"), tMed = K(1, "blood pressure"), tAsk = K(1, "ask their doctor");
  const aU = eout(ilerle(t, tUse, 0.5)) * sol(t, 5.9, 0.4);
  const aM = eout(ilerle(t, tMagic, 0.5)) * sol(t, 5.9, 0.4);
  return (
    <>
      <Kamera gorsel="tam/59" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 50, 1740])}>
        <Etiket t={t} bas={tAsk} capa={[380, 900]} konum={[300, 480]} metin="ASK YOUR DOCTOR" renk={RENK.lacivert} />
      </Kamera>
      <VurguRozet t={t} bas={t422} vurgu="≈ 422 MG" not="IN ONE BANANA" x={1560} y={130} genislik={420} bitis={5.9} />
      <div style={{ position: "absolute", left: 1560, top: 350, transform: `translate(-50%, ${(1 - aU) * 10}px)`, opacity: aU }}>
        <Hap metin="USEFUL" renk={RENK.yesil} boyut={32} />
      </div>
      <div style={{ position: "absolute", left: 1560, top: 440, transform: `translate(-50%, ${(1 - aM) * 10}px)`, opacity: aM }}>
        <Hap metin="NOT MAGIC" renk={RENK.mercan} boyut={32} />
      </div>
      <Not t={t} bas={tKid - 0.3} metin="CHECK FIRST IF YOU HAVE" x={80} y={110} boyut={26} renk={RENK.altin} agirlik={800} />
      <Liste t={t} x={80} y={160} aralik={84} boyut={34} isaret="nokta" genislik={800} ogeler={[
        { bas: tKid, metin: "KIDNEY DISEASE", renk: RENK.mercan },
        { bas: tMed, metin: "CERTAIN BLOOD PRESSURE MEDICINES", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S59;
