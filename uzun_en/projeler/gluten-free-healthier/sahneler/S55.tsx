// Sahne 55 — güvenlik notu: doktor masası, sağda boş alan.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800]);
  const tN = K(2, "A diet");
  const chip = (ifade: string, metin: string, y: number, renk: string) => {
    const a = eout(ilerle(t, K(1, ifade), 0.5));
    return a > 0 ? (
      <div key={metin} style={{ position: "absolute", left: 140, top: y, opacity: a, transform: `translateX(${(a - 1) * 30}px)` }}>
        <Hap metin={metin} renk={renk} boyut={32} />
      </div>
    ) : null;
  };
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kam}>
        <Etiket t={t} bas={K(1, "daily medicines")} capa={[1000, 440]} konum={[1380, 300]} metin="DAILY MEDICINES" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "doctor or")} capa={[520, 400]} konum={[800, 180]} metin="DOCTOR OR DIETITIAN" renk={RENK.yesil} />
      </Kamera>
      {chip("diabetes", "DIABETES", 90, RENK.mercan)}
      {chip("kidney", "KIDNEY DISEASE", 180, RENK.mercan)}
      <BaslikBlok t={t} bas={K(0, "safety")} bitis={tN - 0.2} satirlar={["SAFETY", "FIRST"]} x={1860} y={700} boyut={100} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={tN} metin="A diet trend should never replace treatment." x={1860} y={690} hiza="sag" boyut={42} agirlik={800}
        genislik={520} renk={RENK.lacivert} />
    </>
  );
};
export default S55;
