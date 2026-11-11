// Sahne 4 — kanal tanıtımı, diz ve baharat.
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1860], [120, 60, 1680]);
  const tKnee = K(1, "knee"), tSpice = K(1, "the spice");
  const pPanel = eout(ilerle(t, 0.1, 0.6)) * sol(t, tSpice - 0.1);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={pen}>
        <Etiket t={t} bas={tSpice} capa={[1180, 690]} konum={[1160, 500]} metin="THE SPICE" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={1100} opak={0.9} />
      <Baslik t={t} bas={0.25} bitis={tKnee - 0.2} metin="WELCOME TO" x={64} y={130} boyut={30} renk={RENK.altin} font="inter" aralik={8} />
      <Baslik t={t} bas={K(0, "food")} bitis={tKnee - 0.2} metin={MARKA.filigran} x={60} y={230} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={tKnee} bitis={tSpice - 0.1} metin="THE KNEE" x={60} y={230} boyut={120} renk={RENK.koyuYesil} />
      <Not t={t} bas={tKnee + 0.1} bitis={tSpice - 0.1} metin="where the story starts" x={64} y={310} boyut={34} renk={RENK.gri} />
    </>
  );
};

export default S04;
