// Sahne 29 — ekmek kahvaltısı dört saatte yavaş verildi: yavaş salınım.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKahvalti = K(0, "Breakfast"), tOgle = K(0, "lunch");
  const tYavas = K(1, "slowly"), tDort = K(1, "four hours"), tSalinim = K(1, "slow release");
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        <Etiket t={t} bas={tKahvalti} bitis={tSalinim - 0.2} capa={[760, 690]} konum={[360, 500]} metin="BREAKFAST" renk={RENK.altin} />
        <Etiket t={t} bas={tYavas} bitis={tSalinim - 0.2} capa={[880, 450]} konum={[1030, 330]} metin="FED SLOWLY" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tDort} bitis={tSalinim - 0.2} capa={[1390, 430]} konum={[1730, 420]} metin="4 HOURS" renk={RENK.altin} />
      </Kamera>
      {/* öğle: kahvaltıdan sonraki öğün */}
      <Not t={t} bas={tOgle} bitis={3.6} metin="…CHANGED LUNCH" x={960} y={80} boyut={40} hiza="orta" agirlik={800} renk={RENK.lacivert} />
      <Baslik t={t} bas={tSalinim} metin="SLOW RELEASE" x={950} y={105} boyut={80} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={tSalinim + 0.35} metin="THE LIKELY REASON" x={950} y={170} boyut={28} hiza="orta" agirlik={800} renk={RENK.gri} />
    </>
  );
};

export default S29;
