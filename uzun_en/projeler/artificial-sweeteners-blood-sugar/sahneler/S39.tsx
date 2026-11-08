// Sahne 39 — ADA: ölçülü ve kısa süreli kullanım. Bardak + şeker + terazi; üstte sırayla dört hap.
import React from "react";
import { Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const HAPLAR = [
  { ifade: "moderation", metin: "IN MODERATION", renk: RENK.koyuYesil },
  { ifade: "short term", metin: "SHORT TERM", renk: RENK.altin },
  { ifade: "cut calories", metin: "CUT CALORIES", renk: RENK.yesil },
  { ifade: "carbohydrates", metin: "CUT CARBS", renk: RENK.yesil },
];

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={K(0, "sugar-sweetened")} capa={[640, 330]} konum={[250, 420]} metin="SUGAR-SWEETENED" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 70, top: 34, display: "flex", gap: 14 }}>
        {HAPLAR.map((h) => {
          const [sc, al] = pop(t, K(0, h.ifade), 0.5);
          return (
            <div key={h.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, whiteSpace: "nowrap", background: RENK.kagitAcik,
              border: `3px solid ${h.renk}`, borderRadius: 999, padding: "10px 26px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
              color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{h.metin}</div>
          );
        })}
      </div>
    </>
  );
};

export default S39;
