// Sahne 44 — tek küçük çalışma; kısıtlar ve doktora danışma
import React from "react";
import { AltSis, Baslik, Kamera, Liste, Not, Panel, RENK, SP, einout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const Yama: React.FC<{ x: number; y: number; w: number; h: number }> = ({ x, y, w, h }) => (
  <div style={{ position: "absolute", left: x, top: y, width: w, height: h,
    background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 70%, ${kagit(0)} 100%)` }} />
);

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pPanel = einout(ilerle(t, 0, 0.7));
  const t2 = c[1].bas - 0.1, t3 = c[2].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 50, 1750])}>
        <Yama x={470} y={110} w={1000} h={90} />
        <Yama x={470} y={628} w={1000} h={52} />
      </Kamera>
      <AltSis a={0.9} />
      <Panel a={pPanel} taraf="sol" genislik={1000} opak={0.97} />
      <Baslik t={t} bas={K(0, "one")} bitis={t2} metin="ONE SMALL TRIAL" x={90} y={400} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "liquid") - 0.2} bitis={t2} metin="ONE LIQUID PRODUCT" x={90} y={510} boyut={72} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "says")} bitis={t3} metin="IT SAYS LITTLE ABOUT" x={90} y={330} boyut={38} agirlik={800} renk={RENK.gri} />
      <Liste t={t} isaret="nokta" boyut={44} x={90} y={410} aralik={100}
        ogeler={[{ bas: K(1, "pills"), metin: "OTHER PILLS", renk: RENK.altin, bitis: t3 }, { bas: K(1, "higher"), metin: "HIGHER DOSES", renk: RENK.altin, bitis: t3 }]} />
      <Baslik t={t} bas={K(2, "tell")} metin="TELL YOUR DOCTOR" x={90} y={400} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "before")} metin="BEFORE YOU START" x={90} y={510} boyut={72} renk={RENK.koyuYesil} />
    </>
  );
};

export default S44;
