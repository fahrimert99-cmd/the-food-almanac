// Sahne 2 — birkaç yiyecek farklı; 65+ vurgusu.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1830])}>
        {/* jambon paketindeki bozuk yazıyı etiket hapı örter */}
        <Etiket t={t} bas={0.3} capa={[600, 540]} konum={[470, 428]} metin="DELI HAM" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "different")} capa={[800, 540]} konum={[950, 800]} metin="SOFT CHEESE" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={0.05} satirlar={["A FEW FOODS", "ARE DIFFERENT"]} x={1860} y={190} boyut={100} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={K(0, "after")} vurgu="65+" not="especially after 65" x={1600} y={440} genislik={440} />
    </>
  );
};

export default S02;
