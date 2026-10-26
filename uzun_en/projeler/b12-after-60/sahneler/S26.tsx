// Sahne 26 — Kaiser çalışması: iki dosya yığını (vaka / kontrol), sayılar rozetle.
import React from "react";
import { Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 60, 1920], [30, 66, 1860])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <VurguRozet t={t} bas={K(0, "25,956")} vurgu="25,956" not="diagnosed with B12 deficiency" x={640} y={200}
        renk={RENK.mercan} boyut={92} genislik={470} />
      <VurguRozet t={t} bas={K(0, "184,199")} vurgu="184,199" not="without a diagnosis" x={1250} y={95}
        renk={RENK.koyuYesil} boyut={92} genislik={470} />
      <Not t={t} bas={K(0, "looked")} metin="THEN LOOKED BACK AT THEIR MEDICINES" x={640} y={415} hiza="orta" boyut={28}
        genislik={700} agirlik={800} />
    </>
  );
};

export default S26;
