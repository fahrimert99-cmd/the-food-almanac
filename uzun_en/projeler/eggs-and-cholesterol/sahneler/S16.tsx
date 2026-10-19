// Sahne 16 — manşetlerin atladığı kısım: yeme düzeni için diyet kolesterolü hâlâ önemli (panel solda).
import React from "react";
import { Baslik, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cik = K(1, "change") - 0.1;
  const pPanel = eout(ilerle(t, K(0, "part") - 0.5, 0.7));
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [100, 110, 1720])}>
        <Etiket t={t} bas={K(1, "healthy")} capa={[1000, 300]} konum={[1020, 150]} metin="HEALTHY EATING PATTERN" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={880} />
      <Baslik t={t} bas={K(0, "part")} bitis={cik} metin="THE PART" x={60} y={330} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "headlines")} bitis={cik} metin="HEADLINES" x={60} y={440} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "skipped")} bitis={cik} metin="SKIPPED" x={60} y={550} boyut={100} renk={RENK.mercan} />
      <Not t={t} bas={K(1, "change")} metin="THE CHANGE DOES NOT MEAN" x={64} y={290} boyut={34} agirlik={800} renk={RENK.altin} genislik={760} />
      <Baslik t={t} bas={K(1, "dietary")} metin="DIETARY" x={60} y={410} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "cholesterol")} metin="CHOLESTEROL" x={60} y={520} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "matters")} metin="STILL MATTERS" x={60} y={650} boyut={100} renk={RENK.koyuYesil} />
    </>
  );
};

export default S16;
