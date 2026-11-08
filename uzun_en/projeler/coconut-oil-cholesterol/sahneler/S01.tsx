import React from "react";
import { Baslik, BaslikBlok, CubukGrafik, Etiket, IkonYol, INTER, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet,
  eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Sahne 1 — kavanoz solda, sağda boş kâğıt: başlık + rozet
const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1800])}>
        <Etiket t={t} bas={K(0, "coconut")} bitis={K(1, "Versus") - 0.1} capa={[520, 720]} konum={[980, 600]} metin="COCONUT OIL" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(0, "sixteen")} />
      <BaslikBlok t={t} bas={K(0, "sixteen")} satirlar={["16 TRIALS"]} x={1860} y={230} boyut={120} hiza="sag" renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "Versus")} metin="VERSUS NON-TROPICAL VEGETABLE OILS" x={1860} y={330} hiza="sag" genislik={640} boyut={32} agirlik={800} />
      <VurguRozet t={t} bas={K(1, "ten")} vurgu="+10" not="mg/dL of LDL versus other vegetable oils" x={1560} y={470} genislik={500} renk={RENK.mercan} />
    </>
  );
};
export default S01;
