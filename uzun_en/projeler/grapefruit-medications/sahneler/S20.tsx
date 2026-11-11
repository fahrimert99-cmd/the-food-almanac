// Sahne 20 — kas riski + atorvastatin / simvastatin karşılaştırması (şematik, sayısız).
import React from "react";
import { BaslikBlok, Etiket, Ikon, INTER, Kamera, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Satir: React.FC<{ t: number; bas: number; ad: string; oran: number; renk: string; y: number; onay: number }> = ({ t, bas, ad, oran, renk, y, onay }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  const p = eout(ilerle(t, bas + 0.3, 0.9));
  return (
    <>
      <div style={{ position: "absolute", left: 100, top: y, width: 560, height: 104, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%",
        background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 22, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
        <div style={{ position: "absolute", left: 24, top: 12, fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert }}>{ad}</div>
        <div style={{ position: "absolute", left: 24, top: 60, width: 440, height: 22, borderRadius: 11, background: "rgba(27,42,65,0.1)" }}>
          <div style={{ width: `${oran * p * 100}%`, height: "100%", borderRadius: 11, background: renk }} />
        </div>
      </div>
      <Ikon t={t} bas={onay} ad="onay" x={620} y={y + 52} boyut={64} zemin={RENK.lacivert} />
    </>
  );
};

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 20, 1740])}>
        {/* alttaki sahte yazı satırı örtülür */}
        <div style={{ position: "absolute", left: 120, top: 925, width: 560, height: 90,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "muscle")} capa={[1000, 530]} konum={[900, 150]} metin="MUSCLE RISK" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "Higher")} satirlar={["HIGHER", "STATIN LEVELS"]} x={100} y={150} boyut={80} renkler={[RENK.lacivert, RENK.mercan]} />
      <Satir t={t} bas={K(1, "atorvastatin")} ad="ATORVASTATIN" oran={0.45} renk={RENK.yesil} y={380} onay={K(1, "still")} />
      <Satir t={t} bas={K(1, "simvastatin,")} ad="SIMVASTATIN" oran={0.9} renk={RENK.altin} y={510} onay={K(1, "both")} />
      <div style={{ position: "absolute", left: 100, top: 630, opacity: eout(ilerle(t, K(1, "smaller"), 0.5)), fontFamily: INTER, fontWeight: 800,
        fontSize: 22, letterSpacing: 3, color: RENK.gri }}>ILLUSTRATIVE · EFFECT SIZE</div>
    </>
  );
};

export default S20;
