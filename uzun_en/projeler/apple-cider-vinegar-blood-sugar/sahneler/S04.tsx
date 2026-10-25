// Sahne 4 — soru başlığı solda, ardından videonun üç konusu.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tListe = K(1, "studies,");
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [200, 40, 1720], [320, 80, 1600])}>
        <Etiket t={t} bas={K(0, "apple")} bitis={tListe - 0.1} capa={[1440, 800]} konum={[1020, 640]} metin="APPLE CIDER VINEGAR" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "really")} bitis={tListe - 0.15} satirlar={["REAL EFFECT", "OR MYTH?"]} x={70} y={300} boyut={118}
        renkler={[RENK.lacivert, RENK.mercan]} adim={K(0, "lower") - K(0, "really")} />
      <Liste t={t} x={90} y={230} aralik={120} boyut={46} genislik={760} ogeler={[
        { bas: tListe, metin: "THE STUDIES", renk: RENK.altin },
        { bas: K(1, "way"), metin: "YOUR STOMACH", renk: RENK.koyuYesil },
        { bas: K(1, "safety"), metin: "SAFETY POINTS", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S04;
