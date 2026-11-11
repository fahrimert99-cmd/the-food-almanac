// Sahne 26 — terazi: ortalamada fark yok, ama kişiler farklı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [90, 40, 1740]);
  const bitis = K(1, "But") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/26" pencere={pen}>
        <Etiket t={t} bas={K(0, "no significant difference")} capa={[960, 790]} konum={[960, 885]} metin="NO SIGNIFICANT DIFFERENCE" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(2, "white bread")} capa={[1450, 560]} konum={[1450, 320]} metin="ABOUT HALF · WHITE BREAD" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "sourdough")} capa={[420, 540]} konum={[460, 300]} metin="ABOUT HALF · SOURDOUGH" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "no significant")} bitis={bitis} satirlar={["NO AVERAGE", "DIFFERENCE"]} x={960} y={95} boyut={92} hiza="orta" />
      <Not t={t} bas={K(1, "individuals")} metin="BUT HALF DID BETTER ON EACH BREAD" x={960} y={95} hiza="orta" boyut={46} agirlik={800} />
    </>
  );
};

export default S26;
