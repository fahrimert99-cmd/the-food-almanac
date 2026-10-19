// Sahne 20 — Ölçülen üç besin: C vitamini, beta-karoten, folat
import React from "react";
import { Kamera, Not, RENK, SP, ANTON, INTER, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Madde: React.FC<{ t: number; bas: number; no: number; ad: string; not: string; y: number; renk: string }> = ({ t, bas, no, ad, not, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 70, top: y, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%", display: "flex", alignItems: "center", gap: 18,
      background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 24, padding: "12px 28px 12px 16px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <div style={{ width: 62, height: 62, borderRadius: "50%", background: renk, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: ANTON, fontSize: 38 }}>{no}</div>
      <div>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 38, letterSpacing: 1.5, color: RENK.lacivert, lineHeight: 1.1 }}>{ad}</div>
        <div style={{ fontFamily: INTER, fontWeight: 600, fontSize: 26, color: RENK.gri, lineHeight: 1.2 }}>{not}</div>
      </div>
    </div>
  );
};

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      {/* sağ alttaki imza ve sahte yazı pencere dışında (alt ≤ 950) */}
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [40, 0, 1680], [150, 20, 1600])} />
      <Not t={t} bas={0.2} metin="THREE NUTRIENTS MEASURED" x={74} y={60} boyut={30} agirlik={800} renk={RENK.altin} />
      <Madde t={t} bas={K(0, "vitamin")} no={1} ad="VITAMIN C" not="" y={120} renk={RENK.yesil} />
      <Madde t={t} bas={K(0, "beta-carotene,")} no={2} ad="BETA-CAROTENE" not="the body can turn it into vitamin A" y={245} renk={RENK.mercan} />
      <Madde t={t} bas={K(0, "folate,")} no={3} ad="FOLATE" not="a B vitamin for healthy cells" y={385} renk={RENK.altin} />
    </>
  );
};

export default S20;
