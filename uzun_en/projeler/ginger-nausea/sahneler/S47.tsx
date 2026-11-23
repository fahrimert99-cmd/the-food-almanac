// Sahne 47 — zencefil kan şekerini düşürebilir: ilaç kullananlar eczacıya söylesin
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Liste, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGin = K(0, "ginger"), tMay = K(0, "may"), tIsnt = K(1, "isn't"), tIns = K(1, "insulin");
  const tEnd = tIns - 0.3, tPh = K(1, "pharmacist");
  const [sc, al] = pop(t, tPh - 0.3, 0.5);
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 50, 1850], [60, 90, 1700])}>
        <Etiket t={t} bas={tGin} bitis={tEnd} capa={[420, 520]} konum={[230, 360]} metin="GINGER" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tMay} bitis={tEnd} satirlar={["MAY LOWER", "BLOOD SUGAR"]} x={140} y={110} boyut={80} />
      <div style={{ position: "absolute", left: 1560, top: 230, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}>
        {al > 0 && t < tIns && <Hap metin="HOW MUCH: NOT KNOWN" renk={RENK.altin} boyut={30} />}
      </div>
      <Liste t={t} isaret="nokta" x={140} y={110} aralik={84} boyut={38} genislik={560}
        ogeler={[{ bas: tIns, metin: "INSULIN", renk: RENK.mercan }, { bas: K(1, "other"), metin: "DIABETES MEDICINES", renk: RENK.mercan }]} />
      {al > 0 && t >= tPh - 0.3 && (
        <div style={{ position: "absolute", left: 960, top: 890, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}>
          <Hap metin="MENTION IT TO YOUR PHARMACIST" renk={RENK.yesil} boyut={34} />
        </div>
      )}
    </>
  );
};
export default S47;
