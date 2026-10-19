// Sahne 46 — DIABEGG sonucu: kan şekeri, kolesterol, iltihap göstergelerinde fark yok; iki grup da ~3 kg verdi.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFark = K(0, "no differences"), tKan = K(0, "blood sugar"), tKol = K(0, "cholesterol"), tIltihap = K(0, "inflammation");
  const tAyni = K(1, "same amount"), tKilo = K(1, "3 kilograms");
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        {/* alttaki küçük imza kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 790, top: 985, width: 220, height: 70,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tAyni} capa={[200, 860]} konum={[1130, 800]} metin="WEIGHT LOSS: SAME" renk={RENK.altin} boyut={32} />
      </Kamera>
      <Baslik t={t} bas={tFark} metin="NO DIFFERENCE" x={1860} y={230} boyut={96} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tFark + 0.15} metin="IN THE TRIAL" x={1860} y={340} boyut={96} renk={RENK.koyuYesil} hiza="sag" />
      <Liste t={t} isaret="onay" x={1130} y={470} aralik={84} boyut={34} genislik={700}
        ogeler={[
          { bas: tKan, metin: "BLOOD SUGAR", bitis: 8.0 },
          { bas: tKol, metin: "CHOLESTEROL", bitis: 8.0 },
          { bas: tIltihap, metin: "INFLAMMATION MARKERS", bitis: 8.0 },
        ]} />
      <VurguRozet t={t} bas={tKilo} vurgu="≈ 3 KG" not="BOTH GROUPS LOST" x={1500} y={470} genislik={400} />
    </>
  );
};

export default S46;
