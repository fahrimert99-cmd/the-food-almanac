// Sahne 3 — market ekmek rafı; sağda panel ve iki vuruş.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIlk = K(0, "know what");
  const tIki = K(0, "spot real");
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 50, 1800])}>
        <Etiket t={t} bas={K(0, "sourdough")} capa={[330, 870]} konum={[330, 640]} metin="SOURDOUGH" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, tIlk - 0.4, 0.6))} taraf="sag" genislik={780} opak={0.96} />
      <BaslikBlok t={t} bas={tIlk} bitis={tIki - 0.15} satirlar={["WHAT TO", "EXPECT"]} x={1860} y={330} boyut={104} hiza="sag" />
      <BaslikBlok t={t} bas={tIki} satirlar={["SPOT REAL", "SOURDOUGH"]} x={1860} y={330} boyut={96} hiza="sag"
        renkler={[RENK.lacivert, RENK.altin]} />
      <Baslik t={t} bas={K(0, "on a shelf")} metin="ON A SHELF" x={1860} y={560} boyut={44} hiza="sag" font="inter" aralik={6} renk={RENK.gri} />
    </>
  );
};

export default S03;
