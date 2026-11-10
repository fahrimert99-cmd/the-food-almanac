// Sahne 35 — CDC 2024 şarküteri eti salgını: 61 hastalık, 60 hastaneye yatış, 10 ölüm, 19 eyalet.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 90, 1740])}>
        <Etiket t={t} bas={K(0, "delis")} capa={[520, 330]} konum={[900, 230]} metin="DELI SLICER" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "meats")} capa={[900, 740]} konum={[1450, 800]} metin="DELI CASE" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <BaslikBlok t={t} bas={K(0, "2024")} satirlar={["2024 OUTBREAK"]} x={1260} y={210} boyut={84} renkler={[RENK.lacivert]} />
      <Not t={t} bas={K(0, "61")} metin="61 ILLNESSES" x={1264} y={300} boyut={44} agirlik={800} />
      <Not t={t} bas={K(0, "60")} metin="60 HOSPITALIZATIONS" x={1264} y={370} boyut={44} agirlik={800} />
      <VurguRozet t={t} bas={K(0, "10")} vurgu="10" not="deaths in 19 states, linked to deli-sliced meats" x={1560} y={470} genislik={520}
        renk={RENK.mercan} />
    </>
  );
};

export default S35;
