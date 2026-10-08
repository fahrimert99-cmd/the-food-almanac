// Sahne 40 — açık sorular: HbA1c, yıllar içinde komplikasyonlar, kimler en çok kazanır; daha uzun ve büyük çalışmalar.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik?.satirlar ?? ["OPEN", "QUESTIONS"];
  const tWalk = K(0, "walking"), tHb = K(0, "HbA1c"), tCo = K(0, "complications"), tWho = K(0, "which"), tLong = K(1, "longer");
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={tWalk} bitis={tHb - 0.2} capa={[330, 840]} konum={[470, 400]} metin="WALKING AFTER MEALS" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={820} />
      <BaslikBlok t={t} bas={K(0, "know")} satirlar={b} x={1860} y={190} boyut={100} hiza="sag" />
      <Liste t={t} x={1180} y={440} aralik={105} boyut={34} genislik={680} isaret="nokta" ogeler={[
        { bas: tHb, metin: "HBA1C", renk: RENK.altin },
        { bas: tCo, metin: "COMPLICATIONS OVER YEARS", renk: RENK.altin },
        { bas: tWho, metin: "WHO GAINS THE MOST", renk: RENK.altin },
      ]} />
      <Not t={t} bas={tLong} metin="NEEDED: LONGER, LARGER STUDIES" x={1860} y={800} hiza="sag" boyut={34} agirlik={800} renk={RENK.koyuYesil} />
    </>
  );
};

export default S40;
