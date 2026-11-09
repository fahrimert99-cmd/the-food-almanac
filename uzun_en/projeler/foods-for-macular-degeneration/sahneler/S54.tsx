// Sahne 54 — AREDS2 tasarımı: tabak ortada, sol ve sağ boş kâğıtta yazılar.
import React from "react";
import { Baslik, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, INTER } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAr = K(0, "AREDS2"), tEv = K(0, "everyone"), tAdd = K(1, "adding more lutein"), tNo = K(2, "clearly"), tZn = K(2, "zinc");
  const [sc, al] = pop(t, tNo, 0.5);
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 60, 1780])} />
      <Baslik t={t} bas={tAr} metin="AREDS2" x={60} y={300} boyut={120} renk={RENK.koyuYesil} />
      <Not t={t} bas={tEv} metin="Everyone already took the standard formula" x={60} y={390} genislik={390} boyut={32} />
      <VurguRozet t={t} bas={tAdd} vurgu="+ LUTEIN" not="added to the standard formula" x={1710} y={190} genislik={330} boyut={64} renk={RENK.altin} />
      <div style={{ position: "absolute", left: 1710, top: 430, transform: `translate(-50%, 0) scale(${sc})`, opacity: al,
        background: RENK.kagitAcik, border: `3px solid ${RENK.gri}`, borderRadius: 999, padding: "8px 20px", whiteSpace: "nowrap",
        fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 1.5, color: RENK.lacivert }}>NO CLEAR BENEFIT</div>
      <VurguRozet t={t} bas={tZn} vurgu="LOWER ZINC" not="no clear difference either" x={1710} y={560} genislik={330} boyut={56} renk={RENK.lacivert} />
    </>
  );
};

export default S54;
