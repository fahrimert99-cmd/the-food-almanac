// Sahne 3 — terazi: taze / donmuş etiketleri ve pişirme yöntemi hapı.
import React from "react";
import { Etiket, INTER, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "cooking") - 0.1, 0.5);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        {/* sağ alttaki küçük imza örtülür */}
        <div style={{ position: "absolute", left: 1830, top: 940, width: 90, height: 120,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 75%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "fresh wins")} capa={[400, 300]} konum={[420, 70]} metin="WHEN FRESH WINS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "frozen wins")} capa={[1330, 440]} konum={[1380, 150]} metin="WHEN FROZEN WINS" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 960, top: 880, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al,
        display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`,
        borderRadius: 999, padding: "12px 34px", fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 2, color: RENK.lacivert,
        boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.koyuYesil }} />
        WHICH COOKING KEEPS MORE
      </div>
    </>
  );
};

export default S03;
