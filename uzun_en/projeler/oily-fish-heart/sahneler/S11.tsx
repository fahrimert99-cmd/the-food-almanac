// Sahne 11 — yol haritası: defterin üstünde üç numaralı adım, kelimeyle gelir.
import React from "react";
import { ANTON, Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const ADIMLAR = [
  { ifade: "First", metin: "CAPSULES, TESTED", renk: RENK.mercan },
  { ifade: "prescription", metin: "THE PRESCRIPTION EXCEPTION", renk: RENK.altin },
  { ifade: "what fish", metin: "WHAT FISH MAY OFFER", renk: RENK.yesil },
];

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kon = [K(1, "First"), K(2, "prescription"), K(3, "what fish")];
  const tTest = K(1, "tested"), tFish = K(3, "fish");
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 90, 1760])}>
        <Etiket t={t} bas={tTest} bitis={kon[2]} capa={[900, 660]} konum={[1000, 800]} metin="TESTED" renk={RENK.mercan} />
        <Etiket t={t} bas={tFish} capa={[1270, 290]} konum={[1660, 340]} metin="FISH" renk={RENK.yesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 70, top: 70, display: "flex", flexDirection: "column", gap: 18 }}>
        {ADIMLAR.map((a, i) => {
          const [sc, al] = pop(t, kon[i], 0.5);
          return (
            <div key={a.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, alignSelf: "flex-start",
              display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${a.renk}`, borderRadius: 999,
              padding: "8px 28px 8px 10px", whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
              <span style={{ width: 48, height: 48, borderRadius: "50%", background: a.renk, color: "#fff", display: "flex",
                alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 30 }}>{i + 1}</span>
              <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.lacivert }}>{a.metin}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S11;
