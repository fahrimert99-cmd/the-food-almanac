// Sahne 41 — yazarlar: daha fazla araştırma gerek
import React from "react";
import { BaslikBlok, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Madde: React.FC<{ t: number; bas: number; no: number; y: number; metin: string }> = ({ t, bas, no, y, metin }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 140, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
      display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 999,
      padding: "6px 28px 6px 8px", boxShadow: "0 8px 22px rgba(48,40,34,0.14)", whiteSpace: "nowrap" }}>
      <span style={{ width: 40, height: 40, borderRadius: "50%", background: RENK.altin, color: "#fff", display: "flex",
        alignItems: "center", justifyContent: "center", fontFamily: INTER, fontWeight: 800, fontSize: 22 }}>{no}</span>
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.2, color: RENK.lacivert }}>{metin}</span>
    </div>
  );
};

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [60, 80, 1680])} />
      <BaslikBlok t={t} bas={K(0, "research")} satirlar={["MORE RESEARCH", "NEEDED"]} x={140} y={150} boyut={100}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Madde t={t} bas={K(0, "best dose")} no={1} y={350} metin="BEST DOSE" />
      <Madde t={t} bas={K(0, "form of")} no={2} y={415} metin="FORM OF ISOFLAVONE" />
      <Madde t={t} bas={K(0, "how long")} no={3} y={480} metin="HOW LONG TO TAKE IT" />
    </>
  );
};

export default S41;
