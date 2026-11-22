// Sahne 58 — kapanış kartı: abone ol + bilgilendirme notu.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kusursuz 4:3 kırpımlar: portakal torbası, portakal+bardak, kâse (kusur yok)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/55", kirp: [1330, 380, 1850, 770] },
  { gorsel: "tam/56", kirp: [140, 220, 940, 820] },
  { gorsel: "tam/57", kirp: [540, 420, 1240, 945] },
];

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "subscribe"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 820, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        background: RENK.mercan, color: "#fff", borderRadius: 999, padding: "12px 34px", fontFamily: INTER, fontWeight: 800,
        fontSize: 30, letterSpacing: 4, boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>SUBSCRIBE</div>
    </>
  );
};

export default S58;
