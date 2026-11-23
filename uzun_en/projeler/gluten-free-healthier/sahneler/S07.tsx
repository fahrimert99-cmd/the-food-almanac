// Sahne 7: çölyak hastalığı, bağırsak ve ekmek üzerinde etiketler
import React from "react";
import { Baslik, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(1, "gluten")} capa={[850, 780]} konum={[1180, 860]} metin="GLUTEN" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "lining")} capa={[560, 540]} konum={[620, 80]} metin="INTESTINAL LINING" renk={RENK.mercan} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={760} opak={0.9} />
      <Baslik t={t} bas={K(0, "celiac")} metin="CELIAC" x={1860} y={170} boyut={120} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "disease")} metin="DISEASE" x={1860} y={290} boyut={120} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(0, "autoimmune")} metin="an autoimmune reaction to gluten" x={1860} y={370} hiza="sag" genislik={560} boyut={32} />
      <Baslik t={t} bas={K(1, "immune")} metin="IMMUNE SYSTEM ATTACKS" x={1860} y={560} boyut={54} renk={RENK.mercan} hiza="sag" />
    </>
  );
};
export default S07;
