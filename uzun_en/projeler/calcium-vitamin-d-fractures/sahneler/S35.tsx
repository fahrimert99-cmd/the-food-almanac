// Sahne 35 — konserve somon 180 mg, sardalya 325 mg.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit = c[1].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 25, 1800])}>
        <Etiket t={t} bas={K(0, "soft")} bitis={bit} capa={[690, 440]} konum={[1020, 160]} metin="WITH SOFT BONES" renk={RENK.mercan} />
        <Baslik t={t} bas={K(0, "canned")} bitis={bit} metin="CANNED" x={1360} y={260} boyut={110} renk={RENK.lacivert} />
        <Baslik t={t} bas={K(0, "salmon") } bitis={bit} metin="SALMON" x={1360} y={370} boyut={110} renk={RENK.lacivert} />
        <Baslik t={t} bas={K(0, "180")} bitis={bit} metin="180 MG" x={1360} y={520} boyut={150} renk={RENK.altin} />
        <Not t={t} bas={K(0, "180") + 0.2} bitis={bit} metin="eat the soft bones for the calcium" x={1360} y={610} boyut={30} genislik={380} />
        <Baslik t={t} bas={K(1, "sardines")} metin="SARDINES" x={1360} y={330} boyut={110} renk={RENK.lacivert} />
        <Baslik t={t} bas={K(1, "325")} metin="325 MG" x={1360} y={480} boyut={150} renk={RENK.koyuYesil} />
        <Not t={t} bas={K(1, "bones")} metin="canned, with bones" x={1360} y={570} boyut={30} genislik={380} />
      </Kamera>
    </>
  );
};

export default S35;
