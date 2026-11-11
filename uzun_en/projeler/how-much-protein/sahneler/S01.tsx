// Sahne 1 — Health ABC: en çok protein yiyenler ~%40 daha az yağsız kütle kaybetti.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, Panel, RENK, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";
import type { SP } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.3, 0.8));
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 70, 1800])}>
        <Etiket t={t} bas={K(0, "protein")} capa={[500, 560]} konum={[1010, 800]} metin="HIGH PROTEIN" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={760} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={K(0, "2,066")} metin="2,066 ADULTS" x={1860} y={250} boyut={84} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "seventies")} metin="AGES 70 TO 79" x={1860} y={350} boyut={84} hiza="sag" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "40")} vurgu="–40%" not="less lean mass lost with the highest protein intake" x={1560} y={470} genislik={440} />
      <Not t={t} bas={K(0, "over")} metin="OVER THREE YEARS" x={1860} y={800} hiza="sag" boyut={34} agirlik={800} />
    </>
  );
};

export default S01;
