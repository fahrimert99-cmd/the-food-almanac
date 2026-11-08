// Sahne 10 — bağırsak bakterisi hipotezi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Panel, Parcaciklar, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIdea = K(0, "idea"), tSw = K(0, "sweeteners"), tBac = K(0, "bacteria"), tAff = K(0, "affect");
  const tHyp = K(1, "hypothesis"), tNot = K(1, "not a fact");
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 40, 1900], [30, 70, 1800])} />
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={640} />
      <BaslikBlok t={t} bas={tIdea} satirlar={s.meta.baslik?.satirlar ?? []} x={1860} y={260} boyut={96} hiza="sag" />
      <Etiket t={t} bas={tSw} bitis={tBac - 0.2} capa={[1010, 400]} konum={[1010, 130]} metin="SWEETENERS" renk={RENK.altin} />
      <Etiket t={t} bas={tBac} bitis={tAff + 1.5} capa={[547, 693]} konum={[330, 130]} metin="GUT BACTERIA" renk={RENK.mercan} />
      {/* içecekten bağırsağa akış: 'etkileyebilir' sorusu */}
      <Parcaciklar t={t} bas={tAff} kaynak={[820, 560]} hedef={[450, 560]} adet={18} aralik={0.14} omur={1.8} kavis={-120} tohum="gut" />
      <VurguRozet t={t} bas={tHyp} vurgu="HYPOTHESIS" not={tNot > 0 && t > tNot ? "NOT A FACT" : undefined} x={1560} y={560} genislik={520} boyut={72} />
    </>
  );
};

export default S10;
