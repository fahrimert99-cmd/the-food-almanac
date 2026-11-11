// Sahne 27 — adil özet: toplu sonuç küçük düşüş, hasta çalışmaları ayrışıyor; sonuç değişebilir.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

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

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  const bit = c[2].bas - 0.3;
  return (
    <>
      <Kamera gorsel="tam/27" pencere={p}>
        <Etiket t={t} bas={K(0, "summary")} bitis={c[1].bas + 0.5} capa={[620, 520]} konum={[1100, 560]} metin="BEET JUICE" renk={RENK.mercan} />
      </Kamera>
      <Pil t={t} bas={K(1, "small drop")} bitis={bit} x={960} y={150} metin="POOLED: SMALL DROP" renk={RENK.yesil} />
      <Pil t={t} bas={K(1, "disagree")} bitis={bit} x={960} y={250} metin="PATIENT TRIALS: MIXED" renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(2, "bigger")} satirlar={["BIGGER,", "SMALLER, OR NONE"]} x={960} y={250} boyut={104} adim={0.6}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S27;
