// Sahne 30 — MR çalışması: diz ve zerdeçal kökü; şişlik ve kıkırdak değişmedi, hastalığı yavaşlattığı gösterilmedi.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, kameraYolu, RENK, SP, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840]);
  const tSon = K(1, "not been shown") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/30" pencere={pen}>
        <Etiket t={t} bas={K(0, "scanned the knee")} bitis={K(0, "turmeric") + 0.3} capa={[960, 400]} konum={[1500, 230]} metin="KNEE SCAN" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "turmeric")} bitis={tSon} capa={[1330, 600]} konum={[1620, 800]} metin="TURMERIC" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "swelling")} bitis={c[1].bas - 0.1} capa={[800, 400]} konum={[330, 360]} metin="SWELLING: NO CHANGE" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={K(0, "cartilage")} bitis={c[1].bas - 0.1} capa={[850, 450]} konum={[330, 500]} metin="CARTILAGE: NO CHANGE" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "not been shown")} satirlar={["NOT SHOWN TO SLOW", "ARTHRITIS ITSELF"]} x={1170} y={190} boyut={72}
        renkler={[RENK.lacivert, RENK.mercan]} adim={0.5} />
      <Ikon t={t} bas={K(1, "not been shown")} ad="carpi" x={1100} y={140} boyut={64} zemin={RENK.mercan} />
    </>
  );
};

export default S30;
