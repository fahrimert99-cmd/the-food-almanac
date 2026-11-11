// Sahne 1 — saldırı: tuzluk yalnızca %5
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Panel, RENK, VurguRozet, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.2, 0.7));
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1810])}>
        {/* tuzluk — son vuruş */}
        <Etiket t={t} bas={K(0, "salt shaker")} capa={[510, 430]} konum={[960, 150]} metin="SALT SHAKER" renk={RENK.mercan} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={720} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <Baslik t={t} bas={K(0, "450")} metin="450 AMERICAN ADULTS" x={1860} y={200} boyut={30} renk={RENK.altin} hiza="sag" font="inter" aralik={3} />
      <Baslik t={t} bas={K(0, "only")} metin="THE SHAKER" x={1860} y={320} boyut={112} renk={RENK.lacivert} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "five")} vurgu="5%" not="of the sodium these adults ate" x={1610} y={420} genislik={440} boyut={130} />
    </>
  );
};

export default S01;
