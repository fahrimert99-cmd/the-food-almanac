// Sahne 57 — gerçek nedenler (hap sırası) + kalp için etiket
import React from "react";
import { Etiket, Hap, IkonYol, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = 7.2; // ilk cümle bitince üst katman söner
  const nedenler = [
    { ifade: "Celiac", metin: "CELIAC DISEASE" },
    { ifade: "wheat allergy", metin: "WHEAT ALLERGY" },
    { ifade: "non-celiac", metin: "NON-CELIAC GLUTEN SENSITIVITY" },
  ];
  const tGercek = K(0, "real reasons");
  const aN = eout(ilerle(t, tGercek, 0.5)) * sol(t, bit);
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 20, 1800])} />
      <div style={{ position: "absolute", left: 70, top: 62, display: "flex", gap: 20, opacity: sol(t, bit) }}>
        {nedenler.map((n) => {
          const [sc, al] = pop(t, K(0, n.ifade), 0.5);
          return (
            <div key={n.metin} style={{ transform: `scale(${sc})`, opacity: al, transformOrigin: "0 50%" }}>
              <Hap metin={n.metin} renk={RENK.mercan} boyut={28} />
            </div>
          );
        })}
      </div>
      <div style={{ position: "absolute", left: 70, top: 148, opacity: aN, display: "flex", alignItems: "center", gap: 14 }}>
        <IkonYol ad="onay" boyut={40} renk={RENK.yesil} />
        <span style={{ fontFamily: "Inter", fontWeight: 800, fontSize: 32, letterSpacing: 2, color: RENK.lacivert }}>REAL REASONS TO AVOID GLUTEN</span>
      </div>
      {/* 2. cümle */}
      <Hap metin="HARVARD STUDY" renk={RENK.altin} style={{ position: "absolute", left: 70, top: 62, opacity: eout(ilerle(t, K(1, "Harvard study"), 0.5)), transform: "scale(1)" }} />
      <Etiket t={t} bas={K(1, "no heart benefit")} capa={[1400, 470]} konum={[1450, 215]} metin="NO HEART BENEFIT" renk={RENK.mercan} />
    </>
  );
};

export default S57;
