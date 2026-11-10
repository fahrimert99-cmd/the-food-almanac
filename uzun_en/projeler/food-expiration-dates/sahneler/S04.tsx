// Sahne 4 — marka tanıtımı ve "kim karar veriyor?"; sol panelde yazı, sağda etiket.
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const p = eout(ilerle(t, 0, 0.5));
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1830])}>
        <Etiket t={t} bas={K(1, "dates")} capa={[1060, 213]} konum={[1330, 62]} metin="DATE STICKER" renk={RENK.altin} />
      </Kamera>
      <Panel a={p} taraf="sol" genislik={920} />
      <Baslik t={t} bas={0.05} bitis={c[1].bas - 0.1} metin="THIS IS" x={70} y={380} boyut={34} renk={RENK.altin} font="inter" aralik={8} />
      <Baslik t={t} bas={K(0, "Food") - 0.2} bitis={c[1].bas - 0.1} metin={MARKA.ad.toUpperCase()} x={70} y={470} boyut={92} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={c[1].bas} metin="LET'S START WITH" x={70} y={360} boyut={34} renk={RENK.altin} font="inter" aralik={6} />
      <Baslik t={t} bas={K(1, "who")} metin="WHO DECIDES" x={70} y={460} boyut={112} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "those")} metin="THE DATES?" x={70} y={580} boyut={112} renk={RENK.koyuYesil} />
    </>
  );
};

export default S04;
