// Sahne 27 — Nadir ama ciddi: koridor, sağda iki rakam rozeti ve başlık.
import React from "react";
import { Baslik, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])} />
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={760} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <VurguRozet t={t} bas={K(0, "1,250")} vurgu="1,250" not="US cases a year, per the CDC" x={1540} y={150} genislik={420} />
      <VurguRozet t={t} bas={K(0, "172")} vurgu="172" not="die" x={1540} y={420} genislik={420} renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "rare")} metin="RARE," x={1860} y={720} boyut={100} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(1, "serious")} metin="BUT SERIOUS" x={1860} y={830} boyut={100} renk={RENK.mercan} hiza="sag" />
    </>
  );
};
export default S27;
