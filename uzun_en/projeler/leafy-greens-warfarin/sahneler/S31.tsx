// Sahne 31 — grafik: hedef aralıkta geçen sürede artış + kararlı kontrole ulaşanlar (Sconce 2007).
import React from "react";
import { AbsoluteFill, ANTON, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 170, GY = 470, GW = 900, GH = 350;

// Sağ sütunda "kararlı kontrole ulaşan" kartı: pay/payda çubuğuyla
const Kart: React.FC<{ t: number; bas: number; y: number; ad: string; pay: number; payda: number; renk: string }> = ({ t, bas, y, ad, pay, payda, renk }) => {
  const [sc, al] = pop(t, bas, 0.55);
  const dolu = eout(ilerle(t, bas + 0.2, 1.0)) * (pay / payda);
  return (
    <div style={{ position: "absolute", left: 1210, top: y, width: 560, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
      padding: "14px 26px 20px", background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 26, boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 18 }}>
        <span style={{ fontFamily: ANTON, fontSize: 92, lineHeight: 1.05, color: renk }}>{pay} OF {payda}</span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.lacivert }}>{ad}</span>
      </div>
      <div style={{ marginTop: 8, height: 18, borderRadius: 9, background: "#E6DFCF" }}>
        <div style={{ width: `${dolu * 100}%`, height: "100%", borderRadius: 9, background: renk }} />
      </div>
    </div>
  );
};

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const baslar = [K(0, "28 percent") - 0.05, K(0, "15 percent") - 0.05];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 0 ? RENK.yesil : RENK.altin, bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, K(0, "target range"), 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const tBas = K(1, "19");
  const aBaslik = eout(ilerle(t, tBas - 0.2, 0.5));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={72} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 276, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={1.2} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={35} />
      <div style={{ position: "absolute", left: 1210, top: 420, opacity: aBaslik, fontFamily: INTER, fontWeight: 800, fontSize: 28,
        letterSpacing: 2, color: RENK.koyuYesil }}>REACHED STABLE CONTROL</div>
      <Kart t={t} bas={tBas} y={480} ad="VITAMIN K" pay={19} payda={35} renk={RENK.yesil} />
      <Kart t={t} bas={K(1, "7 of")} y={690} ad="PLACEBO" pay={7} payda={33} renk={RENK.altin} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S31;
