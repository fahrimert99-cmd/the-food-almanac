// Sahne 18 — daha hızlı yeme: sağ sütunda başlık, +17 rozeti, yumuşak yiyecek hapları.
import React from "react";
import { AltSis, BaslikBlok, INTER, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Hap2: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 1920 - x, top: y, opacity: al * sol(t, 1e9), transform: `scale(${sc})`, transformOrigin: "100% 50%",
      background: "#FCF8EC", border: `3px solid ${renk}`, borderRadius: 999, padding: "10px 30px", whiteSpace: "nowrap",
      boxShadow: "0 8px 22px rgba(48,40,34,0.16)", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1, color: RENK.lacivert }}>{metin}</div>
  );
};

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 60, 1800], [60, 30, 1720])} />
      <AltSis a={0.5} />
      <BaslikBlok t={t} bas={K(0, "Why")} satirlar={["FASTER", "EATING"]} x={1860} y={170} boyut={112} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <VurguRozet t={t} bas={K(2, "17")} vurgu="+17" not="CALORIES EVERY MINUTE" x={1650} y={420} genislik={400} boyut={110} renk={RENK.altin} />
      <Hap2 t={t} bas={K(2, "softer")} x={1860} y={730} metin="SOFTER" renk={RENK.yesil} />
      <Hap2 t={t} bas={K(2, "easier to chew")} x={1860} y={815} metin="EASIER TO CHEW" renk={RENK.yesil} />
    </>
  );
};

export default S18;
