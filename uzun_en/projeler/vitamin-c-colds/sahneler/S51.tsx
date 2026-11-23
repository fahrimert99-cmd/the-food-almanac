// Sahne 51 — madde 4: belirti sonrası başlamak tutarlı fayda göstermedi.
import React from "react";
import { ANTON, Hap, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Kamera penceresi çerçevenin içinde: alttaki imzalar ve kenar boşlukları görünmez
const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sn, an] = pop(t, 0.05, 0.5);
  const pk = eout(ilerle(t, K(1, "after symptoms") - 0.2, 0.6));
  const satir = (bas: number, metin: string, renk: string, boyut: number) => {
    const p = eout(ilerle(t, bas, 0.5));
    return (
      <div style={{ opacity: p, transform: `translateY(${(1 - p) * 14}px)`, fontFamily: ANTON, fontSize: boyut, lineHeight: 1.15, color: renk }}>{metin}</div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [200, 90, 1500], [250, 110, 1400])} />
      <div style={{ position: "absolute", left: 80, top: 70, width: 100, height: 100, borderRadius: "50%", background: RENK.altin,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 64,
        opacity: an, transform: `scale(${sn})`, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>4</div>
      <div style={{ position: "absolute", left: 1130, top: 110, width: 700, padding: "26px 34px 30px", background: "#FCF8EC",
        border: `4px solid ${RENK.altin}`, borderRadius: 26, boxShadow: "0 10px 26px rgba(48,40,34,0.18)", opacity: pk }}>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 4, color: RENK.altin }}>STARTING AFTER SYMPTOMS</div>
        <div style={{ height: 14 }} />
        {satir(K(1, "consistent benefit") - 0.3, "NO CONSISTENT BENEFIT", RENK.lacivert, 62)}
        {satir(K(1, "rush") - 0.1, "NO NEED TO RUSH", RENK.koyuYesil, 62)}
      </div>
    </>
  );
};

export default S51;
