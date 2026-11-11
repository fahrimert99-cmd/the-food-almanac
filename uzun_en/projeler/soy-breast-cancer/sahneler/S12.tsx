// Sahne 12 — bütün soya karşı ekstrakt: sol görsel, sağ panelde karşılaştırma maddeleri.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [20, 50, 1800])}>
        <Etiket t={t} bas={K(1, "whole soy")} capa={[360, 560]} konum={[330, 380]} metin="WHOLE SOY" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "isolated")} capa={[700, 700]} konum={[700, 900]} metin="ISOLATED ISOFLAVONES" renk={RENK.mercan} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.2, 0.7))} taraf="sag" genislik={820} />
      <BaslikBlok t={t} bas={K(0, "form")} satirlar={s.meta.baslik!.satirlar} x={1290} y={250} boyut={92} />
      <Not t={t} bas={K(1, "2012")} metin="2012 ONCOLOGY REVIEW" x={1290} y={440} boyut={30} renk={RENK.altin} agirlik={800} />
      <Liste t={t} x={1290} y={540} aralik={120} boyut={32} isaret="onay" genislik={580} ogeler={[
        { bas: K(1, "whole soy"), metin: "WHOLE SOY: NO TUMOR-PROMOTING EFFECT", renk: RENK.yesil },
        { bas: K(1, "isolated"), metin: "ISOLATED ISOFLAVONES: EFFECT SEEN", renk: RENK.mercan },
      ]} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};
export default S12;
