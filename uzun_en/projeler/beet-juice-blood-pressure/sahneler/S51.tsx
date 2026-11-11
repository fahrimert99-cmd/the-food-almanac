// Sahne 51 — "Five." Evde ölç: aynı saatte ölç, değerleri doktora götür.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFive = K(0, "Five"), tMeasure = K(1, "Measure"), tSame = K(2, "same time"), tBring = K(2, "bring");
  const tHome = K(3, "Home readings");
  const [sc, al] = pop(t, tFive, 0.5);
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        {/* monitör düğmelerindeki bozuk yazı */}
        <div style={{ position: "absolute", left: 250, top: 745, width: 230, height: 50,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #2F7F96 0%, #2F7F96 60%, rgba(47,127,150,0) 100%)" }} />
        <Etiket t={t} bas={tSame} bitis={tBring - 0.1} capa={[340, 520]} konum={[900, 480]} metin="SAME TIME EACH DAY" renk={RENK.yesil} />
        <Etiket t={t} bas={tBring} bitis={tHome - 0.1} capa={[1350, 850]} konum={[1350, 640]} metin="READINGS TO DOCTOR" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 780, top: 130, width: 120, height: 120, borderRadius: "50%", background: RENK.lacivert,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 88,
        transform: `scale(${sc})`, opacity: al }}>5</div>
      <BaslikBlok t={t} bas={tMeasure} satirlar={s.meta.baslik?.satirlar ?? ["MEASURE", "AT HOME"]} x={930} y={160} boyut={104} />
      <Not t={t} bas={tHome} metin="HOME READINGS: WHAT THE TRIAL RELIED ON" x={780} y={620} genislik={1100} boyut={36} agirlik={800} />
    </>
  );
};

export default S51;
