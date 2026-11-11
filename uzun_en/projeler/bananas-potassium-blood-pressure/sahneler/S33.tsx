// Sahne 33 — köy manzarası: sınırlılık (kırsal Çin, genellenebilirlik)
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, ilerle, kameraYolu, kelimeZamani, pop, eout, sol } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKoy = K(0, "rural Chinese villages");
  const tCarry = K(0, "may not carry over");
  const tAmer = K(0, "American kitchens");
  const tLimit = K(1, "limit");
  const cik1 = tCarry - 0.15;
  const [sc, al] = pop(t, tLimit, 0.55);
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [40, 40, 1840], [140, 90, 1640])}>
        <Etiket t={t} bas={tKoy} capa={[307, 690]} konum={[330, 480]} metin="RURAL VILLAGE" renk={RENK.yesil} />
        <Etiket t={t} bas={tKoy + 0.5} capa={[600, 665]} konum={[760, 520]} metin="CHINA TRIAL" renk={RENK.altin} />
      </Kamera>
      {/* 1. vuruş: başlık gökyüzünde */}
      <Baslik t={t} bas={tKoy} bitis={cik1} metin="RURAL VILLAGES" x={960} y={190} boyut={110} renk={RENK.koyuYesil} hiza="orta" />
      {/* 2. vuruş: aktarılabilirlik */}
      <Baslik t={t} bas={tCarry} bitis={tLimit - 0.6} metin="MAY NOT CARRY OVER" x={960} y={190} boyut={100} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tAmer} bitis={tLimit - 0.6} metin="TO AMERICAN KITCHENS" x={960} y={300} boyut={56} renk={RENK.mercan} hiza="orta" />
      {/* 3. vuruş: yazarlar sınır olarak belirtir */}
      <div style={{ position: "absolute", left: 960, top: 190, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="A LIMIT ON HOW WIDELY IT APPLIES" renk={RENK.altin} boyut={44} />
      </div>
    </>
  );
};

export default S33;
