// Sahne 18 — böbrek taşı: görsel solda, sağ panelde başlık, +%17 rozeti ve 273 kadın notu.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(1, "kidney stones"), tSayi = K(1, "17 percent"), tSup = K(1, "supplements");
  const tKadin = K(2, "one extra woman"), t273 = K(2, "273");
  const aPanel = eout(ilerle(t, 0.3, 0.7));
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [60, 34, 1780], [100, 56, 1700])}>
        <Etiket t={t} bas={tBas + 0.3} bitis={tSup - 0.3} capa={[400, 640]} konum={[330, 420]} metin="KIDNEY STONE" renk={RENK.mercan} />
        <Etiket t={t} bas={tSup} capa={[780, 680]} konum={[900, 330]} metin="SUPPLEMENTS" renk={RENK.yesil} />
      </Kamera>
      <Panel a={aPanel} taraf="sag" genislik={900} />
      <BaslikBlok t={t} bas={tBas} satirlar={["KIDNEY", "STONES"]} x={1840} y={230} boyut={110} hiza="sag" />
      <VurguRozet t={t} bas={tSayi} vurgu="+17%" not="more common on calcium plus vitamin D" x={1540} y={480} genislik={560} renk={RENK.mercan} />
      <Not t={t} bas={tKadin} metin="Roughly 1 extra woman with a stone" x={1840} y={760} boyut={36} hiza="sag" genislik={760} />
      <Not t={t} bas={t273} metin="for every 273 women over 7 years" x={1840} y={808} boyut={36} hiza="sag" genislik={760} />
    </>
  );
};

export default S18;
