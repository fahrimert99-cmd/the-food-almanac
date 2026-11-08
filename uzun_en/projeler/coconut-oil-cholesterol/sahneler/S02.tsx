import React from "react";
import { Baslik, BaslikBlok, CubukGrafik, Etiket, IkonYol, INTER, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet,
  eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";


// sağa yaslı hap etiketi
const Pil: React.FC<{ t: number; bas: number; metin: string; x: number; y: number; renk: string; bitis?: number; ikon?: boolean }> = ({
  t, bas, metin, x, y, renk, bitis = 1e9, ikon,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 1920 - x, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: a,
      display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: "#FCF8EC", border: `3px solid ${renk}`,
      borderRadius: 999, padding: "10px 28px", fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 1.5,
      color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      {ikon && <IkonYol ad="saat" boyut={36} renk={renk} />}
      {metin}
    </div>
  );
};

// Sahne 2 — iki şişe + hindistan cevizi; sağda iki sonuç hapı, sonra soru başlığı
const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit = c[1].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={K(0, "raised")} bitis={bit} capa={[830, 780]} konum={[1180, 500]} metin="COCONUT OIL" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "olive")} bitis={bit} capa={[520, 760]} konum={[780, 330]} metin="OLIVE OIL" renk={RENK.yesil} />
      </Kamera>
      <Pil t={t} bas={K(0, "HDL")} bitis={bit} metin="HDL RAISED TOO" x={1860} y={170} renk={RENK.yesil} />
      <Pil t={t} bas={K(0, "no clear")} bitis={bit} metin="LDL: NO CLEAR GAP" x={1860} y={270} renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(1, "Which")} satirlar={["WHICH RESULT", "MATTERS?"]} x={1860} y={230} boyut={104} hiza="sag" />
      <Ikon t={t} bas={K(1, "matters")} ad="soru" x={1560} y={560} zemin={RENK.altin} boyut={120} />
    </>
  );
};
export default S02;
