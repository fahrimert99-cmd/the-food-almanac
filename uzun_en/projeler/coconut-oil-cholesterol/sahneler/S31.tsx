// Sahne 31 — Mumme & Stonehouse 2015: MCT ~0,5 kg daha fazla kilo kaybı; kan yağları fark etmedi.
import React from "react";
import { BaslikBlok, Etiket, Ikon, KaynakEtiketi, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const b = s.meta.baslik!;
  const t1 = c[1].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 60, 1760])}>
        <Etiket t={t} bas={K(1, "body")} bitis={c[2].bas - 0.1} capa={[960, 800]} konum={[960, 440]} metin="BODY WEIGHT" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "Blood")} capa={[550, 640]} konum={[1000, 330]} metin="BLOOD FATS" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <VurguRozet t={t} bas={K(0, "13")} bitis={t1} vurgu="13" not="TRIALS" x={1380} y={180} genislik={300} boyut={90} renk={RENK.yesil} />
      <VurguRozet t={t} bas={K(0, "749")} bitis={t1} vurgu="749" not="ADULTS" x={1720} y={180} genislik={300} boyut={90} renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={K(1, "half")} satirlar={b.satirlar} x={80} y={175} boyut={100} hiza="sol" />
      <VurguRozet t={t} bas={K(1, "kilogram")} vurgu={b.vurgu!} not={b.not} x={1560} y={230} genislik={480} boyut={100} />
      <Ikon t={t} bas={K(2, "didn't")} ad="onay" x={120} y={520} boyut={70} />
      <Not t={t} bas={K(2, "didn't")} metin="NO OVERALL DIFFERENCE" x={180} y={480} hiza="sol" boyut={38} agirlik={800} genislik={320} />
    </>
  );
};

export default S31;
