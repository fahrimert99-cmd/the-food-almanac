// Sahne 30 — vücut ağırlığı bağlantının büyük kısmını açıklıyor; düzeltmeyle fark küçülüyor ama kaybolmuyor.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tB = K(1, "After") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 110, 1800])}>
        <Etiket t={t} bas={K(0, "weight")} bitis={tB} capa={[690, 330]} konum={[1180, 190]} metin="BODY WEIGHT" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "starting")} capa={[300, 800]} konum={[560, 910]} metin="STARTING WEIGHT" renk={RENK.koyuYesil} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "shrank,") - 0.1} satirlar={["GAP SHRANK,"]} x={1860} y={170} hiza="sag" boyut={96} />
      <BaslikBlok t={t} bas={K(1, "disappear") - 0.4} satirlar={["NOT GONE"]} x={1860} y={290} hiza="sag" boyut={96} renkler={[RENK.altin]} />
    </>
  );
};

export default S30;
