// Sahne 1 — VITAL: 5 yıl D vitamini kırık riskini düşürmedi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(0, "did not lower");
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [60, 80, 1680])}>
        <Etiket t={t} bas={K(0, "vitamin")} bitis={tBaslik + 1.5} capa={[860, 850]} konum={[1420, 880]} metin="VITAMIN D" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <VurguRozet t={t} bas={K(0, "26,000")} bitis={tBaslik - 0.1} vurgu="26,000" not="adults over 50" x={1540} y={180} genislik={420} />
      <BaslikBlok t={t} bas={tBaslik} satirlar={s.meta.baslik!.satirlar} x={1860} y={260} boyut={100} hiza="sag" />
      <Not t={t} bas={tBaslik + 0.6} metin={s.meta.baslik!.not!} x={1860} y={500} hiza="sag" genislik={560} boyut={32} />
    </>
  );
};

export default S01;
