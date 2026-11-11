// Sahne 11 — geleneksel öneri: düşük kalsiyum, günde ~400 mg (sağ panel).
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta.baslik;
  const tAdv = K(0, "traditional"), tLow = K(0, "low-calcium"), tDiet = K(0, "diet"), tNum = K(0, "400");
  const aP = eout(ilerle(t, 0.2, 0.7));
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 120, 1500], [80, 190, 1350])}>
        <Etiket t={t} bas={tDiet} capa={[560, 800]} konum={[330, 800]} metin="LOW-CALCIUM DIET" renk={RENK.altin} />
      </Kamera>
      <Panel a={aP} taraf="sag" genislik={940} />
      <Baslik t={t} bas={tAdv} metin="TRADITIONAL ADVICE" x={1290} y={250} boyut={44} renk={RENK.altin} />
      <BaslikBlok t={t} bas={tLow} satirlar={m?.satirlar ?? ["LOW CALCIUM"]} x={1290} y={340} boyut={92} renkler={[RENK.lacivert]} />
      <VurguRozet t={t} bas={tNum} vurgu={m?.vurgu ?? "400 mg"} not={m?.not} x={1560} y={470} genislik={480} renk={RENK.mercan} />
    </>
  );
};

export default S11;
