// Sahne 23 — anket sınırlılığı: defter + kalem; sağda boş kâğıt üzerinde zaman çizgisi ve "TRIAL" başlığı.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tSon = K(3, "Rush") - 0.25;           // sağ sütun değişir
  const cik1 = c[2].bas - 0.2;
  // zaman çizgisi (S2: "eating differently ... years before a diagnosis")
  const tYemek = K(2, "eating"), tYil = K(2, "years");
  const [sY, aY] = pop(t, tYemek, 0.5);
  const [sD, aD] = pop(t, K(2, "diagnosis"), 0.5);
  const pCizgi = eout(ilerle(t, tYil, 1.2));
  const aAlt = sol(t, tSon);
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(1, "questionnaires")} bitis={cik1} capa={[640, 360]} konum={[420, 250]} metin="FOOD QUESTIONNAIRES" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "memory")} bitis={c[3].bas - 0.2} capa={[905, 520]} konum={[1330, 800]} metin="RELY ON MEMORY" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "quieter") - 0.1} bitis={cik1} metin="A QUIETER PROBLEM" x={80} y={110} boyut={78} renk={RENK.lacivert} />
      {/* sağ sütun: erken evre, yıllar önce */}
      <div style={{ opacity: aAlt }}>
        <Baslik t={t} bas={K(2, "earliest")} bitis={tSon} metin="EARLIEST STAGES" x={1340} y={250} boyut={62} renk={RENK.lacivert} />
        <Baslik t={t} bas={K(2, "dementia")} bitis={tSon} metin="OF DEMENTIA" x={1340} y={322} boyut={62} renk={RENK.koyuYesil} />
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <line x1={1390} y1={540} x2={1390 + 400 * pCizgi} y2={540} stroke={RENK.lacivert} strokeWidth={5} strokeDasharray="14 10" strokeLinecap="round" />
          <circle cx={1390} cy={540} r={16 * sY} fill={RENK.altin} stroke="#fff" strokeWidth={4} opacity={aY} />
          <circle cx={1790} cy={540} r={16 * sD} fill={RENK.mercan} stroke="#fff" strokeWidth={4} opacity={aD} />
        </svg>
        <div style={{ position: "absolute", left: 1340, top: 440, opacity: aY, transform: `scale(${sY})`, transformOrigin: "0% 100%" }}>
          <Hap metin="EATING CHANGES" renk={RENK.altin} boyut={24} />
        </div>
        <div style={{ position: "absolute", left: 1600, top: 580, opacity: aD, transform: `scale(${sD})`, transformOrigin: "0% 0%" }}>
          <Hap metin="DIAGNOSIS" renk={RENK.mercan} boyut={24} />
        </div>
        <Not t={t} bas={tYil} bitis={tSon} metin="YEARS BEFORE" x={1340} y={590} hiza="sol" boyut={28} agirlik={800} renk={RENK.gri} />
      </div>
      {/* kapanış: deneme gerekli */}
      <Not t={t} bas={K(3, "Rush")} metin="THE RUSH TEAM SAID" x={1340} y={190} boyut={28} agirlik={800} renk={RENK.altin} />
      <Baslik t={t} bas={K(3, "trial")} metin="A TRIAL IS" x={1340} y={300} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(3, "needed")} metin="NEEDED" x={1340} y={420} boyut={104} renk={RENK.koyuYesil} />
    </>
  );
};

export default S23;
