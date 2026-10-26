// Sahne 16 — liste büyüyor; FDA'nın belirttiği ilaçlara geçiş.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 80, 1760])}>
        <Etiket t={t} bas={K(1, "medicines")} capa={[780, 640]} konum={[560, 860]} metin="WHICH MEDICINES?" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "FDA")} capa={[960, 680]} konum={[1330, 860]} metin="FDA SAYS INVOLVED" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "list")} metin="THE LIST" x={960} y={130} boyut={104} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "kept")} metin="KEEPS GROWING" x={960} y={250} boyut={104} hiza="orta" renk={RENK.koyuYesil} />
    </>
  );
};

export default S16;
