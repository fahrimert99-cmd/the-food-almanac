// Sahne 1 — Prune çalışması: giriş, sağ boşlukta başlık ve rozet.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  const tYavas = K(0, "slowed");
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(0, "prunes")} bitis={s.sure} capa={[800, 470]} konum={[1000, 250]} metin="5–6 PRUNES A DAY" renk={RENK.altin} />
      </Kamera>
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} bas={K(0, "trial")} />}
      <BaslikBlok t={t} bas={0.3} satirlar={m.baslik!.satirlar} x={1860} y={200} boyut={100} hiza="sag" />
      <Baslik t={t} bas={K(0, "12")} bitis={tYavas - 0.2} metin="12 MONTHS" x={1860} y={470} boyut={64} hiza="sag" renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "235")} bitis={tYavas - 0.2} metin="235 WOMEN" x={1860} y={560} boyut={64} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "postmenopausal")} bitis={tYavas - 0.2} metin="postmenopausal" x={1860} y={610} hiza="sag" boyut={32} renk={RENK.gri} />
      <VurguRozet t={t} bas={K(0, "hip")} vurgu={m.baslik!.vurgu!} not={m.baslik!.not} x={1590} y={430} genislik={440} renk={RENK.koyuYesil} />
    </>
  );
};

export default S01;
