// Sahne 8 — Soru işareti: solda "karışır mı?", sağda "besler mi?", sonra "endişe"
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = s.cumleler[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 50, 1760])}>
        <Etiket t={t} bas={K(0, "soy")} capa={[760, 800]} konum={[420, 790]} metin="SOY" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "interfere")} bitis={bit} metin="INTERFERE?" x={130} y={330} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "feed")} metin="EVEN FEED" x={1790} y={330} boyut={84} hiza="sag" renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "feed") + 0.2} metin="SOME CANCERS?" x={1790} y={430} boyut={84} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "That")} metin="THAT WAS" x={130} y={330} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "worry")} metin="THE WORRY" x={130} y={446} boyut={104} renk={RENK.koyuYesil} />
    </>
  );
};
export default S08;
