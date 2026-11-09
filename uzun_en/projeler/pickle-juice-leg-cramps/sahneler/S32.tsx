// Sahne 32 — güvenlik: riskli durumlarda önce doktora danış.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tAsk = K(0, "ask");
  const bit = tAsk - 0.1;
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 60, 1800])}>
        <Etiket t={t} bas={K(0, "doctor")} capa={[660, 673]} konum={[300, 230]} metin="ASK YOUR DOCTOR" renk={RENK.yesil} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={780} />
      <BaslikBlok t={t} bas={0.3} satirlar={b.satirlar} x={1860} y={200} boyut={110} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Liste t={t} x={1290} y={440} aralik={96} boyut={34} genislik={600} isaret="nokta" ogeler={[
        { bas: K(0, "high"), bitis: bit, metin: "HIGH BLOOD PRESSURE", renk: RENK.altin },
        { bas: K(0, "heart"), bitis: bit, metin: "HEART FAILURE", renk: RENK.altin },
        { bas: K(0, "kidney"), bitis: bit, metin: "KIDNEY DISEASE", renk: RENK.altin },
        { bas: K(0, "water"), bitis: bit, metin: "WATER PILL", renk: RENK.altin },
      ]} />
      <Not t={t} bas={K(1, "advised")} metin="THE RESEARCHER ADVISED CHECKING WITH A PHYSICIAN FIRST" x={1860} y={460} hiza="sag" boyut={36}
        agirlik={800} genislik={540} />
    </>
  );
};

export default S32;
