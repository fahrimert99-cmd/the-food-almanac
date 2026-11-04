// Sahne 28 — koyu tam tahıllı ekmek ile beyaz ekmek: un ve fermantasyon birlikte değişti.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  // Pencere y<970: alttaki sahte yazılar (y~1000) dışarıda
  const pen = kameraYolu(t, s.sure, [0, 0, 1720], [120, 40, 1560]);
  const son = K(1, "Flour") - 0.15;
  const [sc, al] = pop(t, K(1, "hard to untangle"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/28" pencere={pen}>
        <Etiket t={t} bas={K(0, "traditional whole-grain sourdough")} bitis={son} capa={[560, 640]} konum={[420, 340]} metin="WHOLE-GRAIN SOURDOUGH" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "industrial white bread")} bitis={son} capa={[1450, 720]} konum={[1440, 430]} metin="INDUSTRIAL WHITE" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={K(1, "Flour")} metin="FLOUR + FERMENTATION" x={80} y={100} boyut={80} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "changed together") } metin="CHANGED TOGETHER" x={80} y={195} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 80, top: 300, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="HARD TO UNTANGLE" renk={RENK.mercan} boyut={32} />
      </div>
    </>
  );
};

export default S28;
