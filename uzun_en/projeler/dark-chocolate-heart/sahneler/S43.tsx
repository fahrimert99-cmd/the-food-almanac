// Sahne 43 — yıllar boyunca sık tüketim; sektör derneğinin itirazı
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOften = K(0, "often,"), tYears = K(0, "years."), tAssoc = K(1, "confectioners'");
  const tNot = K(1, "not"), tMeet = K(1, "strict");
  const pP = eout(ilerle(t, 0.2, 0.6));
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1760])}>
        <Etiket t={t} bas={tOften} bitis={tAssoc - 0.2} capa={[580, 490]} konum={[1010, 560]} metin="OFTEN" renk={RENK.altin} boyut={28} />
      </Kamera>
      <Panel a={pP} taraf="sag" genislik={960} opak={1} />
      <Baslik t={t} bas={0.3} bitis={tOften - 0.1} metin="THE WORRY" x={1860} y={250} boyut={96} renk={RENK.koyuYesil} hiza="sag" />
      <BaslikBlok t={t} bas={tOften} bitis={tAssoc - 0.2} satirlar={["OFTEN, OVER", "YEARS"]} x={1860} y={250} boyut={118} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Baslik t={t} bas={tAssoc} metin="TRADE GROUP SAYS" x={1860} y={230} boyut={76} renk={RENK.koyuYesil} hiza="sag" />
      <Liste t={t} isaret="carpi" x={1240} y={360} aralik={190} boyut={38} genislik={640}
        ogeler={[{ bas: tNot, metin: "CALIFORNIA BENCHMARK: NOT A FOOD-SAFETY STANDARD", renk: RENK.mercan },
          { bas: tMeet, metin: "PRODUCTS MEET STRICT SAFETY REQUIREMENTS", renk: RENK.yesil }]} />
    </>
  );
};

export default S43;
