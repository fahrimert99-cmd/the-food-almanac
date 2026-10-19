// Sahne 47 — İpucu 3: taze sebzeyi birkaç gün içinde kullan. Raf görseli; saat etiketi + düşen C vitamini eğrisi (ILLUSTRATIVE).
import React from "react";
import { AbsoluteFill, ANTON, Baslik, Etiket, Hap, IkonYol, INTER, Kamera, Parcaciklar, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Sol üstte ipucu numarası hapı
const IpucuHap: React.FC<{ t: number; no: number }> = ({ t, no }) => {
  const [sc, al] = pop(t, 0.05, 0.5);
  return (
    <div style={{ position: "absolute", left: 56, top: 48, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%", display: "flex",
      alignItems: "center", gap: 14, background: RENK.lacivert, borderRadius: 999, padding: "10px 26px 10px 18px", color: "#fff",
      fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 3 }}>
      <span style={{ width: 14, height: 14, borderRadius: "50%", background: RENK.altin }} />TIP {no}
    </div>
  );
};

// Belirli anda beliren sabit hap
const PopHap: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; boyut?: number }> = ({
  t, bas, bitis = 1e9, x, y, metin, renk, boyut = 28,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFew = K(1, "few days"), tWait = K(1, "waiting"), tLonger = K(2, "longer"), tLose = K(2, "lose");
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [50, 60, 1820]);
  const aBant = eout(ilerle(t, tLonger - 0.3, 0.5));
  const cizim = eout(ilerle(t, tLonger, tLose + 0.4 - tLonger));
  const [sv, av] = pop(t, tLonger + 0.1, 0.5);
  const x0 = 330, x1 = 1450, yA = 110, yB = 225;
  const d = `M ${x0} ${yA} C ${x0 + 350} ${yA + 5}, ${x0 + 650} ${yB - 10}, ${x1} ${yB}`;
  return (
    <>
      <Kamera gorsel="tam/47" pencere={p}>
        <Etiket t={t} bas={tFew} bitis={tLonger - 0.2} capa={[1430, 700]} konum={[1600, 280]} metin="A FEW DAYS" renk={RENK.altin} />
        <Etiket t={t} bas={tWait} bitis={tLonger - 0.2} capa={[900, 600]} konum={[820, 250]} metin="DON'T LEAVE THEM WAITING" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 300, opacity: aBant,
        background: `linear-gradient(to bottom, ${kagit(0.95)} 0%, ${kagit(0.95)} 80%, ${kagit(0)} 100%)` }} />
      {aBant > 0 && (
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: aBant }}>
          <line x1={x0 - 20} y1={yB + 40} x2={x1 + 40} y2={yB + 40} stroke={RENK.murekkep} strokeWidth={3} opacity={0.5} />
          <line x1={x0 - 20} y1={yA - 40} x2={x0 - 20} y2={yB + 40} stroke={RENK.murekkep} strokeWidth={3} opacity={0.5} />
          <path d={d} fill="none" stroke={RENK.mercan} strokeWidth={12} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - cizim} />
          <text x={x1 + 40} y={yB + 76} textAnchor="end" style={{ fontFamily: INTER, fontWeight: 700, fontSize: 24, fill: RENK.gri }}>TIME →</text>
        </svg>
      )}
      <PopHap t={t} bas={tLonger + 0.1} x={x0 + 160} y={yA - 55} metin="VITAMIN C" renk={RENK.altin} boyut={26} />
      <div style={{ position: "absolute", left: 1140, top: 52, transform: `scale(${sv})`, transformOrigin: "100% 50%", opacity: av,
        fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 3, color: RENK.gri, border: `2px dashed ${RENK.gri}`, borderRadius: 999,
        padding: "4px 16px" }}>ILLUSTRATIVE</div>
      <IpucuHap t={t} no={3} />
    </>
  );
};

export default S47;
