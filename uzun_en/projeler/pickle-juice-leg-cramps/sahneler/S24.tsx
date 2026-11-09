// Sahne 24 — hangi bileşen? tuz, sirke, tat.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 20, 1800], [60, 60, 1700])}>
        <Etiket t={t} bas={K(0, "pickle juice")} capa={[600, 420]} konum={[1000, 330]} metin="PICKLE JUICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "salt,")} bitis={K(1, "vinegar,") + 1.2} capa={[270, 800]} konum={[250, 905]} metin="SALT" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "vinegar,")} bitis={K(1, "taste") } capa={[250, 690]} konum={[250, 440]} metin="VINEGAR" renk={RENK.mercan} />
      </Kamera>
      <Not t={t} bas={K(1, "only with water")} metin="COMPARED ONLY WITH WATER" x={1000} y={160} boyut={36} agirlik={800} genislik={800} />
      <Baslik t={t} bas={K(1, "salt,")} metin="SALT?" x={1060} y={430} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "vinegar,")} metin="VINEGAR?" x={1060} y={560} boyut={110} renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "taste")} metin="TASTE?" x={1060} y={690} boyut={110} renk={RENK.koyuYesil} />
      {b.not && <Not t={t} bas={K(1, "work")} metin={b.not} x={1064} y={770} boyut={32} genislik={760} />}
    </>
  );
};

export default S24;
