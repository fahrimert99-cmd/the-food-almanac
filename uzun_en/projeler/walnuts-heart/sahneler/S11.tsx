// Sahne 11 — apo B: her LDL parçacığında bir apo B; sağda "1 parçacık = 1 apo B" şeması.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, ANTON, INTER, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLdl = K(1, "LDL");
  const tApo = K(1, "apo B protein");
  const tSay = K(1, "head count");
  const [s1, a1] = pop(t, tApo + 0.1, 0.5);
  const [s2, a2] = pop(t, tSay, 0.5);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={tLdl} bitis={tApo - 0.1} capa={[780, 545]} konum={[1330, 720]} metin="LDL PARTICLE" renk={RENK.altin} />
        <Etiket t={t} bas={tApo} capa={[837, 525]} konum={[1330, 640]} metin="ONE APO B" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={0.4} satirlar={["APO B", "A PARTICLE COUNT"]} x={1860} y={200} boyut={84} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <div style={{ position: "absolute", left: 1480, top: 420, transform: `translate(-50%, 0) scale(${s1})`, opacity: a1, display: "flex", alignItems: "center", gap: 18,
        background: RENK.kagitAcik, border: `3px solid ${RENK.murekkep}`, borderRadius: 24, padding: "14px 28px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
        <span style={{ width: 54, height: 54, borderRadius: "50%", background: "#EBDD9C", border: `3px solid ${RENK.murekkep}`, position: "relative" }}>
          <span style={{ position: "absolute", right: -8, top: -8, width: 20, height: 20, borderRadius: "50%", background: RENK.mercan, border: `2px solid ${RENK.murekkep}` }} />
        </span>
        <span style={{ fontFamily: ANTON, fontSize: 52, color: RENK.altin }}>=</span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 34, color: RENK.murekkep, whiteSpace: "nowrap" }}>1 APO B</span>
      </div>
      <div style={{ transform: `scale(${s2})`, transformOrigin: "100% 0", opacity: a2, position: "absolute", right: 60, top: 560, fontFamily: ANTON, fontSize: 66, color: RENK.koyuYesil, whiteSpace: "nowrap" }}>
        HEAD COUNT
      </div>
      <Not t={t} bas={tSay + 0.2} metin="of LDL particles" x={1860} y={650} hiza="sag" boyut={34} genislik={500} />
    </>
  );
};

export default S11;
