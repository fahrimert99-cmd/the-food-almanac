// Sahne 27 — mikrobiyom ile ekmek seçimi: sol daire içinde bağırsak, sağda ekmek kasesi.
import React from "react";
import { Baslik, Etiket, Hap, IkonYol, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  // Pencere y<940 kalır: sağ alttaki sahte imza dışarıda
  const pen = kameraYolu(t, s.sure, [60, 0, 1640], [120, 60, 1560]);
  const [sc, al] = pop(t, K(1, "needs confirming"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/27" pencere={pen}>
        <Etiket t={t} bas={K(0, "gut microbiome")} capa={[340, 440]} konum={[340, 720]} metin="GUT MICROBIOME" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "which bread would suit")} capa={[1050, 480]} konum={[1180, 200]} metin="WHICH BREAD SUITS THEM" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "predict")} bitis={K(1, "That's") - 0.2} metin="PREDICT THE BEST BREAD" x={960} y={95} boyut={80} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={K(1, "intriguing")} metin="INTRIGUING" x={960} y={95} boyut={84} renk={RENK.koyuYesil} hiza="orta" />
      <div style={{ position: "absolute", left: 960, top: 890, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="NEEDS LARGER STUDIES" renk={RENK.altin} boyut={32} />
      </div>
    </>
  );
};

export default S27;
