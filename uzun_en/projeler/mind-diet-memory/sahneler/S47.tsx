// Sahne 47 — fasulye ve tam tahıl: ekmek + fasulye kasesi üzerinde etiketler, lif başlığı, "tek başına test edilmedi" notu.
import React from "react";
import { ANTON, BaslikBlok, Etiket, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFasulye = K(0, "beans"), tTahil = K(0, "whole grains"), tLif = K(1, "fiber"), tTest = K(2, "not tested");
  const aKart = eout(ilerle(t, tTest, 0.5));
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={tFasulye} bitis={tLif - 0.2} capa={[640, 650]} konum={[250, 880]} metin="BEANS 3× A WEEK" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tTahil} bitis={tLif - 0.2} capa={[900, 300]} konum={[1450, 170]} metin="WHOLE GRAINS 3× A DAY" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tLif - 0.7} satirlar={["FAMILIAR", "FIBER FOODS"]} x={1860} y={120} boyut={84} hiza="sag" />
      {aKart > 0 && (
        <div style={{ position: "absolute", right: 70, top: 380, opacity: aKart, transform: `translateY(${(1 - aKart) * 14}px)`,
          background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 24, padding: "14px 28px",
          boxShadow: "0 10px 26px rgba(48,40,34,0.18)", fontFamily: ANTON, fontSize: 56, lineHeight: 1.15, color: RENK.lacivert,
          textAlign: "center" }}>
          NOT TESTED ALONE<div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, color: RENK.altin }}>IN THE TRIAL</div>
        </div>
      )}
    </>
  );
};

export default S47;
