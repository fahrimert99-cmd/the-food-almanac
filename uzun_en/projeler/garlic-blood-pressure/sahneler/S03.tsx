// Sahne 3 — videonun vaadi: üç madde, sağ panelde.
import React from "react";
import { Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, Baslik } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.2, 0.7));
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [560, 100, 1360], [600, 120, 1300])} />
      <Panel a={pPanel} taraf="sag" genislik={900} opak={0.97} />
      <Baslik t={t} bas={0.3} metin="BY THE END" x={1860} y={230} boyut={70} hiza="sag" renk={RENK.altin} />
      <Liste t={t} x={1080} y={340} aralik={150} boyut={40} genislik={780} ogeler={[
        { bas: K(0, "how big"), metin: "HOW BIG THE EFFECT IS" },
        { bas: K(0, "which garlic"), metin: "WHICH GARLIC WAS TESTED", renk: RENK.altin },
        { bas: K(0, "safety point"), metin: "BLOOD THINNER CAUTION", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S03;
