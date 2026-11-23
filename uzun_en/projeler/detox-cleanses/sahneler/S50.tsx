// Sahne 50 — İpucu 2: meyve suyu ara sıra, pastörize; pastörize edilmemiş yaşlılarda ek risk.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Rozet: React.FC<{ t: number; n: string }> = ({ t, n }) => {
  const [sc, al] = pop(t, 0.05, 0.5);
  return (
    <div style={{ position: "absolute", left: 60, top: 50, width: 112, height: 112, borderRadius: "50%", background: RENK.lacivert,
      color: "#fff", fontFamily: ANTON, fontSize: 72, display: "flex", alignItems: "center", justifyContent: "center",
      transform: `scale(${sc})`, opacity: al, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>{n}</div>
  );
};

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOcc = K(1, "occasional"), tUn = K(2, "unpasteurized"), tOld = K(2, "older");
  const bit1 = tUn - 0.2;
  const [s1, a1] = pop(t, K(2, "extra"), 0.5), [s2, a2] = pop(t, tOld, 0.5);
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1790])}>
        <Etiket t={t} bas={K(1, "juice,")} capa={[895, 680]} konum={[640, 450]} metin="JUICE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "pasteurized")} capa={[1110, 520]} konum={[1130, 190]} metin="PASTEURIZED" renk={RENK.yesil} />
      </Kamera>
      <Rozet t={t} n="2" />
      <BaslikBlok t={t} bas={tOcc} bitis={bit1} satirlar={["OCCASIONAL", "DRINK"]} x={1860} y={300} boyut={92} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <BaslikBlok t={t} bas={tUn} satirlar={["UNPASTEURIZED"]} x={1860} y={300} boyut={66} hiza="sag" renkler={[RENK.mercan]} />
      <div style={{ position: "absolute", right: 60, top: 380, transform: `scale(${s1})`, transformOrigin: "100% 50%", opacity: a1,
        display: "flex", alignItems: "center", gap: 10 }}>
        <Hap metin="EXTRA RISK" renk={RENK.mercan} boyut={30} />
      </div>
      <div style={{ position: "absolute", right: 60, top: 470, transform: `scale(${s2})`, transformOrigin: "100% 50%", opacity: a2 }}>
        <Hap metin="OLDER ADULTS" renk={RENK.mercan} boyut={30} />
      </div>
    </>
  );
};
export default S50;
