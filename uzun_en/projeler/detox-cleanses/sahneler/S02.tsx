// Sahne 2 — "ikisi de doğru" + temizlik sorusu
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pw = kameraYolu(t, s.sure, [0, 0, 1920], [40, 24, 1840]);
  const [sc, al] = pop(t, K(0, "Both"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={pw}>
        <Etiket t={t} bas={K(0, "are")} capa={[600, 470]} konum={[260, 640]} metin="JUICE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "cleanse")} capa={[1150, 650]} konum={[1650, 640]} metin="THE CLEANSE" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 70, top: 150, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="BOTH ARE TRUE" renk={RENK.yesil} boyut={34} />
      </div>
      <BaslikBlok t={t} bas={K(1, "catch")} satirlar={["WHAT A CLEANSE", "ACTUALLY CLEANS"]} x={1680} y={250} boyut={58}
        hiza="orta" renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};
export default S02;
