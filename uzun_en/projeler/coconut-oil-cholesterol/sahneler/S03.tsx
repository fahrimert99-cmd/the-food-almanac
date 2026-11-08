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

// Sahne 3 — raf: iddia çarpılır, sonra "COOK WITH WHAT?"
const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={K(0, "cook")} capa={[780, 760]} konum={[1180, 780]} metin="SKILLET" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "By")} metin="BY THE END" x={1860} y={110} boyut={30} renk={RENK.altin} hiza="sag" font="inter" aralik={6} />
      <Pil t={t} bas={K(0, "medium-chain")} metin="MEDIUM-CHAIN CLAIM" x={1700} y={170} renk={RENK.mercan} />
      <Ikon t={t} bas={K(0, "fails")} ad="carpi" x={1780} y={196} zemin={RENK.mercan} boyut={84} />
      <BaslikBlok t={t} bas={K(0, "what")} satirlar={["COOK WITH", "WHAT?"]} x={1860} y={400} boyut={110} hiza="sag" />
    </>
  );
};
export default S03;
