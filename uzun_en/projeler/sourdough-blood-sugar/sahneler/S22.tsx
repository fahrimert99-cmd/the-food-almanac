// Sahne 22 — Mofidi: beyaz ekşi maya daha yüksek yanıt
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tWhite = K(0, "white"), tHigh = K(0, "higher"), tThree = K(0, "three"), tEl = K(1, "eleven"), tStore = K(1, "store-bought");
  return (
    // sağdaki glukometre (bozuk yazı) kamera penceresinin dışında kalır
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 240, 1460], [40, 248, 1400])}>
        <Etiket t={t} bas={tWhite} bitis={tThree - 0.3} capa={[420, 640]} konum={[420, 450]} metin="WHITE SOURDOUGH" renk={RENK.mercan} />
        <Etiket t={t} bas={tThree} bitis={tEl - 0.4} capa={[900, 700]} konum={[900, 450]} metin="3 WHOLE-GRAIN" renk={RENK.yesil} />
        <Etiket t={t} bas={tStore} capa={[420, 640]} konum={[560, 420]} metin="STORE-BOUGHT" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tHigh} bitis={tThree - 0.2} satirlar={["HIGHER GLUCOSE", "AND INSULIN"]} x={1860} y={180} boyut={90} hiza="sag" />
      <VurguRozet t={t} bas={tEl} vurgu="11 & 12" not="men in small groups" x={1500} y={130} genislik={440} boyut={88} />
    </>
  );
};
export default S22;
