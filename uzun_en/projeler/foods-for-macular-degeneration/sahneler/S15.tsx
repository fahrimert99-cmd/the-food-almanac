// Sahne 15 — bağlantı yalnızca ileri evre ile; ara evrede yok.
import React from "react";
import { Ikon, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const satir = (bas: number, y: number, ad: string, sonuc: string, renk: string, ikon: "onay" | "carpi") => {
    const [sc, al] = pop(t, bas, 0.55);
    return (
      <div style={{ position: "absolute", left: 960, top: y, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al, display: "flex",
        alignItems: "center", gap: 18, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `4px solid ${renk}`, borderRadius: 999,
        padding: "10px 34px 10px 12px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
        <Ikon t={t} bas={bas + 0.1} ad={ikon} x={0} y={0} boyut={60} zemin={renk} />
        <span style={{ width: 60 }} />
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 38, letterSpacing: 2, color: RENK.lacivert }}>{ad}</span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 38, letterSpacing: 2, color: renk }}>{sonuc}</span>
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1860], [110, 60, 1700])} />
      {satir(K(0, "advanced"), 110, "ADVANCED DISEASE:", "LINK", RENK.yesil, "onay")}
      <Not t={t} bas={K(0, "threatens")} metin="the kind that threatens sight" x={960} y={160} hiza="orta" boyut={30} bitis={K(1, "The researchers") - 0.1} />
      {satir(K(1, "no link"), 232, "INTERMEDIATE STAGE:", "NO LINK", RENK.mercan, "carpi")}
    </>
  );
};

export default S15;
