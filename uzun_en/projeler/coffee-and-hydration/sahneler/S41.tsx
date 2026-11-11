// Sahne 41 — EFSA: günde 400 mg'a kadar, gün içine yayılmış; tek doz 200 mg'a kadar kaygı yok.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "In Europe")} bitis={K(0, "reached")} capa={[990, 480]} konum={[1330, 200]} metin="EUROPE" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={1000} />
      <BaslikBlok t={t} bas={K(0, "European Food Safety")} satirlar={["EFSA"]} x={70} y={200} boyut={160} renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={K(0, "European Food Safety")} metin="EUROPEAN FOOD SAFETY AUTHORITY" x={76} y={300} boyut={32} agirlik={800} />
      <Not t={t} bas={K(0, "similar conclusion")} metin="A SIMILAR CONCLUSION" x={76} y={360} boyut={32} agirlik={600} renk={RENK.gri} />
      <Liste t={t} isaret="onay" x={70} y={470} aralik={86} boyut={32} genislik={860} ogeler={[
        { bas: K(1, "400 milligrams"), metin: "UP TO 400 MG A DAY" },
        { bas: K(1, "spread through"), metin: "SPREAD THROUGH THE DAY" },
        { bas: K(1, "no safety concern"), metin: "NO SAFETY CONCERN, HEALTHY ADULTS" },
        { bas: K(1, "single doses"), metin: "SINGLE DOSES UP TO 200 MG" },
      ]} />
    </>
  );
};

export default S41;
