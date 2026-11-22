// Sahne 34 — dürüst boşluk: Cochrane ≥200 mg takviye; portakal suyu/meyve test edilmedi.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tBaslik = K(2, "It did not");
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 20, 1800], [30, 50, 1700])}>
        <Etiket t={t} bas={K(1, "Cochrane")} bitis={c[2].bas - 0.1} capa={[1000, 690]} konum={[1020, 520]} metin="COCHRANE REVIEW" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={K(0, "honest")} bitis={c[1].bas - 0.1} metin="THE HONEST GAP" x={1860} y={230} boyut={96} hiza="sag" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "200")} bitis={c[2].bas - 0.1} vurgu="200+ MG" not="AT LEAST, EVERY DAY" x={1560} y={330} genislik={420} boyut={100} />
      <BaslikBlok t={t} bas={tBaslik} satirlar={["JUICE WAS", "NOT TESTED"]} x={1860} y={230} boyut={100} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Liste t={t} ogeler={[{ bas: K(2, "orange juice"), metin: "ORANGE JUICE", renk: RENK.mercan }, { bas: K(2, "whole oranges"), metin: "WHOLE ORANGES", renk: RENK.mercan }]}
        x={1250} y={560} isaret="carpi" boyut={40} genislik={620} />
    </>
  );
};

export default S34;
