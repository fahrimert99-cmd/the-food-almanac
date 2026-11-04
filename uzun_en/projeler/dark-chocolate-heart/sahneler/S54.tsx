// Sahne 54 — özet: ana sonuç anlamlı değil, ölüm ikincil bulgu
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTrial = K(0, "large trial"), tExt = K(0, "cocoa extract"), tNot = K(0, "not"),
    tDeath = K(1, "Cardiovascular"), t27 = K(1, "27"), tSec = K(1, "secondary"), tHyp = K(1, "hypothesis-generating");
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={tTrial} bitis={tDeath - 0.1} capa={[800, 640]} konum={[330, 880]} metin="LARGE TRIAL" renk={RENK.lacivert} />
        <Etiket t={t} bas={tExt} bitis={tDeath - 0.1} capa={[1380, 850]} konum={[1640, 900]} metin="COCOA EXTRACT" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tNot} satirlar={["NOT", "SIGNIFICANT"]} x={70} y={190} boyut={96} bitis={tDeath - 0.1}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={tNot + 0.5} metin="total cardiovascular events" x={70} y={380} genislik={500} bitis={tDeath - 0.1} />
      <VurguRozet t={t} bas={t27} vurgu="–27%" not="cardiovascular deaths" x={300} y={170} genislik={420} renk={RENK.yesil} />
      <BaslikBlok t={t} bas={tSec} satirlar={["SECONDARY", "FINDING"]} x={1860} y={190} boyut={90} hiza="sag"
        renkler={[RENK.lacivert, RENK.altin]} />
      <Not t={t} bas={tHyp} metin="hypothesis-generating" x={1860} y={420} hiza="sag" agirlik={800} />
    </>
  );
};

export default S54;
