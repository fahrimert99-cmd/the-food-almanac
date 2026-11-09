// Sahne 6 — baldır düğümü: gece krampı tanımı
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={K(0, "calf")} bitis={7.2} capa={[613, 507]} konum={[1130, 330]} metin="CALF" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "foot,")} bitis={7.2} capa={[850, 880]} konum={[1190, 640]} metin="FOOT" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "sudden,")} metin="THE CALF" x={1860} y={250} boyut={110} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "tightening")} metin="KNOT" x={1860} y={365} boyut={110} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "painful")} bitis={K(0, "strikes")} metin="A SUDDEN, PAINFUL TIGHTENING" x={1860} y={455} hiza="sag" boyut={30} agirlik={800} renk={RENK.altin} genislik={560} />
      <Not t={t} bas={K(0, "strikes")} metin="WHILE YOU'RE RESTING OR ASLEEP" x={1860} y={455} hiza="sag" boyut={30} agirlik={800} renk={RENK.altin} genislik={560} />
    </>
  );
};

export default S06;
