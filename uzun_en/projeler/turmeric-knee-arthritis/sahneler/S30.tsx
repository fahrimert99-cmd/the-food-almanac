// Sahne 30 — Görüntüleme sonucu: şişlik ve kıkırdak değişmedi; hastalığı yavaşlattığı gösterilmedi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [160, 40, 1640], [250, 80, 1480]);
  const tSon = K(1, "has not been shown");
  return (
    <>
      <Kamera gorsel="tam/30" pencere={pencere}>
        <Etiket t={t} bas={K(0, "scanned the knee")} capa={[850, 400]} konum={[420, 330]} metin="KNEE SCAN" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "swelling")} capa={[900, 430]} konum={[420, 470]} metin="SWELLING" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "cartilage")} capa={[880, 450]} konum={[420, 610]} metin="CARTILAGE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "turmeric did")} capa={[1300, 640]} konum={[1540, 460]} metin="TURMERIC" renk={RENK.mercan} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "did not change")} vurgu="NO CHANGE" not="swelling or cartilage" x={1450} y={170}
        genislik={560} boyut={92} bitis={K(1, "So even") - 0.1} />
      <BaslikBlok t={t} bas={tSon} satirlar={["NOT SHOWN TO", "SLOW ARTHRITIS"]} x={1060} y={210} boyut={80}
        renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S30;
