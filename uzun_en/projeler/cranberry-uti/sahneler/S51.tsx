// Sahne 51 — Fikir 4: yardımcı, plan değil (nesne etiketleri + üst başlıklar).
import React from "react";
import { ANTON, Baslik, BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800]);
  const [sc, al] = pop(t, 0.05, 0.5);
  const tHelp = K(1, "possible helper"), tPlan = K(1, "not a plan");
  return (
    <>
      <Kamera gorsel="tam/51" pencere={pencere}>
        <Etiket t={t} bas={K(1, "cranberry")} capa={[740, 440]} konum={[330, 330]} metin="CRANBERRY" renk={RENK.mercan} boyut={30} />
        <Etiket t={t} bas={K(2, "doctor")} capa={[960, 650]} konum={[900, 880]} metin="DOCTOR'S PLAN" renk={RENK.yesil} boyut={30} />
      </Kamera>
      <div style={{ position: "absolute", left: 70, top: 70, width: 92, height: 92, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 60, transform: `scale(${sc})`, opacity: al,
        border: `5px solid ${RENK.kagitAcik}` }}>4</div>
      <BaslikBlok t={t} bas={tHelp - 0.1} satirlar={["A POSSIBLE", "HELPER"]} x={190} y={90} boyut={78} />
      <Baslik t={t} bas={tPlan} metin="NOT A PLAN" x={1860} y={130} boyut={96} renk={RENK.mercan} hiza="sag" />
      <Baslik t={t} bas={K(2, "not replace")} metin="NOT A REPLACEMENT" x={1860} y={240} boyut={48} renk={RENK.lacivert} hiza="sag" />
    </>
  );
};

export default S51;
