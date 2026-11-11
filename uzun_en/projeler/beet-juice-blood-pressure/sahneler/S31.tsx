// Sahne 31 — dört haftalık hasta çalışması: etki içildikçe sürer, bırakınca başlangıca döner (şematik).
import React from "react";
import { Baslik, INTER, Kamera, RENK, SP, einout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Şematik grafik alanı (ekran koordinatı): x 260–1260, y 110–390
const X0 = 260, X1 = 1260, XS = 760, YB = 160, YD = 330;
const ARA = (a: number, b: number, k: number) => a + (b - a) * k;

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1810]);
  const pA = einout(ilerle(t, K(0, "kept drinking"), 1.6));
  const pB = einout(ilerle(t, K(0, "baseline"), 1.8));
  const [sc1, al1] = pop(t, K(0, "four-week"), 0.5);
  const [sc2, al2] = pop(t, K(0, "after they"), 0.5);
  const ax = ARA(XS, X1 - 40, pB), ay = ARA(YD, YB + 14, pB);
  return (
    <>
      <Kamera gorsel="tam/31" pencere={p} />
      <Pil1 sc={sc1} al={al1} />
      {/* şematik grafik */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {t >= K(0, "kept drinking") - 0.3 && (
          <g opacity={ilerle(t, K(0, "kept drinking") - 0.3, 0.5)}>
            <line x1={X0} y1={YD + 40} x2={X1} y2={YD + 40} stroke={RENK.lacivert} strokeWidth={3} />
            <line x1={X0} y1={YD + 40} x2={X0} y2={YB - 30} stroke={RENK.lacivert} strokeWidth={3} />
          </g>
        )}
        {t >= K(0, "baseline") && (
          <line x1={X0} y1={YB} x2={X1} y2={YB} stroke={RENK.gri} strokeWidth={3} strokeDasharray="12 10" opacity={ilerle(t, K(0, "baseline"), 0.5)} />
        )}
        <line x1={X0 + 20} y1={YB} x2={X0 + 20} y2={YD} stroke={RENK.gri} strokeWidth={2} opacity={0} />
        <path d={`M ${X0 + 30} ${YD} L ${XS} ${YD}`} stroke={RENK.yesil} strokeWidth={9} strokeLinecap="round" fill="none"
          pathLength={1} strokeDasharray={1} strokeDashoffset={1 - pA} />
        {pB > 0 && <path d={`M ${XS} ${YD} C ${XS + 160} ${YD} ${XS + 260} ${YB + 14} ${X1 - 40} ${YB + 14}`} stroke={RENK.mercan}
          strokeWidth={9} strokeLinecap="round" fill="none" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - pB} />}
        {pB > 0 && <circle cx={ax} cy={ay} r={0} />}
        {t >= K(0, "after they") && (
          <line x1={XS} y1={YB - 20} x2={XS} y2={YD + 40} stroke={RENK.lacivert} strokeWidth={3} strokeDasharray="4 8" opacity={al2} />
        )}
      </svg>
      <Txt t={t} bas={K(0, "kept drinking")} x={X0 + 30} y={YD + 52} metin="DRINKING" renk={RENK.yesil} />
      <Txt t={t} bas={K(0, "baseline")} x={X0 + 24} y={YB + 10} metin="BASELINE" renk={RENK.gri} />
      <Txt t={t} bas={K(0, "after they")} x={XS + 14} y={YD + 52} metin="STOPPED" renk={RENK.mercan} />
      <Txt t={t} bas={K(0, "kept drinking")} x={X1 - 330} y={YB - 78} metin="PRESSURE · ILLUSTRATIVE" renk={RENK.altin} boyut={22} />
      <Baslik t={t} bas={K(1, "maintain")} metin="MAINTAIN," x={80} y={835} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "not")} metin="NOT BANK" x={80} y={930} boyut={92} renk={RENK.mercan} />
    </>
  );
};

const Pil1: React.FC<{ sc: number; al: number }> = ({ sc, al }) => (
  <div style={{ position: "absolute", left: 80, top: 56, transformOrigin: "0 50%", transform: `scale(${sc})`, opacity: al, display: "flex",
    alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 999,
    padding: "10px 28px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep }}>
    <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.lacivert }} />4-WEEK PATIENT TRIAL
  </div>
);

const Txt: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; boyut?: number }> = ({ t, bas, x, y, metin, renk, boyut = 28 }) => {
  const a = ilerle(t, bas, 0.4);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", left: x, top: y, opacity: a, fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 2, color: renk }}>{metin}</div>;
};

export default S31;
