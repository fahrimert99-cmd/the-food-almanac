// Sahne 60 — kapanış kartı: tek senkron öğe, anlatıma göre metni değişir.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/59", kirp: [300, 150, 1500, 1050] },
  { gorsel: "tam/55", kirp: [40, 50, 1140, 875] },
  { gorsel: "tam/57", kirp: [380, 150, 1380, 900] },
];

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const adimlar = [
    { bas: K(0, "subscribe"), metin: "SUBSCRIBE", renk: RENK.mercan },
    { bas: K(1, "education"), metin: "NOT MEDICAL ADVICE", renk: RENK.altin },
    { bas: K(2, "See"), metin: "SEE YOU NEXT TIME", renk: RENK.yesil },
  ];
  let a = adimlar[0];
  for (const x of adimlar) if (t >= x.bas) a = x;
  const [sc, al] = pop(t, a.bas, 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {t >= adimlar[0].bas && (
        <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
          display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${a.renk}`,
          borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
          color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
          <span style={{ width: 20, height: 20, borderRadius: "50%", background: a.renk, flex: "none" }} />
          {a.metin}
        </div>
      )}
    </>
  );
};

export default S60;
