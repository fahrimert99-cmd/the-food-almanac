// Sahne 15 — "bir dürtme, çözüm değil": terazide ceviz ve küçük ağırlık, –5.5 mg/dL ≈ –3.7%.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tYuzde = K(2, "3.7");
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])}>
        <Etiket t={t} bas={K(0, "consistent")} capa={[530, 520]} konum={[330, 190]} metin="CONSISTENT CHANGE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "size")} capa={[1230, 620]} konum={[1230, 850]} metin="THE SIZE" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(3, "nudge")} satirlar={b.satirlar} x={1860} y={170} boyut={92} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={K(2, "Five")} bitis={tYuzde - 0.15} vurgu="–5.5" not="mg/dL" x={1690} y={440} genislik={340} />
      <VurguRozet t={t} bas={tYuzde} vurgu={b.vurgu!} not={b.not} x={1690} y={440} genislik={360} />
    </>
  );
};

export default S15;
