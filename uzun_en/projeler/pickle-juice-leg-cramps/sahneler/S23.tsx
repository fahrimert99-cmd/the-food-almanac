// Sahne 23 — hız: birkaç kaşık, büyük boş varil.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [120, 40, 1700], [200, 90, 1560])}>
        <Etiket t={t} bas={K(1, "salt or water")} capa={[1190, 640]} konum={[1580, 640]} metin="SALT OR WATER?" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(1, "tablespoons")} capa={[1000, 250]} konum={[1520, 190]} metin="A FEW TABLESPOONS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "speed")} metin="THE SPEED" x={90} y={330} boyut={112} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "speed") + 0.3} metin="a cramp can ease within minutes" x={96} y={400} boyut={32} genislik={460} />
      <VurguRozet t={t} bas={K(1, "minutes")} vurgu="IN MINUTES" not="from a few tablespoons" x={330} y={620} genislik={460} boyut={72} />
    </>
  );
};

export default S23;
