// Sahne 27 — finansman: California Walnut Commission; yazarlara göre tasarım/analizde rolü yok.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFon = K(1, "funded"), tRol = K(2, "no role"), tKim = K(2, "fair to know");
  const [sp, ap] = pop(t, tKim, 0.5);
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 110, 1760])} />
      <Etiket t={t} bas={tFon} bitis={tRol - 0.2} capa={[1500, 700]} konum={[1180, 200]} metin="CALIFORNIA WALNUT COMMISSION" renk={RENK.altin} />
      <Etiket t={t} bas={tRol} bitis={tKim - 0.1} capa={[1060, 850]} konum={[560, 910]} metin="NO ROLE: DESIGN, ANALYSIS" renk={RENK.yesil} />
      <div style={{ position: "absolute", left: 560, top: 70, width: 800, height: 120, borderRadius: 60, background: RENK.kagitAcik,
        border: `3px solid ${RENK.murekkep}`, boxShadow: "0 8px 22px rgba(48,40,34,0.2)", opacity: ap, transform: `scale(${sp})` }} />
      <Baslik t={t} bas={tKim + 0.1} metin="KNOW WHO PAID" x={960} y={130} boyut={78} renk={RENK.lacivert} hiza="orta" />
    </>
  );
};

export default S27;
