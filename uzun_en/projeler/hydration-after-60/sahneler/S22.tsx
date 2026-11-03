// Sahne 22 — düşüş yalnızca filtrasyonla açıklanmıyor; böbrek tuzu da daha az tutuyor.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [30, 15, 1860]);
  const gec = c[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/22" pencere={p}>
        <Etiket t={t} bas={K(0, "kidney filtering")} bitis={gec} capa={[620, 560]} konum={[270, 420]} metin="KIDNEY FILTERING" renk={RENK.koyuYesil} boyut={26} />
        <Etiket t={t} bas={K(1, "hold on")} capa={[560, 720]} konum={[270, 760]} metin="HOLDS LESS SALT" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={K(1, "salts,")} capa={[1385, 800]} konum={[1640, 800]} metin="DISSOLVED SALTS" renk={RENK.altin} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "did not")} bitis={gec} satirlar={["NOT JUST", "FILTERING"]} x={1500} y={230} boyut={84} />
      <VurguRozet t={t} bas={K(1, "harder")} vurgu="HARDER" not="TO CONCENTRATE URINE" x={1690} y={330} genislik={380} boyut={96} renk={RENK.mercan} />
    </>
  );
};

export default S22;
