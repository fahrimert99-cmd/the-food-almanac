// Sahne 11 — Webb 2008: 14 gönüllü, bir bardak.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0, 0.6));
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])} />
      <Panel a={pPanel} taraf="sag" genislik={860} opak={0.9} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "tested")} />
      <BaslikBlok t={t} bas={K(1, "14")} satirlar={["ONE GLASS,", "14 VOLUNTEERS"]} x={1110} y={190} boyut={84} adim={0.35}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Etiket t={t} bas={K(1, "500")} capa={[663, 520]} konum={[500, 330]} metin="500 ML JUICE" renk={RENK.mercan} />
      <Etiket t={t} bas={K(1, "water.")} capa={[815, 560]} konum={[980, 420]} metin="WATER" renk={RENK.gri} />
      <VurguRozet t={t} bas={K(1, "10")} vurgu="–10.4" not="systolic points at the lowest" x={1480} y={470} genislik={560} boyut={150} />
    </>
  );
};

export default S11;
