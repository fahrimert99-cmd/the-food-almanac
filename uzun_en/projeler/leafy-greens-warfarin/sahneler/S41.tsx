// Sahne 41 — Doktor masası solda; sağda neden herkes geçmiyor + uyarı başlığı.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pPan = eout(ilerle(t, 0.3, 0.8));
  const cik = c[2].bas - 0.2;
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [20, 70, 1860])}>
        <Etiket t={t} bas={K(1, "doctor")} bitis={cik} capa={[400, 500]} konum={[330, 190]} metin="YOUR DOCTOR" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "other medicines")} bitis={cik} capa={[784, 340]} konum={[800, 140]} metin="OTHER MEDICINES" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPan} taraf="sag" genislik={700} />
      <Ikon t={t} bas={0.2} bitis={c[1].bas - 0.1} ad="soru" x={1560} y={330} boyut={150} zemin={RENK.altin} />
      <Liste t={t} x={1340} y={250} aralik={110} boyut={34} isaret="nokta" genislik={560}
        ogeler={[
          { bas: K(1, "heart condition"), metin: "YOUR HEART CONDITION", renk: RENK.koyuYesil, bitis: cik },
          { bas: K(1, "kidneys"), metin: "YOUR KIDNEYS", renk: RENK.koyuYesil, bitis: cik },
          { bas: K(1, "other medicines"), metin: "YOUR OTHER MEDICINES", renk: RENK.koyuYesil, bitis: cik },
        ]} />
      <BaslikBlok t={t} bas={K(2, "Never")} satirlar={s.meta.baslik!.satirlar} x={1860} y={400} boyut={92} hiza="sag" renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S41;
