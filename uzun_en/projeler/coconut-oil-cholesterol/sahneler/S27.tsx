// Sahne 27 — Eyres 2016 incelemesi: 21 makale; hindistancevizi yağı doymamış yağlar ile tereyağı arasında.
import React from "react";
import { Baslik, Etiket, KaynakEtiketi, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const t1 = c[1].bas - 0.2;
  return (
    <>
      {/* pencere alt kenarı y<1000: sol alttaki sahte imza dışarıda kalır */}
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [150, 0, 1700], [180, 20, 1640])}>
        <Etiket t={t} bas={K(1, "Coconut")} capa={[945, 640]} konum={[945, 470]} metin="COCONUT OIL" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "unsaturated")} capa={[1490, 640]} konum={[1500, 270]} metin="UNSATURATED OILS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "butter")} capa={[390, 830]} konum={[390, 560]} metin="BUTTER" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <VurguRozet t={t} bas={K(0, "21")} bitis={t1} vurgu="21" not="PAPERS" x={560} y={170} genislik={320} boyut={90} />
      <VurguRozet t={t} bas={K(0, "eight")} bitis={t1} vurgu="8" not="CLINICAL TRIALS" x={960} y={170} genislik={360} boyut={90} renk={RENK.yesil} />
      <VurguRozet t={t} bas={K(0, "13")} bitis={t1} vurgu="13" not="OBSERVATIONAL" x={1370} y={170} genislik={360} boyut={90} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "raised")} metin="IN THE" x={960} y={170} boyut={110} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(1, "raised") + 0.18} metin="MIDDLE" x={960} y={285} boyut={110} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={K(1, "total")} metin="TOTAL AND LDL CHOLESTEROL" x={960} y={360} hiza="orta" boyut={36} agirlik={800} />
    </>
  );
};

export default S27;
