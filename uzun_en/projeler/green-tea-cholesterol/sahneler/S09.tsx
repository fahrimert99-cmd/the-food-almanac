// Sahne 9 — LDL nedir, hedef değerler.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  const pPanel = eout(ilerle(t, 0.2, 0.7));
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 30, 1850], [50, 70, 1770])}>
        {/* kolesterol birikimi: kavanozdaki kırmızı parçacık */}
        <Etiket t={t} bas={K(0, "buildup")} bitis={K(1, "for") - 0.2} capa={[670, 650]} konum={[960, 400]} metin="CHOLESTEROL BUILDUP" renk={RENK.mercan} boyut={24} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={720} />
      <Baslik t={t} bas={K(0, "LDL,")} metin="LDL" x={1860} y={190} boyut={130} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(0, "bad")} metin="OFTEN CALLED THE “BAD” CHOLESTEROL" x={1860} y={275} hiza="sag" genislik={520} boyut={30} agirlik={800} />
      <VurguRozet t={t} bas={K(1, "under")} vurgu={m.baslik!.vurgu!} not={m.baslik!.not} x={1400} y={420} genislik={290} boyut={88} renk={RENK.yesil} />
      <VurguRozet t={t} bas={K(1, "160")} vurgu="≥160" not="mg/dL is high" x={1720} y={420} genislik={290} boyut={88} renk={RENK.mercan} />
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} />}
    </>
  );
};

export default S09;
