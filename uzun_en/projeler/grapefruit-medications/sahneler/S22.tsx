// Sahne 22 — damarların genişlemesi: başlık solda, damar tüpünde genişleme okları.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Hap biçimli küçük etiket (pop ile gelir). x,y = sol-orta (hiza sol) ya da orta.
const Chip: React.FC<{ t: number; bas: number; metin: string; x: number; y: number; renk: string; boyut?: number; orta?: boolean; bitis?: number }> = ({
  t, bas, metin, x, y, renk, boyut = 30, orta, bitis = 1e9,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(${orta ? "-50%" : "0"}, -50%) scale(${sc})`, transformOrigin: orta ? "50% 50%" : "0% 50%",
      opacity: a, display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`,
      borderRadius: 999, padding: "9px 24px 9px 16px", fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 1.5,
      color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: boyut * 0.65, height: boyut * 0.65, borderRadius: "50%", background: renk, flex: "none" }} />
      {metin}
    </div>
  );
};


const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGen = K(0, "widened");
  const p = eout(ilerle(t, tGen, 0.9));
  const ok = (yon: 1 | -1) => {
    const x0 = 880 + yon * 80, x1 = x0 + yon * (36 + 40 * p);
    return `M ${x0} 520 L ${x1} 520 M ${x1 - yon * 24} 496 L ${x1} 520 L ${x1 - yon * 24} 544`;
  };
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 20, 1740])}>
        {/* sağ alttaki imza örtülür */}
        <div style={{ position: "absolute", left: 1560, top: 895, width: 190, height: 90,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "blood vessels.") - 0.1} capa={[885, 600]} konum={[1200, 230]} metin="WIDENED VESSELS" renk={RENK.mercan} />
        {p > 0 && (
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }} opacity={Math.min(1, p * 2)}>
            <path d={ok(-1)} stroke={RENK.mercan} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d={ok(1)} stroke={RENK.mercan} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        )}
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "lower")} satirlar={["LOWER BLOOD", "PRESSURE"]} x={100} y={170} boyut={92} renkler={[RENK.lacivert, RENK.mercan]} />
      <Chip t={t} bas={K(0, "1991")} metin="1991 STUDY" x={100} y={390} renk={RENK.lacivert} />
      <Chip t={t} bas={K(0, "extra")} metin="EXTRA SIDE EFFECTS" x={100} y={460} renk={RENK.altin} />
    </>
  );
};

export default S22;
