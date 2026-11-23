// Sahne 48 — madde 1: C vitaminini yiyecekten al.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, ANTON } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sn, an] = pop(t, 0.05, 0.5);
  const [sp, ap] = pop(t, K(2, "without a pill"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={K(2, "fresh orange")} capa={[520, 470]} konum={[300, 330]} metin="FRESH ORANGE" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "glass of juice")} capa={[1290, 760]} konum={[1640, 880]} metin="JUICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "peppers")} capa={[1000, 470]} konum={[1020, 230]} metin="PEPPERS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "strawberries")} capa={[790, 790]} konum={[640, 890]} metin="STRAWBERRIES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "broccoli")} capa={[1640, 330]} konum={[1450, 200]} metin="BROCCOLI" renk={RENK.yesil} />
      </Kamera>
      {/* madde numarası + başlık */}
      <div style={{ position: "absolute", left: 80, top: 66, width: 100, height: 100, borderRadius: "50%", background: RENK.altin,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 64,
        opacity: an, transform: `scale(${sn})`, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>1</div>
      <Baslik t={t} bas={K(1, "from food") - 0.5} metin="FROM FOOD" x={210} y={116} boyut={96} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 90, top: 190, opacity: ap, transform: `scale(${sp})`, transformOrigin: "0 0" }}>
        <Hap metin="WITHOUT A PILL" renk={RENK.yesil} boyut={30} />
      </div>
    </>
  );
};

export default S48;
