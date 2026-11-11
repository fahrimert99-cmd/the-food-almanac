// Sahne 41 — yaşla birlikte bağışıklık ve organlar zayıflar.
import React from "react";
import { Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "one reason"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(0, "immune")} capa={[1240, 400]} konum={[1640, 230]} metin="IMMUNE SYSTEM" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "organs")} capa={[440, 560]} konum={[220, 880]} metin="ORGANS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "harmful germs")} capa={[787, 573]} konum={[300, 140]} metin="HARMFUL GERMS" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 1480, top: 470, width: 400, transform: `scale(${sc})`, transformOrigin: "50% 0", opacity: al,
        background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 24, padding: "16px 22px", textAlign: "center",
        fontFamily: INTER, fontWeight: 800, fontSize: 30, lineHeight: 1.25, letterSpacing: 1, color: RENK.lacivert,
        boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        ONE REASON AN INFECTION CAN HIT OLDER ADULTS HARDER
      </div>
    </>
  );
};

export default S41;
