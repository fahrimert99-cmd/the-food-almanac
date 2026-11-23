// Sahne 31 — 2013 ikinci test: iki kase, sağ boş kâğıtta başlık ve notlar.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  const [l1, l2] = m.baslik?.satirlar ?? ["37 ADULTS", "SECOND TEST"];
  const t13 = K(0, "2013"), t37 = K(0, "37"), tSens = K(0, "believed");
  const tFod = K(1, "low-FODMAP"), tLim = K(1, "limits");
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 60, 1740])}>
        <Etiket t={t} bas={tFod} capa={[890, 560]} konum={[800, 300]} metin="LOW-FODMAP DIET" renk={RENK.yesil} />
      </Kamera>
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} bas={0.2} />}
      <Not t={t} bas={t13} metin="2013 · same team, tighter test" x={1420} y={150} boyut={30} genislik={440} />
      <Baslik t={t} bas={t37 - 0.05} metin={l1} x={1420} y={290} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={t37 + 0.13} metin={l2} x={1420} y={395} boyut={92} renk={RENK.koyuYesil} />
      <Not t={t} bas={tSens} metin="Believed they were gluten sensitive" x={1424} y={480} boyut={32} genislik={440} />
      <Not t={t} bas={tLim} metin="Limits certain fermentable carbohydrates" x={1424} y={620} boyut={32} genislik={440} />
    </>
  );
};

export default S31;
