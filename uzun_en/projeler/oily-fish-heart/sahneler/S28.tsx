// Sahne 28 — denge terazisi: AF hastane yatışları 3.1% vs 2.1%
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const satirlar = [
    { ad: "ON THE DRUG", d: 3.1, bas: K(1, "3.1") - 0.1, renk: RENK.mercan },
    { ad: "ON PLACEBO", d: 2.1, bas: K(1, "2.1") - 0.1, renk: RENK.gri },
  ];
  const [sP, aPill] = pop(t, K(2, "caution") - 0.3, 0.55);
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])} />
      <Baslik t={t} bas={K(0, "trade-off")} metin="A TRADE-OFF" x={1400} y={170} boyut={130} hiza="orta" renk={RENK.lacivert} />
      <Etiket t={t} bas={K(1, "drug")} capa={[873, 500]} konum={[1130, 540]} metin="THE DRUG" renk={RENK.mercan} />
      <Not t={t} bas={K(1, "atrial")} metin="HOSPITAL STAYS FOR ATRIAL FIBRILLATION" x={1000} y={290} boyut={30} agirlik={800} />
      {satirlar.map((r, i) => {
        const p = eout(ilerle(t, r.bas, 0.9));
        const a = eout(ilerle(t, r.bas, 0.4));
        return (
          <div key={i} style={{ position: "absolute", left: 1000, top: 660 + i * 100, opacity: a, display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 220, fontFamily: INTER, fontWeight: 800, fontSize: 26, color: RENK.lacivert }}>{r.ad}</div>
            <div style={{ width: 400 * (r.d / 3.1) * p, height: 56, borderRadius: 8, background: r.renk }} />
            <div style={{ fontFamily: "Anton, sans-serif", fontSize: 54, color: r.renk, opacity: p > 0.9 ? 1 : 0 }}>{r.d.toFixed(1)}%</div>
          </div>
        );
      })}
      <div style={{ position: "absolute", left: 1400, top: 860, transform: `translate(-50%,0) scale(${sP})`, opacity: aPill }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999,
          padding: "10px 28px 10px 14px", boxShadow: "0 8px 22px rgba(48,40,34,0.18)", whiteSpace: "nowrap" }}>
          <IkonYol ad="uyari" boyut={34} renk={RENK.altin} />
          <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.lacivert }}>A CAUTION</span>
        </div>
      </div>
    </>
  );
};

export default S28;
