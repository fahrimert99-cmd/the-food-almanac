// Sahne 10 — jelin kalınlığı: miktar, molekül boyutu, çözünürlük.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tJel = K(0, "gel");
  const tSon = K(3, "steel-cut");
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])}>
        <Etiket t={t} bas={tJel + 0.1} bitis={tSon - 0.3} capa={[585, 540]} konum={[300, 860]} metin="THICK" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "how well")} bitis={tSon - 0.3} capa={[1040, 600]} konum={[1040, 900]} metin="THIN" renk={RENK.gri} />
      </Kamera>
      <Baslik t={t} bas={tJel} metin="THICK GEL" x={1860} y={190} boyut={116} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(1, "depends")} bitis={tSon - 0.3} metin="THE GEL DEPENDS ON:" x={1250} y={330} boyut={30} renk={RENK.gri} agirlik={800} />
      <Liste t={t} x={1250} y={400} aralik={92} boyut={36} isaret="nokta" genislik={620}
        ogeler={[
          { bas: K(1, "how much"), metin: "AMOUNT", renk: RENK.altin, bitis: tSon - 0.3 },
          { bas: K(1, "how large"), metin: "MOLECULE SIZE", renk: RENK.altin, bitis: tSon - 0.3 },
          { bas: K(1, "how well"), metin: "SOLUBILITY", renk: RENK.altin, bitis: tSon - 0.3 },
        ]} />
      <Not t={t} bas={tSon - 0.1} metin="EXPLAINS, LATER:" x={1250} y={330} boyut={30} renk={RENK.gri} agirlik={800} />
      <Liste t={t} x={1250} y={400} aralik={92} boyut={36} isaret="nokta" genislik={620}
        ogeler={[
          { bas: tSon, metin: "STEEL-CUT", renk: RENK.yesil },
          { bas: K(3, "rolled"), metin: "ROLLED", renk: RENK.yesil },
          { bas: K(3, "instant"), metin: "INSTANT", renk: RENK.yesil },
        ]} />
    </>
  );
};

export default S10;
