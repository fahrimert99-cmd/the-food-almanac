// Sahne 51 — tedaviyi sürdür, baharat tedavi değildir
import React from "react";
import { BaslikBlok, Etiket, IkonYol, INTER, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTedavi = K(1, "treatment"), tPisirme = K(2, "cooking"), tDegil = K(2, "not a treatment"), tSup = K(2, "no supplement");
  const p = eout(ilerle(t, tSup, 0.5));
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 90, 1780])} />
      <Etiket t={t} bas={tTedavi} bitis={tPisirme} capa={[1300, 530]} konum={[1560, 330]} metin="KEEP YOUR TREATMENT" renk={RENK.yesil} />
      <Etiket t={t} bas={tPisirme} bitis={tDegil - 0.2} capa={[900, 640]} konum={[320, 250]} metin="COOKING: A HABIT" renk={RENK.altin} />
      <BaslikBlok t={t} bas={tDegil} satirlar={["NOT A", "TREATMENT"]} x={70} y={150} boyut={100}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <div style={{ position: "absolute", left: 70, top: 330, maxWidth: 380, opacity: p, transform: `translateY(${(1 - p) * 12}px)`,
        display: "flex", alignItems: "center", gap: 16, background: "#FCF8EC", border: `3px solid ${RENK.mercan}`,
        borderRadius: 18, padding: "12px 22px" }}>
        <IkonYol ad="carpi" boyut={36} renk={RENK.mercan} />
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, color: RENK.lacivert, letterSpacing: 1, lineHeight: 1.2 }}>NO SUBSTITUTE FOR MEDICAL CARE</span>
      </div>
    </>
  );
};

export default S51;
