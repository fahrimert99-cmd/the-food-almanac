// Sahne 17 — HDL ve trigliserit anlamlı değişmedi; etki LDL ve toplam kolesterolde. Terazi + yulaf kasesi.
import React from "react";
import { Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tHdl = K(0, "HDL,"), tTri = K(0, "triglycerides,");
  const bit = c[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={tHdl} bitis={bit} capa={[1130, 600]} konum={[1030, 780]} metin="HDL" renk={RENK.altin} />
        <Etiket t={t} bas={tTri} bitis={bit} capa={[1620, 640]} konum={[1690, 780]} metin="TRIGLYCERIDES" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "LDL")} capa={[540, 430]} konum={[520, 190]} metin="LDL + TOTAL" renk={RENK.yesil} boyut={34} />
      </Kamera>
      <Not t={t} bas={K(0, "not")} bitis={bit} metin="NO SIGNIFICANT CHANGE" x={1250} y={70} hiza="orta" boyut={38} agirlik={800} />
    </>
  );
};

export default S17;
