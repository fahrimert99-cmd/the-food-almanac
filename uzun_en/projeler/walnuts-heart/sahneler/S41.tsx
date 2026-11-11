// Sahne 41 — FDA nitelikli sağlık beyanı: destekleyici ama kesin değil.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

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

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sk, ak] = pop(t, K(1, "may reduce") , 0.6);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1780])}>
        <Etiket t={t} bas={K(1, "ounces")} capa={[820, 605]} konum={[870, 470]} metin="1.5 OUNCES" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "walnuts")} capa={[400, 470]} konum={[780, 270]} metin="WALNUTS A DAY" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "FDA")} metin="FDA LABEL:" x={1860} y={170} boyut={80} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "supportive")} metin="SUPPORTIVE," x={1860} y={260} boyut={80} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "not")} metin="NOT CONCLUSIVE" x={1860} y={350} boyut={80} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "weaker")} bitis={K(1, "Since") + 0.4} metin="a weaker version of the idea" x={1860} y={225} hiza="sag" boyut={34} />
      <VurguRozet t={t} bas={K(1, "2004,")} bitis={K(1, "ounces") - 0.3} vurgu="2004" not="labels may say" x={1150} y={300} genislik={300} boyut={96} />
      <Chip t={t} bas={K(1, "saturated")} x={1000} y={560} metin="LOW SATURATED FAT" renk={RENK.yesil} ikon="onay" />
      <Chip t={t} bas={K(1, "cholesterol")} x={1000} y={650} metin="LOW CHOLESTEROL DIET" renk={RENK.yesil} ikon="onay" />
      {ak > 0 && (
        <div style={{ position: "absolute", left: 1000, top: 765, width: 860, transform: `scale(${sk})`, transformOrigin: "0 0", opacity: ak,
          background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 24, padding: "14px 26px", boxShadow: "0 10px 26px rgba(48,40,34,0.18)",
          fontFamily: INTER, fontWeight: 800, fontSize: 36, lineHeight: 1.25, letterSpacing: 1, color: RENK.lacivert }}>
          MAY REDUCE THE RISK OF CORONARY HEART DISEASE
        </div>
      )}
    </>
  );
};

export default S41;
