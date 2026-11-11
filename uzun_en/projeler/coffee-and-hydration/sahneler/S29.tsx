// Sahne 29 — Armstrong: 6 gün 3 mg/kg, sonra 5 gün üç grup.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, Not, Ortu, RENK, SP, ANTON, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Gün şeması: 11 gün, birim genişlik
const X0 = 250, G = 130, Y0 = 400;
const GRUPLAR = [
  { ifade: "none,", metin: "NONE", renk: RENK.gri },
  { ifade: "3,", metin: "3 MG/KG", renk: RENK.altin },
  { ifade: "6", metin: "6 MG/KG", renk: RENK.mercan },
];

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOrtu = K(1, "For");
  const pOrtu = eout(ilerle(t, tOrtu, 0.8));
  const tSon = K(1, "no other caffeine");
  const [s1, a1] = pop(t, tOrtu + 0.2, 0.5);
  const [sB, aB] = pop(t, tOrtu + 0.5, 0.5);
  const [sN, aN] = pop(t, tSon, 0.5);
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1810])}>
        <Etiket t={t} bas={K(0, "3 milligrams")} bitis={tOrtu + 0.4} capa={[1020, 520]} konum={[1380, 520]} metin="3 MG/KG" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "capsules.")} bitis={tOrtu + 0.4} capa={[400, 840]} konum={[330, 640]} metin="IN CAPSULES" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "first")} bitis={tOrtu + 0.3} metin="FIRST 6 DAYS" x={480} y={470} boyut={84} renk={RENK.lacivert} hiza="orta" />
      <Ortu a={0.94 * pOrtu} />
      {pOrtu > 0.3 && (
        <>
          <Baslik t={t} bas={tOrtu + 0.2} metin="THE 11 DAYS" x={X0} y={190} boyut={80} renk={RENK.koyuYesil} />
          {/* 1–6. gün: herkes 3 mg/kg */}
          <div style={{ position: "absolute", left: X0, top: Y0, width: 6 * G - 16, height: 3 * 120 + 2 * 24, transform: `scale(${s1})`,
            transformOrigin: "0 50%", opacity: a1, background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 26,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 3, color: RENK.lacivert }}>DAYS 1–6 · EVERYONE</div>
            <div style={{ fontFamily: ANTON, fontSize: 104, color: RENK.altin, lineHeight: 1.1 }}>3 MG/KG</div>
            <div style={{ fontFamily: INTER, fontWeight: 600, fontSize: 28, color: RENK.lacivert }}>caffeine capsules</div>
          </div>
          <div style={{ position: "absolute", left: X0 + 6 * G - 8, top: Y0 + 168, opacity: aB, transform: `scale(${sB})`, fontFamily: ANTON,
            fontSize: 70, color: RENK.altin, marginLeft: -22 }}>›</div>
          {/* 7–11. gün: üç grup */}
          <Not t={t} bas={K(1, "next")} metin="DAYS 7–11 · THREE GROUPS" x={X0 + 6 * G + 20} y={Y0 - 66} boyut={30} agirlik={800} />
          {GRUPLAR.map((g, i) => {
            const [sc, al] = pop(t, K(1, g.ifade), 0.5);
            return (
              <div key={g.metin} style={{ position: "absolute", left: X0 + 6 * G + 20, top: Y0 + i * 144, width: 5 * G - 20, height: 120,
                transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al, background: g.renk, borderRadius: 24,
                display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 64, color: "#fff",
                boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>{g.metin}</div>
            );
          })}
          <div style={{ position: "absolute", left: 1100, top: 850, transform: `translateX(-50%) scale(${sN})`, opacity: aN, background: RENK.lacivert,
            color: "#fff", borderRadius: 999, padding: "12px 34px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 3,
            whiteSpace: "nowrap" }}>NO OTHER CAFFEINE</div>
        </>
      )}
    </>
  );
};

export default S29;
