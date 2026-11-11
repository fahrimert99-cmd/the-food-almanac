// Sahne 48 — Madde 2: etiketi oku. Solda şişe/kase, sağda başlık ve etiket ipuçları.
import React from "react";
import { ANTON, BaslikBlok, Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, 0, 0.55);
  const tIlk = K(1, "Read");
  const tBit = K(2, "so") - 0.2;
  const [sk, ak] = pop(t, K(3, "not what was tested"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [40, 30, 1840], [100, 60, 1700])}>
        <Etiket t={t} bas={K(2, "curcuminoid")} capa={[500, 430]} konum={[1020, 300]} metin="CURCUMINOID AMOUNT" renk={RENK.yesil} />
        <Etiket t={t} bas={K(3, "turmeric root powder")} capa={[600, 640]} konum={[1060, 500]} metin="ROOT POWDER ONLY" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 76, top: 64, width: 112, height: 112, borderRadius: "50%", background: RENK.altin,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 76,
        transform: `scale(${sc})`, opacity: al, border: `5px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>2</div>
      <BaslikBlok t={t} bas={tIlk} bitis={tBit} satirlar={["READ THE", "LABEL"]} x={1860} y={200} boyut={116} hiza="sag" />
      <Baslik t={t} bas={K(2, "specific extracts")} metin="SPECIFIC EXTRACTS" x={1860} y={500} boyut={58} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "stated doses")} metin="AT STATED DOSES" x={1860} y={570} boyut={58} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(2, "curcuminoid")} metin="LOOK FOR CURCUMINOIDS" x={1860} y={690} boyut={44} hiza="sag" renk={RENK.altin} />
      <div style={{ position: "absolute", left: 1580, top: 790, transform: `translate(-50%,0) scale(${sk})`, opacity: ak }}>
        <Hap metin="NOT WHAT WAS TESTED" renk={RENK.mercan} boyut={32} />
      </div>
    </>
  );
};

export default S48;
