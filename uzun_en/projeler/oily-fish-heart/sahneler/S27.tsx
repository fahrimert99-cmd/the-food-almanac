// Sahne 27 — kalp ölümleri 4.3% vs 5.2% + sınırlılık (laboratuvar masası)
import React from "react";
import { Baslik, Hap, IkonYol, INTER, Kamera, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBar = K(0, "4.3"), tSon = K(1, "triglycerides") - 0.2;
  const aP = eout(ilerle(t, K(0, "death") - 0.3, 0.5)) * sol(t, tSon);
  const satirlar = [
    { ad: "PRESCRIPTION EPA", d: 4.3, bas: tBar - 0.1, renk: RENK.yesil },
    { ad: "PLACEBO", d: 5.2, bas: K(0, "5.2") - 0.1, renk: RENK.gri },
  ];
  const [sP, aPill] = pop(t, K(1, "may"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])} />
      <Baslik t={t} bas={K(0, "Heart")} metin="HEART DEATH" x={1860} y={150} boyut={100} hiza="sag" renk={RENK.koyuYesil} bitis={tSon} />
      <div style={{ position: "absolute", left: 1000, top: 230, width: 860, height: 190, opacity: aP, borderRadius: 24,
        background: kagit(0.92) }} />
      {satirlar.map((r, i) => {
        const p = eout(ilerle(t, r.bas, 0.9));
        const a = eout(ilerle(t, r.bas, 0.4)) * sol(t, tSon);
        return (
          <div key={i} style={{ position: "absolute", left: 1030, top: 250 + i * 85, opacity: a, display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 250, fontFamily: INTER, fontWeight: 800, fontSize: 24, color: RENK.lacivert }}>{r.ad}</div>
            <div style={{ width: 400 * (r.d / 5.2) * p, height: 44, borderRadius: 8, background: r.renk }} />
            <div style={{ fontFamily: "Anton, sans-serif", fontSize: 44, color: r.renk, opacity: p > 0.9 ? 1 : 0 }}>{r.d.toFixed(1)}%</div>
          </div>
        );
      })}
      <Baslik t={t} bas={K(1, "high")} metin="HIGH TRIGLYCERIDES" x={1860} y={150} boyut={84} hiza="sag" renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 1860, top: 250, transform: `translateX(-100%) scale(${sP})`, transformOrigin: "100% 50%", opacity: aPill }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999,
          padding: "10px 28px 10px 14px", boxShadow: "0 8px 22px rgba(48,40,34,0.18)", whiteSpace: "nowrap" }}>
          <IkonYol ad="soru" boyut={34} renk={RENK.altin} />
          <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert }}>MAY NOT APPLY TO EVERYONE</span>
        </div>
      </div>
    </>
  );
};

export default S27;
