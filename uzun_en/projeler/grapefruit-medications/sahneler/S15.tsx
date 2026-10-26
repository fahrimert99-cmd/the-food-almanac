// Sahne 15 — küçük çalışmalar, ilaç düzeyi ölçümü; yeni bir araştırma alanı.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol, INTER } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAlan = K(1, "whole field");
  const tZiyaret = K(0, "hospital");
  const [sc, al] = pop(t, tZiyaret, 0.5);
  const a = al * sol(t, tAlan - 0.2);
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 120, 1900], [60, 150, 1780])}>
        <Etiket t={t} bas={K(0, "tiny")} bitis={tAlan - 0.2} capa={[330, 740]} konum={[420, 470]} metin="TINY STUDIES" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "drug levels")} bitis={tAlan - 0.2} capa={[1600, 560]} konum={[1250, 330]} metin="DRUG LEVELS" renk={RENK.yesil} />
      </Kamera>
      {a > 0 && (
        <div style={{ position: "absolute", left: 960, top: 650, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a,
          display: "flex", alignItems: "center", gap: 16, whiteSpace: "nowrap", background: RENK.kagitAcik,
          border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "10px 30px 10px 14px", fontFamily: INTER, fontWeight: 800,
          fontSize: 34, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
          <span style={{ width: 44, height: 44, borderRadius: "50%", background: RENK.mercan, color: "#fff", display: "flex",
            alignItems: "center", justifyContent: "center", fontSize: 26 }}>✕</span>
          NOT HOSPITAL VISITS
        </div>
      )}
      <Baslik t={t} bas={tAlan} metin="A WHOLE FIELD" x={960} y={230} boyut={120} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "research")} metin="OF RESEARCH" x={960} y={370} boyut={120} hiza="orta" renk={RENK.koyuYesil} />
    </>
  );
};

export default S15;
