// Sahne 20 — Yazarların temkinli sonucu: etiketler + sol kart.
import React from "react";
import { BaslikBlok, Etiket, IkonYol, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tK = K(2, "They said");
  const [sc, al] = pop(t, tK, 0.6);
  const aKart = al * 1;
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={K(1, "heart disease")} bitis={tK - 0.2} capa={[940, 200]} konum={[1350, 140]} metin="GLUTEN: NOT LINKED" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "whole grain intake")} bitis={tK - 0.2} capa={[1620, 810]} konum={[1690, 600]} metin="WHOLE GRAIN INTAKE" renk={RENK.altin} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={0.1} bitis={K(1, "Long-term") - 0.1} satirlar={["CAREFUL", "CONCLUSION"]} x={60} y={190} boyut={92} />
      <div style={{ position: "absolute", left: 40, top: 660, width: 300, opacity: aKart, transform: `scale(${sc})`, transformOrigin: "0% 50%",
        background: "#FCF8EC", border: `4px solid ${RENK.mercan}`, borderRadius: 24, padding: "16px 18px", boxShadow: "0 10px 26px rgba(48,40,34,0.18)",
        display: "flex", gap: 16, alignItems: "center" }}>
        <span style={{ flex: "none", width: 56, height: 56, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="carpi" boyut={34} renk="#fff" />
        </span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, lineHeight: 1.25, color: RENK.lacivert }}>GLUTEN-FREE DIETS NOT PROMOTED WITHOUT CELIAC DISEASE</span>
      </div>
    </>
  );
};

export default S20;
