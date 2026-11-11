// Sahne 53 — Alışkanlık 5: çiğden vazgeçme.
import React from "react";
import { ANTON, Baslik, Etiket, IkonYol, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Yerel yardımcılar: sayı rozeti ve hap.
const Sayi: React.FC<{ t: number; n: string }> = ({ t, n }) => {
  const [sc, al] = pop(t, 0.05, 0.5);
  return (
    <div style={{ position: "absolute", left: 56, top: 52, width: 96, height: 96, borderRadius: "50%", background: RENK.lacivert,
      border: `4px solid ${RENK.altin}`, boxSizing: "border-box", color: "#fff", fontFamily: ANTON, fontSize: 66, lineHeight: "88px",
      textAlign: "center", transform: `scale(${sc})`, opacity: al }}>{n}</div>
  );
};

const Pil: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string;
  ikon?: "onay" | "carpi" | "ok" | "saat"; boyut?: number }> = ({ t, bas, bitis = 1e9, x, y, metin, renk, ikon, boyut = 30 }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a, display: "flex",
      alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "10px 26px 10px 16px", fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 1.5, color: RENK.lacivert,
      boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
      {ikon ? <IkonYol ad={ikon} boyut={boyut * 1.2} renk={renk} kalinlik={7} />
        : <span style={{ width: boyut * 0.5, height: boyut * 0.5, borderRadius: "50%", background: renk, flex: "none" }} />}
      {metin}
    </div>
  );
};

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tVazgec = K(1, "don't"), tCig = K(2, "raw"), tPis = K(2, "cooked"), tHafta = K(2, "through the week");
  const tEn = K(2, "the best method"), tDaha = K(2, "more vegetables");
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 100, 1920], [120, 150, 1700])}>
        <Etiket t={t} bas={tCig} bitis={7.2} capa={[773, 430]} konum={[240, 400]} metin="RAW SALAD" renk={RENK.yesil} />
        <Etiket t={t} bas={tPis} bitis={7.2} capa={[1150, 575]} konum={[1173, 810]} metin="STEAMED" renk={RENK.yesil} />
        <Etiket t={t} bas={tPis + 0.3} bitis={7.2} capa={[1450, 440]} konum={[1560, 330]} metin="ROASTED" renk={RENK.altin} />
      </Kamera>
      <Sayi t={t} n="5" />
      <Baslik t={t} bas={tVazgec} bitis={4.3} metin="DON'T GIVE UP RAW" x={180} y={102} boyut={82} renk={RENK.koyuYesil} />
      {Array.from({ length: 7 }, (_, i) => {
        const [sc, al] = pop(t, tHafta + i * 0.12, 0.45);
        const a = al * sol(t, 7.2);
        return a > 0 ? (
          <div key={i} style={{ position: "absolute", left: 200 + i * 78 - 28, top: 76, width: 56, height: 56, borderRadius: "50%",
            background: i % 2 ? RENK.altin : RENK.yesil, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 6px 16px rgba(48,40,34,0.2)",
            transform: `scale(${sc})`, opacity: a }} />
        ) : null;
      })}
      <Not t={t} bas={tHafta + 0.2} bitis={7.2} metin="RAW + COOKED THROUGH THE WEEK" x={180} y={150} boyut={34} agirlik={800} />
      <Baslik t={t} bas={tEn} metin="THE BEST METHOD" x={180} y={100} boyut={82} renk={RENK.lacivert} />
      <Baslik t={t} bas={tDaha} metin="MORE VEGETABLES" x={180} y={192} boyut={82} renk={RENK.koyuYesil} />
    </>
  );
};

export default S53;
