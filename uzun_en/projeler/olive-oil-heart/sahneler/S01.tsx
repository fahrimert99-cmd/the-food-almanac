import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, MARKA, Not, RENK, SP, VurguRozet, einout, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// Sahne 1 — PREDIMED'in açılış sonucu: sağ boş kâğıtta başlık, rakamlar ve rozet.
const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1800])}>
        <Etiket t={t} bas={K(0, "olive oil")} bitis={K(0, "31") - 0.2} capa={[447, 773]} konum={[250, 960 - 140]} metin="OLIVE OIL" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.3} />
      <BaslikBlok t={t} bas={0.25} satirlar={b.satirlar} x={1250} y={230} boyut={100} />
      <Not t={t} bas={K(0, "7,447")} metin="7,447 SPANISH ADULTS" x={1255} y={420} boyut={34} agirlik={800} renk={RENK.altin} />
      <Not t={t} bas={K(0, "aged")} metin="AGES 55 TO 80" x={1255} y={470} boyut={34} agirlik={800} />
      <VurguRozet t={t} bas={K(0, "31")} vurgu={b.vurgu!} not={b.not} x={1560} y={580} genislik={460} boyut={120} renk={RENK.koyuYesil} />
    </>
  );
};
export default S01;
