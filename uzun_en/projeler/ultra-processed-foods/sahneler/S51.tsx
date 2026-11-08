// Sahne 51 — Tek bir takas: iki grup kart (görselsiz, kâğıt zemin; 51 görseli üretilemedi).
import React from "react";
import { AbsoluteFill, Baslik, IkonYol, INTER, Not, RENK, SP, eout, ilerle, kelimeZamani, pop, ANTON } from "../kutuphane";

const KARTLAR = [
  { m: ["WHOLE GRAIN", "BREAD"], ifade: "Whole", x: 330, renk: RENK.yesil, k: 2 },
  { m: ["PLAIN", "YOGURT"], ifade: "plain", x: 770, renk: RENK.yesil, k: 2 },
  { m: ["CANNED", "BEANS"], ifade: "Canned", x: 1210, renk: RENK.altin, k: 3 },
  { m: ["FROZEN", "VEGETABLES"], ifade: "frozen", x: 1650, renk: RENK.altin, k: 3 },
];

const GRUPLAR = [
  { m: "LINKED WITH LOWER DIABETES RISK", k: 2, ifade: "linked", x0: 130, x1: 970, renk: RENK.yesil },
  { m: "CONVENIENT AND SIMPLE", k: 3, ifade: "convenient", x0: 1010, x1: 1850, renk: RENK.altin },
];

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const aBar = eout(ilerle(t, 0.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 140, top: 110, height: 6, width: 200 * aBar, background: RENK.altin }} />
      <Baslik t={t} bas={0.05} metin="FIVE:" x={140} y={190} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={0.95} metin="ONE SWAP" x={140} y={310} boyut={100} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "perfection") - 0.1} metin="A swap, not perfection" x={760} y={282} boyut={38} renk={RENK.gri} agirlik={700} />
      {GRUPLAR.map((g) => {
        const [sc, al] = pop(t, K(g.k, g.ifade) - 0.1, 0.55);
        const w = eout(ilerle(t, K(g.k, g.ifade), 0.6));
        return (
          <React.Fragment key={g.m}>
            <div style={{ position: "absolute", left: g.x0, top: 480, width: g.x1 - g.x0, textAlign: "center", opacity: al, transform: `scale(${sc})`,
              fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 3, color: g.renk }}>{g.m}</div>
            <div style={{ position: "absolute", left: g.x0 + (g.x1 - g.x0) * (1 - w) / 2, top: 528, width: (g.x1 - g.x0) * w, height: 6, background: g.renk, borderRadius: 3 }} />
          </React.Fragment>
        );
      })}
      {KARTLAR.map((c) => {
        const [sc, al] = pop(t, K(c.k, c.ifade) - 0.05, 0.55);
        return (
          <div key={c.m[0]} style={{ position: "absolute", left: c.x - 200, top: 570, width: 400, height: 250, transform: `scale(${sc})`, opacity: al,
            background: RENK.kagitAcik, border: `4px solid ${RENK.lacivert}`, borderRadius: 22, boxShadow: "0 14px 34px rgba(48,40,34,0.22)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <span style={{ width: 54, height: 54, borderRadius: "50%", background: c.renk, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
              <IkonYol ad="onay" boyut={36} renk="#fff" kalinlik={7} />
            </span>
            {c.m.map((l) => <span key={l} style={{ fontFamily: ANTON, fontSize: 46, lineHeight: 1.1, color: RENK.lacivert }}>{l}</span>)}
          </div>
        );
      })}
      <Not t={t} bas={K(2, "American") - 0.1} metin="IN THAT AMERICAN STUDY" x={550} y={850} boyut={26} renk={RENK.gri} hiza="orta" agirlik={800} />
    </AbsoluteFill>
  );
};

export default S51;
