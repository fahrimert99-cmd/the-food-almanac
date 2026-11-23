// Sahne 31 — grafik: en çok organik yiyen grupta daha düşük risk; bazı kanserlerde ilişki yok.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, IkonYol, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 150, GY = 470, GW = 1000, GH = 330;

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const baslar = [K(0, "25 percent") - 0.05, K(0, "34 percent") - 0.05];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 0 ? RENK.yesil : RENK.koyuYesil, bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, K(0, "most organic"), 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const tNo = K(1, "No link");
  const [sB, aB] = pop(t, tNo, 0.55);
  const maddeler = [["PROSTATE", K(1, "prostate")], ["COLORECTAL", K(1, "colorectal")], ["PREMENOPAUSAL BREAST", K(1, "premenopausal")]] as const;
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin="LOWER CANCER RISK" x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, fontFamily: INTER, fontWeight: 500, fontSize: 32, color: RENK.lacivert }}>
        highest vs lowest organic group</div>
      <CubukGrafik t={t} bas={baslar[0]} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={42} />
      {/* sağ sütun: ilişki görülmeyen kanserler */}
      <div style={{ position: "absolute", left: 1270, top: 380, width: 560, opacity: aB, transform: `scale(${sB})`, transformOrigin: "0 0",
        background: "#FCF8EC", border: `4px solid ${RENK.gri}`, borderRadius: 26, padding: "18px 28px 24px", boxShadow: "0 10px 26px rgba(48,40,34,0.14)" }}>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.lacivert, marginBottom: 12 }}>NO LINK APPEARED</div>
        {maddeler.map(([ad, b]) => {
          const [sc, al] = pop(t, b, 0.45);
          return (
            <div key={ad} style={{ display: "flex", alignItems: "center", gap: 14, margin: "10px 0", opacity: al, transform: `translateX(${(1 - sc) * -20}px)` }}>
              <span style={{ width: 40, height: 40, borderRadius: "50%", background: RENK.gri, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                <IkonYol ad="carpi" boyut={22} renk="#fff" kalinlik={7} />
              </span>
              <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, color: RENK.lacivert }}>{ad}</span>
            </div>
          );
        })}
      </div>
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center", fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S31;
