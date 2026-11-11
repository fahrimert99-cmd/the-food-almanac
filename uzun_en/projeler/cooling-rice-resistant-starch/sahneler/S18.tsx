// Sahne 18 — iki saatlik ortalama glukoz: soğuk 122, sıcak 128, fark 6 (sol görsel, sağ sayılar).
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [20, 70, 1800])}>
        <Etiket t={t} bas={K(0, "glucose")} capa={[370, 345]} konum={[760, 190]} metin="GLUCOSE SENSOR" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "cooled rice")} capa={[520, 650]} konum={[900, 840]} metin="COOLED RICE" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={K(0, "two")} metin="2-HOUR AVERAGE" x={1120} y={150} boyut={64} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "122")} metin="122" x={1120} y={330} boyut={150} renk={RENK.yesil} />
      <Not t={t} bas={K(0, "122") + 0.3} metin="mg/dL · COOLED RICE" x={1420} y={300} boyut={34} agirlik={800} />
      <Baslik t={t} bas={K(0, "128")} metin="128" x={1120} y={540} boyut={150} renk={RENK.mercan} />
      <Not t={t} bas={K(0, "128") + 0.3} metin="mg/dL · HOT RICE" x={1420} y={510} boyut={34} agirlik={800} />
      <VurguRozet t={t} bas={K(1, "six")} vurgu="–6" not="mg/dL on average" x={1500} y={700} genislik={420} boyut={110} />
    </>
  );
};

export default S18;
