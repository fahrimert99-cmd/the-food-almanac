// Sahne 12 — Neff 2016 anketi: best if used by = kalite, use by / expires on = güvenlik.
import React from "react";
import { ANTON, Baslik, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Görsel koordinatında kart + kesikli çizgi ile nesneye bağlanır
const Kart: React.FC<{ t: number; bas: number; x: number; y: number; w: number; ust: string; buyuk: string; renk: string; capa: [number, number] }> = ({
  t, bas, x, y, w, ust, buyuk, renk, capa,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const pl = eout(ilerle(t, bas + 0.2, 0.5));
  if (al <= 0) return null;
  const bx = x + w / 2, by = y + 150;
  return (
    <>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
        <line x1={bx} y1={by} x2={bx + (capa[0] - bx) * pl} y2={by + (capa[1] - by) * pl} stroke={RENK.murekkep} strokeWidth={3.5} strokeDasharray="12 9" />
        <circle cx={capa[0]} cy={capa[1]} r={11 * pl} fill={renk} stroke={RENK.kagitAcik} strokeWidth={3} />
      </svg>
      <div style={{ position: "absolute", left: x, top: y, width: w, height: 150, boxSizing: "border-box", opacity: al, transform: `scale(${sc})`,
        background: RENK.kagitAcik, border: `4px solid ${renk}`, borderRadius: 22, textAlign: "center", paddingTop: 14,
        boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.lacivert }}>{ust}</div>
        <div style={{ fontFamily: ANTON, fontSize: 70, lineHeight: 1.1, color: renk }}>{buyuk}</div>
      </div>
    </>
  );
};

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        <Kart t={t} bas={K(1, "best if used by")} x={60} y={150} w={480} ust="BEST IF USED BY" buyuk="QUALITY" renk={RENK.yesil} capa={[700, 400]} />
        <Kart t={t} bas={K(1, "use by and")} x={1340} y={150} w={520} ust="USE BY / EXPIRES ON" buyuk="SAFETY" renk={RENK.mercan} capa={[1070, 500]} />
      </Kamera>
      <Baslik t={t} bas={K(0, "easily")} bitis={K(1, "while") - 0.2} metin="EASILY MISREAD" x={1400} y={230} boyut={110} hiza="orta" renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "2016")} metin="2016 · 1,029 ADULTS" x={64} y={380} boyut={32} agirlik={800} renk={RENK.altin} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
    </>
  );
};

export default S12;
