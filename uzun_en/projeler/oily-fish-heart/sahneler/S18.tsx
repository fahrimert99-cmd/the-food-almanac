// Sahne 18 — yazı tahtasındaki kâğıda dört satır: iki grup arasında fark yok.
import React from "react";
import { AltSis, Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const SATIRLAR = [
  { ad: "STROKES", durum: "SAME", ifade: "Strokes", c: 0, renk: RENK.altin },
  { ad: "HEART DEATHS", durum: "SAME", ifade: "heart deaths", c: 0, renk: RENK.altin },
  { ad: "CANCER", durum: "NO DIFFERENCE", ifade: "cancer", c: 1, renk: RENK.yesil },
  { ad: "BLEEDING", durum: "NO EXCESS", ifade: "bleeding", c: 1, renk: RENK.yesil },
];

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780]);
  return (
    <>
      <Kamera gorsel="tam/18" pencere={p} />
      <AltSis a={0.4} />
      {SATIRLAR.map((r, i) => {
        const [sc, al] = pop(t, K(r.c, r.ifade), 0.5);
        return (
          <div key={r.ad} style={{ position: "absolute", left: 745, top: 300 + i * 120, width: 450, transform: `scale(${sc})`, opacity: al,
            transformOrigin: "50% 50%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10,
            background: RENK.kagitAcik, border: `3px solid ${r.renk}`, borderRadius: 16, padding: "12px 18px",
            fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.lacivert,
            boxShadow: "0 8px 20px rgba(48,40,34,0.16)", whiteSpace: "nowrap" }}>
            {r.ad}
            <span style={{ background: r.renk, color: "#fff", borderRadius: 999, padding: "4px 14px", fontSize: 21 }}>{r.durum}</span>
          </div>
        );
      })}
      <Etiket t={t} bas={K(0, "both groups")} capa={[1493, 680]} konum={[1500, 850]} metin="BOTH GROUPS" renk={RENK.altin} />
    </>
  );
};

export default S18;
