// Sahne 12 — bölüm kartı: "What the trials show" (PART 2).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 13 (kitaplar+bardak), 14 (ölçer+bardak; soldaki ince çizgi kıvrımları dışarıda), 16 (cep saati)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/13", kirp: [100, 230, 1000, 905] },
  { gorsel: "tam/14", kirp: [90, 230, 890, 830] },
  { gorsel: "tam/16", kirp: [20, 180, 1120, 1005] },
];

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMany = K(0, "many"), tTogether = K(0, "together");
  const [sa, aa] = pop(t, tTogether - 0.1, 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* altyazının altı boşluk: birçok deneme -> tek birleşik sonuç */}
      <div style={{ position: "absolute", left: 140, top: 790, display: "flex", alignItems: "center", gap: 14 }}>
        {[0, 1, 2, 3, 4].map((i) => {
          const [sc, al] = pop(t, tMany + i * 0.1, 0.4);
          return <span key={i} style={{ width: 34, height: 34, borderRadius: "50%", background: RENK.altin, transform: `scale(${sc})`,
            opacity: al, border: `3px solid ${RENK.kagitAcik}`, boxShadow: "0 4px 10px rgba(48,40,34,0.2)" }} />;
        })}
        <span style={{ transform: `scale(${sa})`, opacity: aa, fontFamily: INTER, fontWeight: 800, fontSize: 30, color: RENK.altin }}>→</span>
        <div style={{ transform: `scale(${sa})`, transformOrigin: "0% 50%", opacity: aa, background: RENK.kagitAcik, border: `3px solid ${RENK.koyuYesil}`,
          borderRadius: 999, padding: "10px 26px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.koyuYesil,
          whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>POOLED RESULT</div>
      </div>
    </>
  );
};

export default S12;
