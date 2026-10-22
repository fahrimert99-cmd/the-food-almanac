// Sahne 1 — 28 çalışma, günde 3 g, yaklaşık –10 mg/dL
import React from "react";
import { BolumKarti, Baslik, BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, einout, eout, ilerle,
  kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  const son = s.sure + 1;
  return (
    <>
      <Kamera gorsel="tam/01" pencere={p}>
        <Etiket t={t} bas={K(0, "oatmeal")} bitis={c[1].bas - 0.1} capa={[560, 560]} konum={[1450, 640]} metin="OATMEAL" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(1, "2014")} y={48} />
      <Panel a={eout(ilerle(t, K(1, "2014") - 0.3, 0.8))} genislik={760} />
      <Baslik t={t} bas={K(1, "28")} metin="28 TRIALS" x={1860} y={250} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "three grams") } metin="3 G A DAY" x={1860} y={365} boyut={64} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "oat fiber")} metin="of oat fiber" x={1860} y={410} hiza="sag" boyut={32} />
      <VurguRozet t={t} bas={K(1, "ten")} vurgu={s.meta.baslik!.vurgu!} not={s.meta.baslik!.not} x={1500} y={520} genislik={520} boyut={130} renk={RENK.mercan} />
    </>
  );
};

export default S01;
