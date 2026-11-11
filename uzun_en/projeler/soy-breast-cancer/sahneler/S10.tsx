// Sahne 10 — kemirgen deneyleri: fare + yoğun genistein; sağ panelde neden-sonuç zinciri.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(0, "experiments,");
  const tGen = K(0, "genistein,");
  const tFare = K(0, "rodents.");
  const tModel = K(1, "certain models");
  const tBuyume = K(1, "stimulated");
  const tTumor = K(1, "estrogen-dependent");
  const aPanel = eout(ilerle(t, 0.2, 0.7));
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 40, 1800])} >
        <Etiket t={t} bas={tGen} capa={[880, 790]} konum={[960, 700]} metin="GENISTEIN" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={tFare} capa={[640, 575]} konum={[960, 570]} metin="RODENT" renk={RENK.lacivert} boyut={26} />
      </Kamera>
      <Panel a={aPanel} taraf="sag" genislik={820} />
      <BaslikBlok t={t} bas={tBaslik} satirlar={s.meta.baslik!.satirlar} x={1290} y={250} boyut={100} />
      <Not t={t} bas={tModel} metin="IN CERTAIN MODELS" x={1290} y={440} boyut={30} renk={RENK.altin} agirlik={800} />
      <Liste t={t} x={1290} y={520} aralik={96} boyut={32} isaret="nokta" genislik={580} ogeler={[
        { bas: tGen, metin: "CONCENTRATED GENISTEIN", renk: RENK.altin },
        { bas: tBuyume, metin: "GROWTH STIMULATED", renk: RENK.mercan },
        { bas: tTumor, metin: "ESTROGEN-DEPENDENT TUMORS", renk: RENK.mercan },
      ]} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};

export default S10;
