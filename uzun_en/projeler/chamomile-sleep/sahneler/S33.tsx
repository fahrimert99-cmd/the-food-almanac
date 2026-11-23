// Sahne 33 — Fare: önce kaygı benzeri davranış azalır, sonra 10 kat dozda hafif sedasyon.
import React from "react";
import { Etiket, IkonYol, INTER, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAzalma = K(0, "reduced");
  const tOn = K(1, "ten times");
  const [sc, al] = pop(t, tAzalma, 0.55);
  const a = al * sol(t, tOn - 0.1);
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760])}>
        <Etiket t={t} bas={K(0, "mice,")} capa={[1130, 520]} konum={[1450, 380]} metin="MOUSE STUDY" renk={RENK.altin} />
      </Kamera>
      {a > 0 && (
        <div style={{ position: "absolute", left: 60, top: 150, opacity: a, transform: `scale(${sc})`, transformOrigin: "0% 50%",
          display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`,
          borderRadius: 999, padding: "10px 26px 10px 12px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)", whiteSpace: "nowrap" }}>
          <span style={{ width: 52, height: 52, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center",
            justifyContent: "center", transform: "rotate(90deg)" }}><IkonOk /></span>
          <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep }}>ANXIETY-LIKE BEHAVIOR</span>
        </div>
      )}
      <VurguRozet t={t} bas={tOn} vurgu="10× DOSE" not="mild sedation" x={330} y={130} genislik={400} boyut={84} renk={RENK.altin} />
    </>
  );
};

const IkonOk = () => <IkonYol ad="ok" boyut={32} renk="#fff" kalinlik={7} />;

export default S33;
