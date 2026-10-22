// Sahne 25 — Sonuç bir kan testi değişimi; kalp krizi sayılmadı. Başlık sol üstte, etiket tüplerde.
import React from "react";
import { AdimAkisi, Baslik, Etiket, Hap, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tBlood = K(0, "blood test"), tNot = K(0, "not in"), tChol = K(1, "cholesterol"), tLow = K(2, "Lower"), tRisk = K(2, "heart risk"),
    tBuilt = K(2, "not built");
  const aChol = eout(ilerle(t, tChol, 0.4)) * sol(t, tLow - 0.15);
  const aLast = eout(ilerle(t, tBuilt, 0.4));
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1780])}>
        <Etiket t={t} bas={tBlood} bitis={c[1].bas} capa={[470, 540]} konum={[420, 395]} metin="BLOOD SAMPLES" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tBlood - 0.1} metin="A BLOOD TEST," x={80} y={120} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={tNot} metin="NOT HEART ATTACKS" x={80} y={218} boyut={84} renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 80, top: 300, opacity: aChol, transform: `translateY(${(1 - aChol) * 12}px)` }}>
        {t >= tChol && <Hap metin="CHOLESTEROL LEVELS MEASURED" renk={RENK.altin} boyut={28} />}
      </div>
      <AdimAkisi t={t} x={440} y={335} boyut={26} numarali={false} adimlar={[
        { bas: tLow, metin: "LOWER LDL", renk: RENK.yesil },
        { bas: tRisk, metin: "LOWER HEART RISK", renk: RENK.yesil },
      ]} />
      <div style={{ position: "absolute", left: 80, top: 388, opacity: aLast, transform: `translateY(${(1 - aLast) * 12}px)`, display: "flex", alignItems: "center", gap: 14 }}>
        {t >= tBuilt && <>
          <Hap metin="HEART ATTACKS NOT COUNTED" renk={RENK.mercan} boyut={26} />
        </>}
      </div>
    </>
  );
};

export default S25;
