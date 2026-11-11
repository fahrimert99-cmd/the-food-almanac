// Sahne 35 — açıklama 2: kilo kaybı (şerit metre + somon tabağı).
import React from "react";
import { Baslik, Etiket, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 50, 1780])} />
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={760} />
      <Baslik t={t} bas={K(1, "about")} metin="ABOUT 5 KG" x={1860} y={230} boyut={110} renk={RENK.koyuYesil} hiza="sag" />
      <VurguRozet t={t} bas={K(1, "eleven")} vurgu="11 POUNDS" not={b.not} x={1560} y={380} boyut={76} genislik={560} renk={RENK.altin} />
      <Etiket t={t} bas={K(2, "weight")} capa={[230, 560]} konum={[330, 860]} metin="WEIGHT LOSS" renk={RENK.mercan} />
      <Not t={t} bas={K(2, "Lisa")} metin="Lisa Barnes: it could have been weight loss that benefited thinking in this trial." x={1860} y={640}
        hiza="sag" genislik={600} boyut={34} />
    </>
  );
};

export default S35;
