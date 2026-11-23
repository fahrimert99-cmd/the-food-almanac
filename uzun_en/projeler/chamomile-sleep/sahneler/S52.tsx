// Sahne 52 — CBT-I nedir; kılavuzda ilaç yalnızca gerekirse.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, kagit, pop, sol } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tStr = K(0, "structured"), tHab = K(0, "sleep habits"), tTh = K(0, "thoughts");
  const tGl = K(1, "guideline"), tMed = K(1, "medicine"), tOnly = K(1, "only if");
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1760]);
  const bit = tGl - 0.3;
  const adim = (b: number, no: string, m: string, renk: string, y: number) => {
    const [sc, al] = pop(t, b, 0.5);
    if (al <= 0) return null;
    return (
      <div style={{ position: "absolute", left: 80, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `4px solid ${renk}`, borderRadius: 999,
        padding: "9px 28px 9px 10px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)", whiteSpace: "nowrap" }}>
        <span style={{ width: 46, height: 46, borderRadius: "50%", background: renk, color: "#fff", fontFamily: INTER, fontWeight: 800,
          fontSize: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>{no}</span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.lacivert }}>{m}</span>
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kam} />
      <div style={{ position: "absolute", left: 0, top: 0, width: 700, height: 520,
        background: `linear-gradient(to right, ${kagit(0.9)} 0%, ${kagit(0.9)} 75%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={tStr} bitis={bit} metin="STRUCTURED" x={100} y={130} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={tStr + 0.2} bitis={bit} metin="PROGRAM" x={100} y={220} boyut={84} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tHab} bitis={bit} capa={[500, 800]} konum={[330, 480]} metin="SLEEP HABITS" renk={RENK.altin} />
      <Etiket t={t} bas={tTh} bitis={bit} capa={[850, 310]} konum={[1250, 190]} metin="THOUGHTS" renk={RENK.lacivert} />
      {adim(tGl, "1", "CBT-I FIRST", RENK.yesil, 130)}
      {adim(tMed, "2", "MEDICINE, IF NEEDED", RENK.altin, 260)}
      <Not t={t} bas={tOnly} metin="Only if CBT-I alone does not work" x={86} y={330} boyut={30} genislik={560} agirlik={700} />
    </>
  );
};
export default S52;
