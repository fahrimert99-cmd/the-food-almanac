// Sahne 41 — kapsül ve balık: iki tür kanıt çelişmek zorunda değil.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, INTER } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tConf = K(0, "conflict");
  const tKaps = K(1, "capsule"), tFix = K(1, "fixed dose");
  const tFish = K(2, "Fish"), tOther = K(2, "other foods");
  const bit1 = s.cumleler[1].bas - 0.1;
  const [sc, al] = pop(t, tConf, 0.5);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={tKaps} capa={[400, 640]} konum={[400, 880]} metin="A CAPSULE" renk={RENK.altin} />
        <Etiket t={t} bas={tFix} capa={[250, 520]} konum={[400, 780]} metin="FIXED DOSE" renk={RENK.altin} bitis={tFish - 0.15} />
        <Etiket t={t} bas={tFish} capa={[1240, 540]} konum={[1330, 880]} metin="FISH IS A FOOD" renk={RENK.yesil} />
        <Etiket t={t} bas={tOther} capa={[1730, 400]} konum={[1590, 160]} metin="REPLACES OTHER FOODS" renk={RENK.mercan} boyut={26} />
      </Kamera>
      {/* sol üst: boş kâğıt üzerinde başlık */}
      <Baslik t={t} bas={0.2} bitis={bit1} metin="TWO KINDS" x={90} y={110} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={0.45} bitis={bit1} metin="OF EVIDENCE" x={90} y={215} boyut={100} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 90, top: 300, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%",
        background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "8px 24px", fontFamily: INTER,
        fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert, whiteSpace: "nowrap",
        }}>NOT NECESSARILY IN CONFLICT</div>
    </>
  );
};

export default S41;
