// Sahne 48 — kalp hastalığı, çok yüksek LDL, ailede yüksek kolesterol: doğru yumurta sayısı doktora sorulur.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKalp = K(0, "heart disease"), tLdl = K(0, "very high"), tAile = K(0, "family history");
  const tYumurta = K(0, "number of eggs"), tSoru = K(0, "question"), tDoktor = K(0, "doctor"), tVideo = K(1, "This video");
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 50, 1780])}>
        <Etiket t={t} bas={tYumurta} capa={[680, 560]} konum={[1000, 720]} metin="EGGS" renk={RENK.altin} boyut={32} />
        <Etiket t={t} bas={tDoktor} capa={[400, 270]} konum={[840, 230]} metin="YOUR DOCTOR" renk={RENK.koyuYesil} boyut={32} />
      </Kamera>
      <Liste t={t} isaret="nokta" x={960} y={400} aralik={84} boyut={34} genislik={900}
        ogeler={[
          { bas: tKalp, metin: "HEART DISEASE", renk: RENK.mercan },
          { bas: tLdl, metin: "VERY HIGH LDL", renk: RENK.mercan },
          { bas: tAile, metin: "FAMILY HISTORY OF HIGH CHOLESTEROL", renk: RENK.mercan },
        ]} />
      <Baslik t={t} bas={tSoru} metin="ASK YOUR" x={1860} y={160} boyut={96} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tSoru + 0.15} metin="DOCTOR" x={1860} y={270} boyut={96} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={tVideo} metin="THIS VIDEO CAN'T ANSWER IT FOR YOU" x={1860} y={850} boyut={34} agirlik={800} hiza="sag" />
    </>
  );
};

export default S48;
