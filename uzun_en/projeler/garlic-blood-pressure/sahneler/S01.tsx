// Sahne 1 — sarımsak ve tansiyon: soru, sonra 2016 derlemesi.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSoru = K(0, "high blood pressure");
  const tYeni = K(1, "A 2016 review") - 0.1;
  const pPanel = eout(ilerle(t, tSoru - 0.5, 0.7));
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 80, 1760], [90, 120, 1640])}>
        <Etiket t={t} bas={K(0, "garlic")} bitis={tYeni + 0.2} capa={[560, 600]} konum={[300, 800]} metin="GARLIC" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={760} />
      <Baslik t={t} bas={tSoru} bitis={tYeni} metin="HIGH BLOOD" x={1860} y={300} boyut={92} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tSoru + 0.2} bitis={tYeni} metin="PRESSURE?" x={1860} y={410} boyut={92} hiza="sag" renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "20")} metin="20 TRIALS" x={1860} y={300} boyut={92} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "970")} metin="970 PEOPLE" x={1860} y={410} boyut={92} hiza="sag" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "five points")} vurgu="–5" not="points systolic, supplements" x={1560} y={560} genislik={440} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={tYeni} />
    </>
  );
};

export default S01;
