// Sahne 11 — katılımcılar: büyük kalp-damar hastalığı yok, ortalama yaş ~72.
import React from "react";
import { BaslikBlok, Kamera, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [-40, 20, 1800]);
  const pP = eout(ilerle(t, K(0, "None") - 0.2, 0.7));
  return (
    <>
      <Kamera gorsel="tam/11" pencere={p} />
      <Panel a={pP} taraf="sag" genislik={760} opak={0.96} />
      <BaslikBlok t={t} bas={K(0, "None")} satirlar={["NO MAJOR", "CV DISEASE"]} x={1860} y={190} boyut={100} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={K(1, "72.")} vurgu="ABOUT 72" not="AVERAGE AGE" x={1520} y={470} genislik={460} boyut={100} />
    </>
  );
};

export default S11;
