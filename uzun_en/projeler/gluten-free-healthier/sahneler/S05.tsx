// Sahne 5: bölüm kartı + üç koşul sayacı
import React from "react";
import { AbsoluteFill, ANTON, Baslik, BaslikBlok, Etiket, Hap, INTER, Kamera, KaynakEtiketi, Liste, Not, Panel, Parcaciklar, RENK, SP,
  VurguRozet, BolumKarti, Ikon, MARKA, eout, ilerle, ikiSatir, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUc = K(0, "Three");
  const tMeet = K(1, "meet");
  const [, aE] = pop(t, tUc + 0.5, 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/06", kirp: [40, 230, 1060, 995] },
        { gorsel: "tam/07", kirp: [100, 130, 1100, 880] },
        { gorsel: "tam/08", kirp: [60, 120, 1060, 870] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 16, opacity: aE }}>
        {[0, 1, 2].map((i) => {
          const [sc, al] = pop(t, i === 0 ? tUc + 0.5 : tMeet + 0.2 * i, 0.4);
          return (
            <div key={i} style={{ width: 64, height: 64, borderRadius: "50%", background: i === 0 ? RENK.altin : RENK.lacivert, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 36, transform: `scale(${sc})`, opacity: al }}>{i + 1}</div>
          );
        })}
        <div style={{ marginLeft: 12, fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 4, color: RENK.lacivert }}>THREE CONDITIONS</div>
      </div>
    </>
  );
};
export default S05;
