// Sahne 36 — hazır şarküteri salataları yerine ev yapımı.
import React from "react";
import { Etiket, Kamera, Not, Baslik, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit = c[1].bas - 0.2;
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [120, 80, 1700])}>
        <Etiket t={t} bas={K(0, "coleslaw")} bitis={bit} capa={[500, 500]} konum={[300, 330]} metin="COLESLAW" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "tuna")} bitis={bit} capa={[850, 400]} konum={[1000, 200]} metin="TUNA SALAD" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "Homemade")} capa={[1400, 470]} konum={[1350, 150]} metin="HOMEMADE" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "premade")} bitis={bit} metin="SKIP PREMADE" x={140} y={110} boyut={60} renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "safer")} metin="SAFER CHOICE" x={140} y={110} boyut={60} renk={RENK.koyuYesil} />
    </>
  );
};

export default S36;
