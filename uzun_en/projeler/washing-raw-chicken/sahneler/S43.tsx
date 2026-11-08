// Sahne 43 — korkmak değil, alışkanlık edinmek.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHab = K(1, "handling habits");
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760])}>
        <Etiket t={t} bas={K(0, "chicken")} bitis={tHab - 0.2} capa={[800, 690]} konum={[640, 520]} metin="RAW CHICKEN" renk={RENK.mercan} />
        <Etiket t={t} bas={tHab} capa={[867, 800]} konum={[560, 910]} metin="HANDLING HABITS" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(1, "automatic")} metin="AUTOMATIC" x={1610} y={300} boyut={66} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "cost")} metin="Costs almost nothing" x={1610} y={350} boyut={32} genislik={280} />
    </>
  );
};

export default S43;
