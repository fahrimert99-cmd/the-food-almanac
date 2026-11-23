// Sahne 18 — Ryan çalışması: 744 rastgele, 576 analiz.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [60, 70, 1680])}>
        <Etiket t={t} bas={K(1, "chemotherapy")} capa={[960, 330]} konum={[1330, 250]} metin="CHEMOTHERAPY" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(0, "Julie Ryan") - 0.3} />
      <Baslik t={t} bas={K(0, "United States") - 0.1} bitis={K(1, "It") - 0.1} metin="UNITED STATES" x={1860} y={330} boyut={84} hiza="sag" renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={K(1, "744")} satirlar={b.satirlar} x={1860} y={380} boyut={120} hiza="sag" />
      <Not t={t} bas={K(1, "adults")} metin={b.not!} x={1860} y={620} hiza="sag" genislik={560} />
      <VurguRozet t={t} bas={K(1, "576")} vurgu="576" not="IN THE ANALYSIS" x={1560} y={740} genislik={340} />
    </>
  );
};

export default S18;
