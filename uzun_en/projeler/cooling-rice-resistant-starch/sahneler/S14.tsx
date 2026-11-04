// Sahne 14 — çapraz (crossover) deney: 15 sağlıklı yetişkin, iki masa, iki pirinç.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik ?? { satirlar: ["CROSSOVER", "TRIAL"], not: "" };
  const tYetiskin = K(1, "Fifteen"), tTaze = K(1, "fresh"), tSoguk = K(1, "reheated");
  const tCross = K(2, "crossover");
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 60, 1920], [20, 90, 1800])}>
        <Etiket t={t} bas={tTaze} capa={[395, 405]} konum={[400, 140]} metin="FRESH RICE" renk={RENK.mercan} />
        <Etiket t={t} bas={tSoguk} capa={[855, 400]} konum={[950, 130]} metin="COOLED + REHEATED" renk={RENK.koyuYesil} />
      </Kamera>
      <VurguRozet t={t} bas={tYetiskin} vurgu="15" not="healthy adults" x={1560} y={200} genislik={380} boyut={120} />
      <BaslikBlok t={t} bas={tCross} satirlar={b.satirlar} x={1290} y={560} boyut={100} />
      <Not t={t} bas={tCross + 0.5} metin={b.not ?? ""} x={1294} y={790} boyut={34} genislik={560} agirlik={700} />
    </>
  );
};

export default S14;
