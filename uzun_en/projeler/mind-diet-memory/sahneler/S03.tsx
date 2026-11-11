// Sahne 3 — yaban mersini kasesi ve defter: sağ üstte vaat başlığı.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHab = K(0, "food habits");
  const tKanit = K(0, "best evidence");
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={tHab} bitis={tKanit - 0.1} capa={[800, 520]} konum={[1080, 220]} metin="FOOD HABITS" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={0.9} metin="BY THE END" x={1860} y={150} boyut={34} font="inter" aralik={6} hiza="sag" renk={RENK.altin} />
      <Baslik t={t} bas={tKanit} metin="BEST EVIDENCE" x={1860} y={235} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "aging brains")} metin="FOR AGING BRAINS" x={1860} y={310} boyut={40} hiza="sag" agirlik={800} />
    </>
  );
};

export default S03;
