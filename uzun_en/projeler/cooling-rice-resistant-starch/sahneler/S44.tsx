// Sahne 44 — CDC: Virginia 1993, 67 kişiden 14'ü hastalandı; sebep gece önceden pişirilip tezgâhta soğuyan pilav.
import React from "react";
import { Etiket, Hap, KaynakEtiketi, Kamera, RENK, ANTON, INTER, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string }> = ({
  t, bas, bitis = 1e9, x, y, metin, renk,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis, 0.3);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t67 = K(1, "67"), t14 = K(1, "14"), tKapat = K(2, "The") - 0.25;
  const pKart = eout(ilerle(t, t67 - 0.1, 0.5)) * sol(t, tKapat, 0.4);
  // 67 nokta: 12 sütun; hasta olanlar dağınık seçilir
  const noktalar = Array.from({ length: 67 }, (_, i) => i);
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1780])}>
        <Etiket t={t} bas={K(2, "chicken")} capa={[810, 650]} konum={[330, 440]} metin="CHICKEN FRIED RICE" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Pil t={t} bas={K(0, "two")} bitis={t67 - 0.3} x={60} y={160} metin="2 CHILD DAY CARE CENTERS" renk={RENK.altin} />
      <Pil t={t} bas={K(0, "Virginia")} bitis={t67 - 0.3} x={60} y={245} metin="VIRGINIA · 1993" renk={RENK.lacivert} />
      {pKart > 0 && (
        <div style={{ position: "absolute", left: 60, top: 130, width: 640, height: 490, opacity: pKart, background: RENK.kagitAcik,
          borderRadius: 28, boxShadow: "0 14px 34px rgba(48,40,34,0.22)", border: `3px solid ${RENK.lacivert}` }}>
          <div style={{ position: "absolute", left: 36, top: 22, fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2,
            color: RENK.lacivert }}>67 PEOPLE ATE THE LUNCH</div>
          <svg width={640} height={490} style={{ position: "absolute", left: 0, top: 0 }}>
            {noktalar.map((i) => {
              const cx = 60 + (i % 12) * 48, cy = 100 + Math.floor(i / 12) * 48;
              const ill = (i * 29) % 67 < 14;
              const [sc, al] = pop(t, t67 + 0.15 + i * 0.012, 0.3);
              const pI = eout(ilerle(t, t14 + ((i * 29) % 67) * 0.03, 0.3));
              const renk = ill && pI > 0 ? RENK.mercan : RENK.yesil;
              return <circle key={i} cx={cx} cy={cy} r={17 * sc * (1 + (ill ? 0.2 * Math.sin(Math.PI * pI) : 0))} fill={renk} opacity={al} />;
            })}
          </svg>
          <div style={{ position: "absolute", left: 36, top: 392, display: "flex", alignItems: "baseline", gap: 14,
            opacity: eout(ilerle(t, t14, 0.4)) }}>
            <span style={{ fontFamily: ANTON, fontSize: 64, lineHeight: 1, color: RENK.mercan }}>14</span>
            <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert }}>BECAME ILL</span>
          </div>
        </div>
      )}
      <Pil t={t} bas={K(2, "cooked")} x={60} y={160} metin="COOKED THE NIGHT BEFORE" renk={RENK.altin} />
      <Pil t={t} bas={K(2, "cooled")} x={60} y={245} metin="COOLED ON THE COUNTER" renk={RENK.mercan} />
    </>
  );
};

export default S44;
