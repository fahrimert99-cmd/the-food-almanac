// Sahne 16 — LDL artışı sağlamlık analizlerinde de sürdü: terazi + kâğıt yığını (denemeler).
import React from "react";
import { Baslik, BaslikBlok, Etiket, IkonYol, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Küçük hap: soldan hizalı, çarpı simgeli
const Hap: React.FC<{ t: number; bas: number; x: number; y: number; metin: string }> = ({ t, bas, x, y, metin }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(0,-50%) scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
      display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999,
      padding: "8px 28px 8px 10px", boxShadow: "0 8px 20px rgba(48,40,34,0.14)", whiteSpace: "nowrap" }}>
      <span style={{ width: 40, height: 40, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad="carpi" boyut={24} renk="#fff" kalinlik={7} />
      </span>
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.lacivert }}>{metin}</span>
    </div>
  );
};

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLdl = K(0, "LDL"), tHeld = K(0, "held up"), tOut = K(0, "left out"), tTrials = K(0, "trials"),
    tRand = K(0, "randomized"), tWeak = K(0, "weaker");
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 50, 1780])}>
        <Etiket t={t} bas={tLdl} capa={[400, 520]} konum={[300, 150]} metin="LDL INCREASE" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={tTrials} capa={[1100, 790]} konum={[1420, 780]} metin="TRIALS" renk={RENK.altin} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={tHeld} satirlar={s.meta.baslik?.satirlar ?? []} x={1000} y={200} boyut={120} />
      <Baslik t={t} bas={tOut} metin="LEFT OUT:" x={1004} y={470} boyut={34} renk={RENK.gri} font="inter" agirlik={800} aralik={6} />
      <Hap t={t} bas={tRand} x={1000} y={545} metin="NON-RANDOMIZED TRIALS" />
      <Hap t={t} bas={tWeak - 0.1} x={1000} y={640} metin="WEAKER QUALITY SCORES" />
    </>
  );
};

export default S16;
