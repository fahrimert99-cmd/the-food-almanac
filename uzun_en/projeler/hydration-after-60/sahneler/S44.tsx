// Sahne 44 — Yaşlanmayla gece uyanma: 70–80 yaş, %28–62.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])}>
        <Etiket t={t} bas={K(0, "Waking")} bitis={4.5} capa={[440, 215]} konum={[1180, 520]} metin="AT NIGHT" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "twice")} capa={[848, 480]} konum={[1380, 800]} metin="AT LEAST TWICE" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={0.3} satirlar={b.satirlar} x={1850} y={170} boyut={100} hiza="sag" />
      <VurguRozet t={t} bas={K(1, "28") - 0.1} vurgu={b.vurgu!} not={b.not} x={1560} y={360} genislik={500} boyut={120} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={K(1, "clinical")} />}
    </>
  );
};
export default S44;
