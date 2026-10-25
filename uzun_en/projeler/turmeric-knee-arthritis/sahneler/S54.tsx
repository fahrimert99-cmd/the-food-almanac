// Sahne 54 — Özet: kanıt dengesi; sonuç test edilen ürüne aittir
import React from "react";
import { Etiket, Kamera, RENK, SP, eout, INTER, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

// Sol kenar kartı (sarmalı, arkalıklı)
const Kart: React.FC<{ t: number; bas: number; metin: string; y: number; renk: string }> = ({ t, bas, metin, y, renk }) => {
  const p = eout(ilerle(t, bas, 0.5));
  if (p <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 44, top: y, width: 330, opacity: p, transform: `translateX(${(1 - p) * -40}px)`,
      background: RENK.kagitAcik, border: `3px solid ${renk}`, borderLeftWidth: 12, borderRadius: 18, padding: "16px 20px",
      fontFamily: INTER, fontWeight: 800, fontSize: 30, lineHeight: 1.2, letterSpacing: 1, color: RENK.lacivert,
      boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>{metin}</div>
  );
};

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 20, 1800])}>
        <Etiket t={t} bas={K(1, "product")} capa={[1260, 540]} konum={[1380, 830]} metin="PRODUCT TESTED" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "turmeric in")} capa={[560, 580]} konum={[560, 830]} metin="NOT KITCHEN SPICE" renk={RENK.mercan} />
      </Kamera>
      <Kart t={t} bas={K(0, "uneven")} y={190} metin="UNEVEN EVIDENCE" renk={RENK.altin} />
      <Kart t={t} bas={K(0, "modest")} y={330} metin="MODEST BENEFIT" renk={RENK.altin} />
      <Kart t={t} bas={K(0, "one trial")} y={470} metin="NO CHANGE ON JOINT SCANS" renk={RENK.mercan} />
    </>
  );
};

export default S54;
