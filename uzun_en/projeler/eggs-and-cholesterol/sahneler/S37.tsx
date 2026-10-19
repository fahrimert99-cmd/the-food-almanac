// Sahne 37 — iki büyük çalışma neden ayrışıyor? İki kapı = iki çalışma. Alttaki sahte yazı kamera dışında tutulur (y+h <= 1030).
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tNob = K(1, "nobody");
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [40, 10, 1800], [150, 10, 1650])}>
        <Etiket t={t} bas={K(0, "two")} bitis={tNob - 0.1} capa={[890, 580]} konum={[900, 330]} metin="STUDY 1" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "big")} bitis={tNob - 0.1} capa={[1420, 640]} konum={[1420, 400]} metin="STUDY 2" renk={RENK.mercan} />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={800} opak={0.95} />
      <BaslikBlok t={t} bas={0.25} satirlar={b.satirlar} x={70} y={190} boyut={104} />
      <Baslik t={t} bas={tNob} metin="NOBODY KNOWS" x={70} y={520} boyut={84} renk={RENK.altin} />
      <Not t={t} bas={tNob + 0.6} metin="for certain" x={74} y={580} boyut={40} />
      <Not t={t} bas={K(1, "several")} metin="but several things stand out" x={74} y={650} boyut={36} renk={RENK.koyuYesil} agirlik={800} />
    </>
  );
};

export default S37;
