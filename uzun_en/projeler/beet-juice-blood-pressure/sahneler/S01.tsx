// Sahne 1 — 22 deneme meta-analizi: cam, pancar, tansiyon aleti; sağ panelde başlık + rozet.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1780])}>
        <Etiket t={t} bas={K(0, "juice")} bitis={5.4} capa={[360, 330]} konum={[640, 110]} metin="BEET JUICE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "blood")} bitis={7.6} capa={[860, 330]} konum={[930, 130]} metin="BP CUFF" renk={RENK.koyuYesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={900} opak={1} />
      <Baslik t={t} bas={K(0, "22")} metin="22 TRIALS" x={1470} y={300} boyut={118} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={K(0, "three")} vurgu="–3.55" not="points of systolic pressure" x={1470} y={420} genislik={460} boyut={140} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={K(0, "22")} />}
    </>
  );
};

export default S01;
