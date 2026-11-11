// Sahne 44 — WAHA'da yaklaşık üçte biri statin kullandı; ceviz olağan bakıma ekleme, ilaç yerine değil.
import React from "react";
import { Baslik, Etiket, Ikon, IkonYol, INTER, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Metin hapı: ikonlu, kâğıt zeminli
const Chip: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string;
  ikon: "onay" | "carpi" | "soru" | "ok"; boyut?: number; sag?: boolean }> = ({ t, bas, bitis = 1e9, x, y, metin, renk, ikon, boyut = 34, sag }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  const d = boyut * 1.4;
  return (
    <div style={{ position: "absolute", top: y, ...(sag ? { right: 1920 - x } : { left: x }), opacity: a, transform: `scale(${sc})`,
      transformOrigin: sag ? "100% 50%" : "0% 50%", display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap",
      background: "#FBF8F1", border: `3px solid ${renk}`, borderRadius: 999, padding: `8px ${boyut * 0.8}px 8px 10px`,
      fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
      <span style={{ width: d, height: d, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ikon} boyut={d * 0.6} renk="#fff" />
      </span>
      {metin}
    </div>
  );
};

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g1 = K(1, "Walnuts") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1760])}>
        <Etiket t={t} bas={K(0, "statins,")} bitis={g1} capa={[850, 560]} konum={[1010, 300]} metin="STATINS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "Walnuts")} capa={[360, 410]} konum={[330, 200]} metin="WALNUTS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "usual")} capa={[760, 520]} konum={[800, 220]} metin="USUAL CARE" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "WAHA,")} bitis={g1} metin="WAHA TRIAL" x={70} y={110} boyut={88} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "one")} bitis={g1} vurgu="1 IN 3" not="took statins" x={720} y={60} genislik={340} boyut={100} />
      <Chip t={t} bas={K(0, "changes")} bitis={g1} x={560} y={880} metin="NO DIFFERENCE BETWEEN GROUPS" renk={RENK.yesil} ikon="onay" boyut={32} />
      <Chip t={t} bas={K(1, "never")} x={500} y={880} metin="NOT A REPLACEMENT FOR MEDICINE" renk={RENK.mercan} ikon="carpi" boyut={32} />
    </>
  );
};

export default S44;
