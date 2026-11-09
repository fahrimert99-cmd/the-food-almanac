// Sahne 27 — resveratrol: üzüm kabuğu ve bardak
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, Panel, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";
import { eout, ilerle } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tQ = K(1, "key");
  const pP = eout(ilerle(t, tQ - 0.3, 0.6));
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 0, 1900], [60, 50, 1760])}>
        <Etiket t={t} bas={K(0, "resveratrol")} bitis={tQ - 0.2} capa={[940, 240]} konum={[1120, 95]} metin="RESVERATROL" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "grape")} bitis={tQ - 0.2} capa={[700, 600]} konum={[380, 150]} metin="GRAPE SKINS" renk={RENK.koyuYesil} />
      </Kamera>
      <Panel a={pP} taraf="sol" genislik={1000} opak={0.97} />
      <Not t={t} bas={tQ} metin="NOT WHETHER IT EXISTS IN WINE" x={100} y={330} boyut={36} agirlik={800} genislik={800} />
      <BaslikBlok t={t} bas={K(2, "enough")} satirlar={["ENOUGH FROM", "A GLASS?"]} x={100} y={460} boyut={120} />
    </>
  );
};
export default S27;
