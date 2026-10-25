// Sahne 30 — 24. saat: ~4 puan düşük ama istatistiksel olarak net değil; günlük dozlar.
import React from "react";
import { BaslikBlok, INTER, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Senkron açılan hap etiketi (ekran koordinatı)
const Pil: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.45);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transformOrigin: "0 50%", transform: `scale(${sc})`, opacity: a, display: "flex", alignItems: "center",
      gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "10px 28px 10px 18px",
      fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: 20, height: 20, borderRadius: "50%", background: renk, flex: "none" }} />{metin}
    </div>
  );
};

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840]);
  return (
    <>
      <Kamera gorsel="tam/30" pencere={p} />
      <BaslikBlok t={t} bas={K(0, "twenty-four")} satirlar={["NEXT DAY:", "FADING"]} x={720} y={150} boyut={110}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <VurguRozet t={t} bas={K(0, "four")} vurgu="≈ 4 POINTS" not="BELOW THE WATER DAY" x={1480} y={130} genislik={420} boyut={84} />
      <Pil t={t} bas={K(0, "statistically")} x={920} y={460} metin="NOT STATISTICALLY CLEAR" renk={RENK.altin} />
      <Pil t={t} bas={K(1, "daily")} x={920} y={560} metin="DAILY DOSES" renk={RENK.yesil} />
    </>
  );
};

export default S30;
