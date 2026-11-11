// Sahne 56 — ipucu 4: bütün kaynakları say.
import React from "react";
import { ANTON, Etiket, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, INTER } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sb, ab] = pop(t, 0.05, 0.5);
  const bitis = K(3, "keep") - 0.1;
  const pK = eout(ilerle(t, K(1, "Count"), 0.5));
  const pS = eout(ilerle(t, K(2, "supplements"), 0.5)) * (1 - eout(ilerle(t, bitis, 0.4)));
  const tTally = K(3, "keep");
  const pT = eout(ilerle(t, tTally, 0.5));
  // 4 dikey çizgi + 1 çapraz (kaba sayım), "rough" ile çizilir
  const cz = ilerle(t, K(3, "rough"), 0.9);
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [50, 30, 1820], [100, 60, 1720])}>
        <Etiket t={t} bas={K(2, "Cinnamon rolls")} bitis={bitis} capa={[900, 430]} konum={[900, 250]} metin="CINNAMON ROLL" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "cinnamon tea")} bitis={bitis} capa={[360, 470]} konum={[320, 290]} metin="CINNAMON TEA" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "sprinkled")} bitis={bitis} capa={[1450, 520]} konum={[1690, 430]} metin="SPRINKLED" renk={RENK.yesil} />
      </Kamera>
      {/* başlık kartı */}
      <div style={{ position: "absolute", left: 56, top: 46, opacity: pK, transform: `translateY(${(1 - pK) * -12}px)`, display: "flex",
        alignItems: "center", gap: 22, background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 24, padding: "12px 34px 12px 16px",
        boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
        <div style={{ transform: `scale(${sb})`, opacity: ab, width: 78, height: 78, borderRadius: "50%", background: RENK.altin, color: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 54 }}>4</div>
        <div style={{ fontFamily: ANTON, fontSize: 68, color: RENK.lacivert, whiteSpace: "nowrap", lineHeight: 1.2 }}>COUNT ALL YOUR SOURCES</div>
      </div>
      {/* takviyeler */}
      <div style={{ position: "absolute", left: 820, top: 890, transform: `translate(-50%, -50%) translateY(${(1 - pS) * 14}px)`, opacity: pS,
        background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 999, padding: "10px 30px", whiteSpace: "nowrap",
        fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
        + SUPPLEMENTS
      </div>
      {/* kaba günlük sayım */}
      <div style={{ position: "absolute", left: 1565, top: 780, width: 300, opacity: pT, transform: `translateY(${(1 - pT) * 14}px)`, textAlign: "center",
        background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 24, padding: "10px 0 14px", boxShadow: "0 10px 26px rgba(48,40,34,0.2)" }}>
        <svg width={220} height={90} viewBox="0 0 220 90">
          {[0, 1, 2, 3].map((i) => {
            const p = Math.min(1, Math.max(0, cz * 5 - i));
            return <line key={i} x1={30 + i * 44} y1={78} x2={30 + i * 44} y2={78 - 68 * p} stroke={RENK.lacivert} strokeWidth={8} strokeLinecap="round" />;
          })}
          {(() => {
            const p = Math.min(1, Math.max(0, cz * 5 - 4));
            return <line x1={14} y1={64} x2={14 + 190 * p} y2={64 - 40 * p} stroke={RENK.mercan} strokeWidth={8} strokeLinecap="round" />;
          })()}
        </svg>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.lacivert }}>ROUGH TALLY</div>
      </div>
    </>
  );
};

export default S56;
