// Sahne 1 — Maioli 2008 çalışması: ekmek + glukometre, üstte başlık ve rozet.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(0, "regular yeast");
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={K(0, "sourdough bread")} bitis={tBaslik - 0.3} capa={[520, 560]} konum={[560, 380]} metin="SOURDOUGH" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "blood sugar")} bitis={tBaslik - 0.3} capa={[1340, 690]} konum={[1380, 480]} metin="BLOOD SUGAR" renk={RENK.mercan} />
      </Kamera>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={0.2} />}
      <VurguRozet t={t} bas={K(0, "16")} bitis={K(0, "sourdough bread") - 0.2} vurgu="16" not="ADULTS · CROSSOVER TRIAL" x={1330} y={150} genislik={440} />
      <Baslik t={t} bas={tBaslik} metin="SOURDOUGH" x={960} y={190} boyut={104} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={tBaslik + 0.2} metin="VS YEAST BREAD" x={960} y={300} boyut={104} hiza="orta" renk={RENK.koyuYesil} />
    </>
  );
};

export default S01;
